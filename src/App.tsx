import { Hero } from './sections/Hero';
import { ThreeLayers } from './sections/ThreeLayers';
import { OrchestrationLayer } from './sections/OrchestrationLayer';
import { SurfacesAreSeparate } from './sections/SurfacesAreSeparate';
import { WhereOpenClawFits } from './sections/WhereOpenClawFits';
import { OpenQuestions } from './sections/OpenQuestions';
import { Closing } from './sections/Closing';
import { LanguageToggle } from './components/LanguageToggle';
import { useLang } from './i18n/useLang';
import { t } from './i18n/content';

function TopBar({ lang, onLang }: { lang: 'en' | 'ru'; onLang: (l: 'en' | 'ru') => void }) {
  return (
    <div
      className="sticky top-0 z-40 w-full"
      style={{
        background: 'rgba(245, 238, 229, 0.85)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--color-border-default)',
      }}
    >
      <div className="mx-auto max-w-[1200px] flex items-center justify-between px-6 py-3 gap-4">
        <a
          href={import.meta.env.BASE_URL}
          aria-label="Cena Health"
          style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}
        >
          <img
            src={`${import.meta.env.BASE_URL}logo-cenahealth-teal.svg`}
            alt="Cena Health"
            height={28}
            style={{ height: 28, width: 'auto' }}
          />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span
            className="hidden sm:inline"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-utility-overline)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: 'var(--color-text-faint)',
            }}
          >
            {t(lang, 'topbar.briefing')}
          </span>
          <LanguageToggle lang={lang} onChange={onLang} />
        </div>
      </div>
    </div>
  );
}

function Footer({ lang }: { lang: 'en' | 'ru' }) {
  return (
    <footer
      className="mt-12 py-8 text-center"
      style={{
        borderTop: '1px solid var(--color-border-default)',
        fontSize: 'var(--text-body-04)',
        color: 'var(--color-text-faint)',
      }}
    >
      <img
        src={`${import.meta.env.BASE_URL}logo-cenahealth-teal.svg`}
        alt=""
        height={20}
        style={{
          height: 20,
          width: 'auto',
          display: 'inline-block',
          marginRight: 12,
          verticalAlign: 'middle',
          opacity: 0.7,
        }}
      />
      <span>{t(lang, 'footer.tag')}</span>
    </footer>
  );
}

export function App() {
  const { lang, setLang } = useLang();
  return (
    <>
      <TopBar lang={lang} onLang={setLang} />
      <Hero lang={lang} />
      <div className="mx-auto max-w-[1080px] px-6">
        <main style={{ width: '100%', margin: '0 auto' }}>
          <ThreeLayers lang={lang} />
          <OrchestrationLayer lang={lang} />
          <SurfacesAreSeparate lang={lang} />
          <WhereOpenClawFits lang={lang} />
          <OpenQuestions lang={lang} />
          <Closing lang={lang} />
        </main>
      </div>
      <Footer lang={lang} />
    </>
  );
}
