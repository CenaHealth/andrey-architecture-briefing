import { MotifMark } from '../components/MotifMark';
import { Reveal } from '../components/Reveal';

const proven = [
  'System-level determinism over a non-deterministic LLM, via hooks + skills + rules',
  'Multi-step orchestration with plan persistence across sessions',
  'Expert dispatch into scoped sub-contexts',
  'Memory hygiene that survives model upgrades',
];

const projected = [
  'Multi-user agentic operations (staff, partners, patients concurrently)',
  'Clinical accountability boundaries — which decisions need a credentialed human',
  'Multi-tenant data isolation and audit',
  'Production reliability under load',
  'Vendor-portable orchestration with multiple executor backends',
];

export function Closing() {
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
          Section 6 · honest framing
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
        What&rsquo;s proven vs projected — and what we agree on
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
        <p>
          Vault is the existence proof that the three-layer pattern works. It is not yet evidence that the pattern scales to clinical multi-user. That gap is real and is part of what makes Ava ambitious. Future architecture decisions should name which gap they close.
        </p>
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
            Proven · today, in Vault
          </span>
          <ul
            style={{
              marginTop: 14,
              paddingLeft: 0,
              listStyle: 'none',
            }}
          >
            {proven.map((p) => (
              <li
                key={p}
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
                {p}
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
            Single-user, single-tenant, single-machine — Aaron&rsquo;s solo workflow.
          </p>
        </div>

        <div
          className="card-grouped"
          style={{ padding: '24px 26px' }}
        >
          <span
            style={{
              fontSize: 'var(--text-utility-overline)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: 'var(--color-text-muted)',
            }}
          >
            Projected · Ava goal, not yet built
          </span>
          <ul
            style={{
              marginTop: 14,
              paddingLeft: 0,
              listStyle: 'none',
            }}
          >
            {projected.map((p) => (
              <li
                key={p}
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
                {p}
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
            Multi-user, clinical, production — what the spike helps us close in on.
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
          What I&rsquo;d like us to align on
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
          <li style={{ marginBottom: 6 }}>
            The three-layer model — orchestration, execution, surfaces — is the shared frame.
          </li>
          <li style={{ marginBottom: 6 }}>
            Orchestration is Cena-owned. Executors and surfaces are evaluated case by case.
          </li>
          <li style={{ marginBottom: 6 }}>
            OpenClaw is on the table as an executor; the spike answers which roles it&rsquo;s feasible for.
          </li>
          <li>
            We co-own the spike. Your hands-on experience plus the seven questions in section 5 produces the answer faster than either of us going alone.
          </li>
        </ol>
      </div>
    </Reveal>
  );
}
