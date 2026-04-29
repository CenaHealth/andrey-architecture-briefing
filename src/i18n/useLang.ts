import { useEffect, useState } from 'react';
import type { Lang } from './content';

const STORAGE_KEY = 'briefing.lang';

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const url = new URL(window.location.href);
  const param = url.searchParams.get('lang');
  if (param === 'ru' || param === 'en') return param;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'ru' || stored === 'en') return stored;
  return 'en';
}

export function useLang(): { lang: Lang; setLang: (l: Lang) => void } {
  const [lang, setLangState] = useState<Lang>(() => readInitialLang());

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  return { lang, setLang: setLangState };
}
