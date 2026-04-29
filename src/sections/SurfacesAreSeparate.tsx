import { MotifMark } from '../components/MotifMark';
import { Reveal } from '../components/Reveal';
import { SurfaceSeparation } from '../components/SurfaceSeparation';
import { t } from '../i18n/content';
import type { Lang } from '../i18n/content';

type Props = { lang: Lang };

export function SurfacesAreSeparate({ lang }: Props) {
  return (
    <Reveal as="section" className="py-20">
      <div className="flex items-center gap-2 mb-4">
        <MotifMark />
        <span
          style={{
            fontSize: 'var(--text-utility-overline)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 600,
            color: 'var(--color-text-faint)',
          }}
        >
          {t(lang, 'surfaces.section')}
        </span>
      </div>
      <h2
        className="mb-6"
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 'var(--text-heading-02)',
          lineHeight: 1.25,
          color: 'var(--color-text-normal)',
        }}
      >
        {t(lang, 'surfaces.title')}
      </h2>

      <div
        className="space-y-4 mb-10"
        style={{
          fontSize: 'var(--text-body-02)',
          lineHeight: 1.55,
          color: 'var(--color-text-normal)',
          maxWidth: 720,
        }}
      >
        <p>{t(lang, 'surfaces.body1')}</p>
        <p>{t(lang, 'surfaces.body2')}</p>
        <p style={{ color: 'var(--color-text-muted)' }}>{t(lang, 'surfaces.body3')}</p>
      </div>

      <div
        className="card-raised"
        style={{ padding: '28px', background: 'var(--color-surface-card)' }}
      >
        <SurfaceSeparation lang={lang} />
      </div>
    </Reveal>
  );
}
