import { MotifMark } from '../components/MotifMark';
import { Reveal } from '../components/Reveal';
import { t } from '../i18n/content';
import type { Lang, SectionKey } from '../i18n/content';

type Props = { lang: Lang };

const primitiveKeys: Array<{ name: SectionKey; body: SectionKey }> = [
  { name: 'orch.prim1.name', body: 'orch.prim1.body' },
  { name: 'orch.prim2.name', body: 'orch.prim2.body' },
  { name: 'orch.prim3.name', body: 'orch.prim3.body' },
  { name: 'orch.prim4.name', body: 'orch.prim4.body' },
  { name: 'orch.prim5.name', body: 'orch.prim5.body' },
  { name: 'orch.prim6.name', body: 'orch.prim6.body' },
];

export function OrchestrationLayer({ lang }: Props) {
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
          {t(lang, 'orch.section')}
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
        {t(lang, 'orch.title')}
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
        <p>{t(lang, 'orch.body1')}</p>
        <p style={{ color: 'var(--color-text-muted)' }}>{t(lang, 'orch.body2')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {primitiveKeys.map((p) => (
          <div
            key={p.name}
            className="card"
            style={{
              padding: '20px 22px',
              background: 'var(--color-surface-card)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: 'var(--text-heading-04)',
                color: 'var(--color-text-normal)',
                margin: 0,
              }}
            >
              {t(lang, p.name)}
            </h3>
            <p
              style={{
                fontSize: 'var(--text-body-03)',
                lineHeight: 1.5,
                color: 'var(--color-text-muted)',
                marginTop: 8,
                marginBottom: 0,
              }}
              dangerouslySetInnerHTML={{ __html: t(lang, p.body) }}
            />
          </div>
        ))}
      </div>

      <p
        className="prose-callout mt-10"
        style={{
          fontSize: 'var(--text-body-02)',
          lineHeight: 1.55,
          maxWidth: 680,
        }}
      >
        {t(lang, 'orch.callout')}
      </p>
    </Reveal>
  );
}
