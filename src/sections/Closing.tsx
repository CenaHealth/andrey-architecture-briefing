import { MotifMark } from '../components/MotifMark';
import { Reveal } from '../components/Reveal';
import { t } from '../i18n/content';
import type { Lang, SectionKey } from '../i18n/content';

type Props = { lang: Lang };

const provenKeys: SectionKey[] = [
  'closing.proven1',
  'closing.proven2',
  'closing.proven3',
  'closing.proven4',
];

const projectedKeys: SectionKey[] = [
  'closing.projected1',
  'closing.projected2',
  'closing.projected3',
  'closing.projected4',
  'closing.projected5',
];

const alignKeys: SectionKey[] = [
  'closing.align1',
  'closing.align2',
  'closing.align3',
  'closing.align4',
];

export function Closing({ lang }: Props) {
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
          {t(lang, 'closing.section')}
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
        {t(lang, 'closing.title')}
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
        <p>{t(lang, 'closing.body1')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        <div
          className="card"
          style={{
            padding: '24px 26px',
            background: 'var(--color-surface-card)',
          }}
        >
          <span
            style={{
              fontSize: 'var(--text-utility-overline)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: 'var(--color-primary)',
            }}
          >
            {t(lang, 'closing.provenLabel')}
          </span>
          <ul style={{ marginTop: 14, paddingLeft: 0, listStyle: 'none' }}>
            {provenKeys.map((k) => (
              <li
                key={k}
                style={{
                  fontSize: 'var(--text-body-03)',
                  lineHeight: 1.5,
                  color: 'var(--color-text-normal)',
                  paddingLeft: '20px',
                  marginBottom: 8,
                  position: 'relative',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    color: 'var(--color-primary)',
                  }}
                >
                  ✓
                </span>
                {t(lang, k)}
              </li>
            ))}
          </ul>
          <p
            style={{
              marginTop: 14,
              marginBottom: 0,
              fontSize: 'var(--text-body-04)',
              color: 'var(--color-text-faint)',
              fontStyle: 'italic',
            }}
          >
            {t(lang, 'closing.provenFoot')}
          </p>
        </div>

        <div className="card-grouped" style={{ padding: '24px 26px' }}>
          <span
            style={{
              fontSize: 'var(--text-utility-overline)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: 'var(--color-text-muted)',
            }}
          >
            {t(lang, 'closing.projectedLabel')}
          </span>
          <ul style={{ marginTop: 14, paddingLeft: 0, listStyle: 'none' }}>
            {projectedKeys.map((k) => (
              <li
                key={k}
                style={{
                  fontSize: 'var(--text-body-03)',
                  lineHeight: 1.5,
                  color: 'var(--color-text-normal)',
                  paddingLeft: '20px',
                  marginBottom: 8,
                  position: 'relative',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    color: 'var(--color-text-muted)',
                  }}
                >
                  ○
                </span>
                {t(lang, k)}
              </li>
            ))}
          </ul>
          <p
            style={{
              marginTop: 14,
              marginBottom: 0,
              fontSize: 'var(--text-body-04)',
              color: 'var(--color-text-faint)',
              fontStyle: 'italic',
            }}
          >
            {t(lang, 'closing.projectedFoot')}
          </p>
        </div>
      </div>

      <div
        className="card-raised"
        style={{
          padding: '28px 30px',
          background:
            'linear-gradient(135deg, var(--color-surface-card) 0%, rgba(124, 185, 173, 0.10) 100%)',
        }}
      >
        <span
          style={{
            fontSize: 'var(--text-utility-overline)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 600,
            color: 'var(--color-primary)',
          }}
        >
          {t(lang, 'closing.alignLabel')}
        </span>
        <ol
          style={{
            marginTop: 14,
            paddingLeft: '20px',
            color: 'var(--color-text-normal)',
            fontSize: 'var(--text-body-02)',
            lineHeight: 1.55,
          }}
        >
          {alignKeys.map((k) => (
            <li key={k} style={{ marginBottom: 6 }}>
              {t(lang, k)}
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}
