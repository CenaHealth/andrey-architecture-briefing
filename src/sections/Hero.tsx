import { MotifMark } from '../components/MotifMark';
import { t } from '../i18n/content';
import type { Lang } from '../i18n/content';

type Props = { lang: Lang };

export function Hero({ lang }: Props) {
  return (
    <section
      className="relative w-full"
      style={{
        minHeight: '78vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'linear-gradient(135deg, var(--color-sand-50) 0%, var(--color-sand-50) 45%, rgba(124, 185, 173, 0.18) 100%)',
        padding: '120px 24px 72px',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 760, width: '100%' }}>
        <div className="mb-6">
          <MotifMark size={32} variant="hero" />
        </div>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-utility-overline)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 600,
            color: 'var(--color-text-faint)',
            margin: 0,
          }}
        >
          {t(lang, 'hero.kicker')}
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            fontSize: 'clamp(28px, 5vw, var(--text-display-02))',
            lineHeight: 1.12,
            letterSpacing: '-0.01em',
            color: 'var(--color-text-normal)',
            maxWidth: 700,
            margin: '12px 0 0 0',
          }}
        >
          {t(lang, 'hero.headlineLine1')}
          <br />
          {t(lang, 'hero.headlineLine2')}
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-body-01)',
            lineHeight: 1.5,
            color: 'var(--color-text-muted)',
            maxWidth: 600,
            marginTop: 20,
          }}
        >
          {t(lang, 'hero.lede')}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-body-02)',
            lineHeight: 1.55,
            color: 'var(--color-text-muted)',
            maxWidth: 580,
            marginTop: 18,
            fontStyle: 'italic',
          }}
        >
          {t(lang, 'hero.callout')}
        </p>
      </div>
    </section>
  );
}
