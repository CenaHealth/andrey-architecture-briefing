import type { Lang } from '../i18n/content';
import { t } from '../i18n/content';

type Props = {
  lang: Lang;
  onChange: (lang: Lang) => void;
};

function setLangPreservingScroll(next: Lang, onChange: (l: Lang) => void) {
  if (typeof window === 'undefined') {
    onChange(next);
    return;
  }
  const sections = Array.from(document.querySelectorAll('section')) as HTMLElement[];
  let anchor: HTMLElement | null = null;
  let anchorOffset = 0;
  for (const s of sections) {
    const r = s.getBoundingClientRect();
    if (r.top <= 80) {
      anchor = s;
      anchorOffset = r.top;
    } else {
      break;
    }
  }
  onChange(next);
  if (!anchor) return;
  const target = anchor;
  const desiredOffset = anchorOffset;
  requestAnimationFrame(() => {
    const newRect = target.getBoundingClientRect();
    const delta = newRect.top - desiredOffset;
    window.scrollBy({ top: delta, left: 0, behavior: 'auto' });
  });
}

const buttonBase: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '11px',
  letterSpacing: '0.12em',
  padding: '5px 10px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'var(--color-border-default)',
  borderRadius: 'var(--radius-sm)',
  cursor: 'pointer',
  background: 'transparent',
  color: 'var(--color-text-muted)',
  transition: 'background 160ms ease, color 160ms ease, border-color 160ms ease',
};

const buttonActive: React.CSSProperties = {
  background: 'var(--color-primary)',
  color: '#ffffff',
  borderColor: 'var(--color-primary)',
};

export function LanguageToggle({ lang, onChange }: Props) {
  return (
    <div
      style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
      title={t(lang, 'topbar.toggleNote')}
    >
      <button
        type="button"
        onClick={() => setLangPreservingScroll('en', onChange)}
        style={lang === 'en' ? { ...buttonBase, ...buttonActive } : buttonBase}
        aria-pressed={lang === 'en'}
        aria-label="English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLangPreservingScroll('ru', onChange)}
        style={lang === 'ru' ? { ...buttonBase, ...buttonActive } : buttonBase}
        aria-pressed={lang === 'ru'}
        aria-label="Русский"
      >
        RU
      </button>
    </div>
  );
}
