import { MotifMark } from '../components/MotifMark';
import { Reveal } from '../components/Reveal';

const questions = [
  {
    n: '01',
    title: 'Skill / workflow primitives',
    body: 'Can OpenClaw express deterministic workflows the way we need (onboarding a new staff member, ingesting a kitchen partner) — branching, validation, human-in-the-loop steps? What&rsquo;s the format?',
  },
  {
    n: '02',
    title: 'Hook-equivalent gating',
    body: 'Can we run deterministic checks before/after a model call inside OpenClaw, or do those checks live in our orchestration layer above OpenClaw?',
  },
  {
    n: '03',
    title: 'Sub-agent / scoped context dispatch',
    body: 'Can OpenClaw spawn scoped sub-contexts for sub-tasks, or does it operate as a single conversational agent? If the latter, our orchestrator handles fan-out and OpenClaw handles leaf tasks.',
  },
  {
    n: '04',
    title: 'Persistent state',
    body: 'What does OpenClaw provide for memory, plans, and state that survives across sessions? Does that state stay portable (Cena-owned) or does it become locked to OpenClaw&rsquo;s storage?',
  },
  {
    n: '05',
    title: 'Tool calling and integrations',
    body: 'Native integrations and how OpenClaw calls out to Cena-owned services. Latency, auth, audit.',
  },
  {
    n: '06',
    title: 'Multi-user, audit, compliance',
    body: 'User identity, access controls, audit trails — sufficient for staff use? Sufficient if any clinical context leaks in?',
  },
  {
    n: '07',
    title: 'Migration cost',
    body: 'If we adopt OpenClaw as the staff-surface executor and later need to swap, what&rsquo;s the actual cost given how we&rsquo;ve defined the integration?',
  },
];

export function OpenQuestions() {
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
          Section 5 · the spike
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
        Seven questions the spike has to answer
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
          Each question has a binary outcome: OpenClaw provides the primitive natively (good), we implement it in our orchestration layer above OpenClaw (also good — lower platform risk), or it&rsquo;s not buildable without OpenClaw changes (forces a decision).
        </p>
        <p style={{ color: 'var(--color-text-muted)' }}>
          You&rsquo;re the right person to co-own this spike. I can run web research; you have the hands-on experience. The list below is the acceptance criteria.
        </p>
      </div>

      <ol className="space-y-3" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {questions.map((q) => (
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
                {q.title}
              </h3>
              <p
                style={{
                  fontSize: 'var(--text-body-03)',
                  lineHeight: 1.5,
                  color: 'var(--color-text-muted)',
                  marginTop: 6,
                  marginBottom: 0,
                }}
                dangerouslySetInnerHTML={{ __html: q.body }}
              />
            </div>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
