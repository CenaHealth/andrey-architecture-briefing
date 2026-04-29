type Props = { className?: string };

const sand900 = 'var(--color-sand-900)';
const sand700 = 'var(--color-sand-700)';
const sand500 = 'var(--color-sand-500)';
const teal700 = 'var(--color-teal-700)';
const teal500 = 'var(--color-teal-500)';
const teal100 = 'var(--color-teal-100)';
const border = 'var(--color-border-default)';

const fontSans = 'var(--font-sans)';
const fontMono = 'var(--font-mono)';

/**
 * OpenClaw positioning. Cena-owned orchestrator at top dispatches to multiple
 * executors. OpenClaw is highlighted as one option, with a confident link to
 * the staff surface and dotted "open question" links to patient/provider.
 */
export function OpenClawPositioning({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 760 520"
      role="img"
      aria-label="OpenClaw positioned as one of several executors. Strong link to staff surface; open-question links to patient and provider surfaces."
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <defs>
        <marker
          id="arrowhead2"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={sand500} />
        </marker>
      </defs>

      {/* Orchestrator (Cena-owned, slim header bar) */}
      <g>
        <rect x="60" y="30" width="640" height="62" rx="12" fill={teal700} />
        <text
          x="80"
          y="54"
          fontFamily={fontSans}
          fontSize="11"
          letterSpacing="2"
          fill={teal100}
        >
          ORCHESTRATION · CENA-OWNED
        </text>
        <text
          x="80"
          y="80"
          fontFamily={fontSans}
          fontWeight="600"
          fontSize="18"
          fill="#ffffff"
        >
          Decides what · breaks it down · dispatches · assembles
        </text>
      </g>

      {/* Down arrows from orchestrator to executors */}
      {[160, 320, 480, 620].map((x, i) => (
        <line
          key={i}
          x1={x}
          y1="98"
          x2={x}
          y2="138"
          stroke={sand500}
          strokeWidth="1.2"
          markerEnd="url(#arrowhead2)"
        />
      ))}

      {/* Executors row */}
      <g>
        {/* LLM API */}
        <rect x="80" y="142" width="160" height="76" rx="12" fill="#ffffff" stroke={border} />
        <text x="160" y="170" textAnchor="middle" fontFamily={fontSans} fontWeight="600" fontSize="14" fill={sand900}>
          LLM API
        </text>
        <text x="160" y="190" textAnchor="middle" fontFamily={fontSans} fontSize="11" fill={sand700}>
          Claude, GPT, others
        </text>
        <text x="160" y="206" textAnchor="middle" fontFamily={fontMono} fontSize="10" fill={sand500} letterSpacing="1">
          MODEL CALLS
        </text>

        {/* OpenClaw — highlighted */}
        <rect
          x="240"
          y="142"
          width="160"
          height="76"
          rx="12"
          fill={teal100}
          stroke={teal500}
          strokeWidth="1.5"
        />
        <text x="320" y="170" textAnchor="middle" fontFamily={fontSans} fontWeight="600" fontSize="14" fill={sand900}>
          OpenClaw
        </text>
        <text x="320" y="190" textAnchor="middle" fontFamily={fontSans} fontSize="11" fill={teal700}>
          agent platform + Slack
        </text>
        <text x="320" y="206" textAnchor="middle" fontFamily={fontMono} fontSize="10" fill={teal700} letterSpacing="1">
          CANDIDATE
        </text>

        {/* Code/DB/APIs */}
        <rect x="400" y="142" width="160" height="76" rx="12" fill="#ffffff" stroke={border} />
        <text x="480" y="170" textAnchor="middle" fontFamily={fontSans} fontWeight="600" fontSize="14" fill={sand900}>
          Code · DB · APIs
        </text>
        <text x="480" y="190" textAnchor="middle" fontFamily={fontSans} fontSize="11" fill={sand700}>
          deterministic logic
        </text>
        <text x="480" y="206" textAnchor="middle" fontFamily={fontMono} fontSize="10" fill={sand500} letterSpacing="1">
          PORTABLE
        </text>

        {/* Human */}
        <rect x="560" y="142" width="120" height="76" rx="12" fill="#ffffff" stroke={border} />
        <text x="620" y="170" textAnchor="middle" fontFamily={fontSans} fontWeight="600" fontSize="14" fill={sand900}>
          Human
        </text>
        <text x="620" y="190" textAnchor="middle" fontFamily={fontSans} fontSize="11" fill={sand700}>
          accountable steps
        </text>
        <text x="620" y="206" textAnchor="middle" fontFamily={fontMono} fontSize="10" fill={sand500} letterSpacing="1">
          IN-LOOP
        </text>
      </g>

      {/* Surfaces row, lower */}
      <g>
        {/* Patient */}
        <rect x="80" y="380" width="120" height="62" rx="12" fill="#ffffff" stroke={border} />
        <text x="140" y="408" textAnchor="middle" fontFamily={fontSans} fontWeight="600" fontSize="13" fill={sand900}>
          Patient
        </text>
        <text x="140" y="426" textAnchor="middle" fontFamily={fontSans} fontSize="10" fill={sand500}>
          bespoke surface
        </text>

        {/* Provider */}
        <rect x="220" y="380" width="120" height="62" rx="12" fill="#ffffff" stroke={border} />
        <text x="280" y="408" textAnchor="middle" fontFamily={fontSans} fontWeight="600" fontSize="13" fill={sand900}>
          Provider
        </text>
        <text x="280" y="426" textAnchor="middle" fontFamily={fontSans} fontSize="10" fill={sand500}>
          bespoke surface
        </text>

        {/* Cena staff — accent */}
        <rect x="380" y="380" width="160" height="62" rx="12" fill={teal100} stroke={teal500} strokeWidth="1.5" />
        <text x="460" y="408" textAnchor="middle" fontFamily={fontSans} fontWeight="600" fontSize="13" fill={sand900}>
          Cena staff
        </text>
        <text x="460" y="426" textAnchor="middle" fontFamily={fontMono} fontSize="10" fill={teal700} letterSpacing="1">
          SLACK · NATURAL FIT
        </text>

        {/* Public */}
        <rect x="560" y="380" width="120" height="62" rx="12" fill="#ffffff" stroke={border} />
        <text x="620" y="408" textAnchor="middle" fontFamily={fontSans} fontWeight="600" fontSize="13" fill={sand900}>
          Public
        </text>
        <text x="620" y="426" textAnchor="middle" fontFamily={fontSans} fontSize="10" fill={sand500}>
          web
        </text>
      </g>

      {/* Connections from OpenClaw down to surfaces */}
      {/* Strong connection to Cena staff */}
      <path
        d="M 320 218 C 320 300 460 300 460 380"
        fill="none"
        stroke={teal500}
        strokeWidth="2"
      />
      <text
        x="395"
        y="296"
        fontFamily={fontSans}
        fontSize="11"
        fill={teal700}
        fontWeight="600"
      >
        strong fit
      </text>

      {/* Open question — to provider */}
      <path
        d="M 320 218 C 320 300 280 300 280 380"
        fill="none"
        stroke={sand500}
        strokeWidth="1.2"
        strokeDasharray="4 4"
      />
      <text
        x="240"
        y="296"
        fontFamily={fontSans}
        fontSize="11"
        fill={sand700}
        fontStyle="italic"
      >
        ?
      </text>

      {/* Open question — to patient */}
      <path
        d="M 320 218 C 320 320 140 320 140 380"
        fill="none"
        stroke={sand500}
        strokeWidth="1.2"
        strokeDasharray="4 4"
      />
      <text
        x="105"
        y="316"
        fontFamily={fontSans}
        fontSize="11"
        fill={sand700}
        fontStyle="italic"
      >
        ?
      </text>

      {/* Legend */}
      <g transform="translate(60, 462)">
        <line x1="0" y1="6" x2="20" y2="6" stroke={teal500} strokeWidth="2" />
        <text x="28" y="10" fontFamily={fontSans} fontSize="11" fill={sand700}>
          Working hypothesis
        </text>

        <line x1="170" y1="6" x2="190" y2="6" stroke={sand500} strokeWidth="1.2" strokeDasharray="4 4" />
        <text x="198" y="10" fontFamily={fontSans} fontSize="11" fill={sand700}>
          Open question — depends on the spike
        </text>
      </g>

      <text
        x="380"
        y="498"
        textAnchor="middle"
        fontFamily={fontSans}
        fontSize="12"
        fill={sand500}
        fontStyle="italic"
      >
        OpenClaw is one executor among several · evaluated against role-specific feasibility
      </text>
    </svg>
  );
}
