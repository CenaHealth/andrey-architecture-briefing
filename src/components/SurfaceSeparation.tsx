type Props = { className?: string };

const sand900 = 'var(--color-sand-900)';
const sand700 = 'var(--color-sand-700)';
const sand500 = 'var(--color-sand-500)';
const sand50 = 'var(--color-sand-50)';
const teal700 = 'var(--color-teal-700)';
const teal500 = 'var(--color-teal-500)';
const teal100 = 'var(--color-teal-100)';
const border = 'var(--color-border-default)';

const fontSans = 'var(--font-sans)';
const fontMono = 'var(--font-mono)';

/**
 * Four surface boxes (Patient, Provider, Kitchen partner, Cena staff) sitting
 * above a shared corpus pill. Each surface is physically separate; the corpus
 * is shared. The point: same data, different roles, separated implementations.
 */
export function SurfaceSeparation({ className }: Props) {
  const surfaces = [
    { label: 'Patient', sub: 'clinical UX, accessibility, regs', x: 50 },
    { label: 'Provider', sub: 'clinician workflows, EHR-adjacent', x: 220 },
    { label: 'Kitchen partner', sub: 'onboarding, ops, recipe ingestion', x: 390 },
    { label: 'Cena staff', sub: 'Slack, knowledge, processes', x: 560, accent: true },
  ];

  return (
    <svg
      className={className}
      viewBox="0 0 720 360"
      role="img"
      aria-label="Four separate UX surfaces (patient, provider, kitchen partner, Cena staff) each connecting to a shared corpus underneath."
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      {/* Surfaces */}
      {surfaces.map((s) => (
        <g key={s.label}>
          <rect
            x={s.x}
            y="40"
            width="120"
            height="92"
            rx="12"
            fill={s.accent ? teal100 : '#ffffff'}
            stroke={s.accent ? teal500 : border}
            strokeWidth={s.accent ? 1.5 : 1}
          />
          <text
            x={s.x + 60}
            y="72"
            textAnchor="middle"
            fontFamily={fontSans}
            fontWeight="600"
            fontSize="14"
            fill={sand900}
          >
            {s.label}
          </text>
          <text
            x={s.x + 60}
            y="98"
            textAnchor="middle"
            fontFamily={fontSans}
            fontSize="10"
            fill={sand700}
          >
            <tspan x={s.x + 60} dy="0">
              {s.sub.split(',')[0]}
            </tspan>
            <tspan x={s.x + 60} dy="14">
              {s.sub.split(',').slice(1).join(',').trim()}
            </tspan>
          </text>
          {/* connector down to corpus */}
          <line
            x1={s.x + 60}
            y1="132"
            x2={s.x + 60}
            y2="220"
            stroke={sand500}
            strokeWidth="1"
            strokeDasharray="3 3"
          />
        </g>
      ))}

      {/* Corpus pill */}
      <g>
        <rect
          x="60"
          y="225"
          width="600"
          height="68"
          rx="34"
          fill={sand50}
          stroke={teal700}
          strokeDasharray="4 4"
          strokeWidth="1.2"
        />
        <text
          x="360"
          y="252"
          textAnchor="middle"
          fontFamily={fontMono}
          fontSize="11"
          fill={teal700}
          letterSpacing="2"
        >
          SHARED CORPUS
        </text>
        <text
          x="360"
          y="276"
          textAnchor="middle"
          fontFamily={fontSans}
          fontSize="13"
          fill={sand900}
        >
          Cena-owned knowledge · processes · positions · audit · identity
        </text>
      </g>

      <text
        x="360"
        y="328"
        textAnchor="middle"
        fontFamily={fontSans}
        fontSize="12"
        fill={sand500}
        fontStyle="italic"
      >
        Same data — different roles — separated implementations
      </text>
      <text
        x="360"
        y="346"
        textAnchor="middle"
        fontFamily={fontSans}
        fontSize="11"
        fill={sand500}
      >
        each surface optimizes for its role&rsquo;s constraints without the others&rsquo; constraints leaking in
      </text>
    </svg>
  );
}
