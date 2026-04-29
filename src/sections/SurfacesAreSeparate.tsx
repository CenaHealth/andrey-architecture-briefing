import { MotifMark } from '../components/MotifMark';
import { Reveal } from '../components/Reveal';
import { SurfaceSeparation } from '../components/SurfaceSeparation';

export function SurfacesAreSeparate() {
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
          Section 3 · surfaces
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
        Surfaces are physically separate. The corpus is shared.
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
          Patients, providers, kitchen partners, and Cena staff each get their own surface. They look different, behave differently, and meet different regulatory and accessibility requirements. None of them is the same surface as another.
        </p>
        <p>
          What they share is the corpus underneath — Cena&rsquo;s knowledge, processes, positions, audit trail, identity. Same data, different roles, separated implementations. Separation lets each surface optimize for its role&rsquo;s constraints without the others&rsquo; constraints leaking in.
        </p>
        <p style={{ color: 'var(--color-text-muted)' }}>
          A surface choice does not determine the orchestrator. Multiple surfaces can dispatch to the same orchestration layer; that&rsquo;s the point.
        </p>
      </div>

      <div
        className="card-raised"
        style={{ padding: '28px', background: 'var(--color-surface-card)' }}
      >
        <SurfaceSeparation />
      </div>
    </Reveal>
  );
}
