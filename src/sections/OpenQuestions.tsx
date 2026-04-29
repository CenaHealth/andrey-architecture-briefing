import { MotifMark } from '../components/MotifMark';
import { Reveal } from '../components/Reveal';
import { t } from '../i18n/content';
import type { Lang, SectionKey } from '../i18n/content';

type Props = { lang: Lang };

const questionKeys: Array<{ n: string; title: SectionKey; body: SectionKey }> = [
  { n: '01', title: 'q1.title', body: 'q1.body' },
  { n: '02', title: 'q2.title', body: 'q2.body' },
  { n: '03', title: 'q3.title', body: 'q3.body' },
  { n: '04', title: 'q4.title', body: 'q4.body' },
  { n: '05', title: 'q5.title', body: 'q5.body' },
  { n: '06', title: 'q6.title', body: 'q6.body' },
  { n: '07', title: 'q7.title', body: 'q7.body' },
];

export function OpenQuestions({ lang }: Props) {
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
          {t(lang, 'questions.section')}
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
        {t(lang, 'questions.title')}
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
        <p>{t(lang, 'questions.body1')}</p>
        <p style={{ color: 'var(--color-text-muted)' }}>{t(lang, 'questions.body2')}</p>
      </div>

      <ol className="space-y-3" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {questionKeys.map((q) => (
          <li
            key={q.n}
            className="card"
            style={{
              padding: '18px 22px',
              background: 'var(--color-surface-card)',
              display: 'grid',
              gridTemplateColumns: '52px 1fr',
              gap: '18px',
              alignItems: 'start',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-heading-03)',
                color: 'var(--color-primary)',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              {q.n}
            </span>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  fontSize: 'var(--text-heading-04)',
                  color: 'var(--color-text-normal)',
                  margin: 0,
                }}
              >
                {t(lang, q.title)}
              </h3>
              <p
                style={{
                  fontSize: 'var(--text-body-03)',
                  lineHeight: 1.5,
                  color: 'var(--color-text-muted)',
                  marginTop: 6,
                  marginBottom: 0,
                }}
                dangerouslySetInnerHTML={{ __html: t(lang, q.body) }}
              />
            </div>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
