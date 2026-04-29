import { MotifMark } from '../components/MotifMark';
import { Reveal } from '../components/Reveal';

const primitives = [
  {
    name: 'Triage gating',
    body: 'Every request passes through a deterministic triage step before reaching an executor. Vault implements this as a UserPromptSubmit hook; in Ava it is whatever step our orchestrator runs first — not a model decision.',
  },
  {
    name: 'Skill registry',
    body: 'Deterministic procedures the orchestrator dispatches. Skills are not the brain — they are templates the brain selects and the executor runs. They constrain output to a known shape so the LLM&rsquo;s non-determinism does not propagate to the system level.',
  },
  {
    name: 'Expert dispatch',
    body: 'Calibrated personas with their own context, retro logs, and judgment patterns. Dispatched into scoped sub-contexts so the parent orchestrator does not drown.',
  },
  {
    name: 'Plans (durable working state)',
    body: 'Files on disk that survive context compaction and session boundaries. The orchestrator maintains a plan for any non-trivial task.',
  },
  {
    name: 'Memory (durable cross-session state)',
    body: 'What was learned previously. Loaded on demand; verified against current state before acting. Not the same as plans.',
  },
  {
    name: 'Hook-style gating',
    body: 'Deterministic checks the system runs around model calls — commit-scope enforcement, verify-time-sensitive-claims, and so on. Shell-level guarantees, not model promises.',
  },
];

export function OrchestrationLayer() {
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
          Section 2 · what we own
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
        The orchestration layer is Cena-owned. This is non-negotiable.
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
          Memory, tools, context, and orchestration logic live here regardless of which executor or surface we&rsquo;re talking to. The model — Claude, GPT, Gemini, OpenClaw-hosted, local — is swappable. The orchestration is not. This is what makes our vendor-independence stance real instead of aspirational.
        </p>
        <p style={{ color: 'var(--color-text-muted)' }}>
          Without this layer, system-level reliability over a non-deterministic LLM is impossible. With it, we get the same behavior every time even when the leaf model is non-deterministic. Vault is the existence proof for the pattern (more on what&rsquo;s proven vs projected later).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {primitives.map((p) => (
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
              {p.name}
            </h3>
            <p
              style={{
                fontSize: 'var(--text-body-03)',
                lineHeight: 1.5,
                color: 'var(--color-text-muted)',
                marginTop: 8,
                marginBottom: 0,
              }}
              dangerouslySetInnerHTML={{ __html: p.body }}
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
        Skills are not brains. Skills are templates the brain selects and the executor runs. The combination is what produces system-level determinism over a non-deterministic LLM.
      </p>
    </Reveal>
  );
}
