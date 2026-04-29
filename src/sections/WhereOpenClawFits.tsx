import { MotifMark } from '../components/MotifMark';
import { Reveal } from '../components/Reveal';
import { OpenClawPositioning } from '../components/OpenClawPositioning';

export function WhereOpenClawFits() {
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
          Section 4 · OpenClaw
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
        Where OpenClaw sits — feasibility first, not dogma
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
          OpenClaw is on the table for any role where it meets our feasibility bar. The spike (next section) is how we test that, role by role. The only commitment up front is to evaluate from rationale, not dogma.
        </p>
        <p>
          <strong>Working hypothesis:</strong> the most natural fit is the Cena staff surface and the company-brain executor role — conversational access to corporate knowledge, deterministic onboarding and ingestion workflows, Slack as the entry point. Staff are technically literate, the data is internal, and OpenClaw&rsquo;s access model matches the audience.
        </p>
        <p>
          <strong>Open question:</strong> whether OpenClaw can host the patient or provider surfaces under their regulatory, clinical, and accountability constraints. Default assumption is those surfaces are physically separate from staff, informed by the same corpus but optimized for their role. Whether OpenClaw runs underneath them depends on the spike.
        </p>
        <p style={{ color: 'var(--color-text-muted)' }}>
          What OpenClaw is <em>not</em>: the orchestrator. Layer 1 stays Cena-owned regardless of which platforms host the executors.
        </p>
      </div>

      <div
        className="card-raised"
        style={{ padding: '28px', background: 'var(--color-surface-card)' }}
      >
        <OpenClawPositioning />
      </div>
    </Reveal>
  );
}
