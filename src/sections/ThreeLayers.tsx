import { MotifMark } from '../components/MotifMark';
import { Reveal } from '../components/Reveal';
import { ThreeLayerStack } from '../components/ThreeLayerStack';

export function ThreeLayers() {
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
          Section 1 · the model
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
        Three layers, three jobs
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
          <strong>Orchestration</strong> is the brain — receives a request, decides whether it&rsquo;s a one-shot or needs orchestration, breaks the work into increments small enough for high-confidence execution, dispatches them, collects results, and assembles the response.
        </p>
        <p>
          <strong>Execution</strong> is the hands — runs individual increments and returns results. LLM API calls, agent platforms (OpenClaw, others), deterministic code, integrations, and human-in-the-loop steps are all executors. The orchestrator picks which to use.
        </p>
        <p>
          <strong>UX surface</strong> is the face — how a specific role (patient, provider, kitchen partner, Cena staff, public) actually interacts. Surfaces are physically separate from each other.
        </p>
      </div>

      <div
        className="card-raised"
        style={{ padding: '28px', background: 'var(--color-surface-card)' }}
      >
        <ThreeLayerStack />
      </div>
    </Reveal>
  );
}
