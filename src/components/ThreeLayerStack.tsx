type Props = { className?: string };

const sand900 = 'var(--color-sand-900)';
const sand700 = 'var(--color-sand-700)';
const sand500 = 'var(--color-sand-500)';
const sand100 = 'var(--color-sand-100)';
const sand50 = 'var(--color-sand-50)';
const teal700 = 'var(--color-teal-700)';
const teal500 = 'var(--color-teal-500)';
const teal200 = 'var(--color-teal-200)';
const teal100 = 'var(--color-teal-100)';
const border = 'var(--color-border-default)';

const fontSans = 'var(--font-sans)';
const fontMono = 'var(--font-mono)';

/**
 * Three-layer architecture diagram. Top: orchestration (Cena-owned).
 * Middle: execution (swappable). Bottom: surfaces (per-role).
 * Arrows show request flow up from surface and dispatch down through executors.
 */
export function ThreeLayerStack({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 760 520"
      role="img"
      aria-label="Three layers: orchestration on top, execution in the middle, UX surfaces at the bottom. Surfaces send requests up; orchestration dispatches down."
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <defs>
        <marker
          id="arrowhead"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={sand500} />
        </marker>
      </defs>

      {/* Layer 1 — Orchestration */}
      <g>
        <rect
          x="60"
          y="40"
          width="640"
          height="100"
          rx="14"
          fill={teal700}
          stroke={teal700}
        />
        <text
          x="80"
          y="68"
          fontFamily={fontSans}
          fontSize="11"
          letterSpacing="2"
          fill={teal100}
        >
          LAYER 1
        </text>
        <text
          x="80"
          y="98"
          fontFamily={fontSans}
          fontWeight="600"
          fontSize="22"
          fill="#ffffff"
        >
          Orchestration
        </text>
        <text
          x="80"
          y="120"
          fontFamily={fontSans}
          fontSize="13"
          fill={teal100}
        >
          Triage · skill registry · expert dispatch · plans · memory · gating
        </text>
        <g>
          <rect
            x="540"
            y="56"
            width="140"
            height="28"
            rx="14"
            fill="rgba(255,255,255,0.18)"
            stroke="rgba(255,255,255,0.4)"
          />
          <text
            x="610"
            y="74"
            textAnchor="middle"
            fontFamily={fontMono}
            fontSize="11"
            fill="#ffffff"
            letterSpacing="1"
          >
            CENA-OWNED
          </text>
        </g>
      </g>

      {/* Down arrow: orchestration → execution */}
      <line
        x1="380"
        y1="146"
        x2="380"
        y2="184"
        stroke={sand500}
        strokeWidth="1.5"
        markerEnd="url(#arrowhead)"
      />
      <text
        x="394"
        y="172"
        fontFamily={fontSans}
        fontSize="11"
        fill={sand700}
      >
        dispatch
      </text>

      {/* Layer 2 — Execution */}
      <g>
        <rect
          x="60"
          y="190"
          width="640"
          height="120"
          rx="14"
          fill={sand100}
          stroke={border}
        />
        <text
          x="80"
          y="218"
          fontFamily={fontSans}
          fontSize="11"
          letterSpacing="2"
          fill={sand500}
        >
          LAYER 2
        </text>
        <text
          x="80"
          y="244"
          fontFamily={fontSans}
          fontWeight="600"
          fontSize="20"
          fill={sand900}
        >
          Execution
        </text>

        {/* Executor cells */}
        <g>
          <rect x="80" y="260" width="135" height="36" rx="8" fill="#ffffff" stroke={border} />
          <text x="147.5" y="284" textAnchor="middle" fontFamily={fontSans} fontSize="13" fill={sand900}>
            LLM API
          </text>
        </g>
        <g>
          <rect x="225" y="260" width="135" height="36" rx="8" fill="#ffffff" stroke={teal200} strokeWidth="1.5" />
          <text x="292.5" y="284" textAnchor="middle" fontFamily={fontSans} fontSize="13" fill={sand900}>
            OpenClaw
          </text>
        </g>
        <g>
          <rect x="370" y="260" width="135" height="36" rx="8" fill="#ffffff" stroke={border} />
          <text x="437.5" y="284" textAnchor="middle" fontFamily={fontSans} fontSize="13" fill={sand900}>
            Code · DB · APIs
          </text>
        </g>
        <g>
          <rect x="515" y="260" width="165" height="36" rx="8" fill="#ffffff" stroke={border} />
          <text x="597.5" y="284" textAnchor="middle" fontFamily={fontSans} fontSize="13" fill={sand900}>
            Human-in-the-loop
          </text>
        </g>

        <g>
          <rect
            x="540"
            y="206"
            width="140"
            height="28"
            rx="14"
            fill={sand50}
            stroke={border}
          />
          <text
            x="610"
            y="224"
            textAnchor="middle"
            fontFamily={fontMono}
            fontSize="11"
            fill={sand700}
            letterSpacing="1"
          >
            SWAPPABLE
          </text>
        </g>
      </g>

      {/* Up arrow: surface → orchestration (curving along the right) */}
      <path
        d="M 718 410 C 738 410 738 200 718 200"
        fill="none"
        stroke={sand500}
        strokeDasharray="4 4"
        strokeWidth="1.5"
        markerEnd="url(#arrowhead)"
      />
      <text
        x="730"
        y="305"
        fontFamily={fontSans}
        fontSize="11"
        fill={sand700}
        transform="rotate(-90 730 305)"
        textAnchor="middle"
      >
        request
      </text>

      {/* Down arrow: execution → surface */}
      <line
        x1="380"
        y1="316"
        x2="380"
        y2="354"
        stroke={sand500}
        strokeWidth="1.5"
        markerEnd="url(#arrowhead)"
      />
      <text
        x="394"
        y="342"
        fontFamily={fontSans}
        fontSize="11"
        fill={sand700}
      >
        result
      </text>

      {/* Layer 3 — Surfaces */}
      <g>
        <rect
          x="60"
          y="360"
          width="640"
          height="130"
          rx="14"
          fill={sand50}
          stroke={border}
        />
        <text
          x="80"
          y="388"
          fontFamily={fontSans}
          fontSize="11"
          letterSpacing="2"
          fill={sand500}
        >
          LAYER 3
        </text>
        <text
          x="80"
          y="414"
          fontFamily={fontSans}
          fontWeight="600"
          fontSize="20"
          fill={sand900}
        >
          UX Surfaces
        </text>

        {/* Surface cells */}
        <g>
          <rect x="80" y="430" width="115" height="40" rx="10" fill="#ffffff" stroke={border} />
          <text x="137.5" y="448" textAnchor="middle" fontFamily={fontSans} fontSize="12" fill={sand900}>
            Patient
          </text>
          <text x="137.5" y="463" textAnchor="middle" fontFamily={fontSans} fontSize="10" fill={sand500}>
            bespoke
          </text>
        </g>
        <g>
          <rect x="205" y="430" width="115" height="40" rx="10" fill="#ffffff" stroke={border} />
          <text x="262.5" y="448" textAnchor="middle" fontFamily={fontSans} fontSize="12" fill={sand900}>
            Provider
          </text>
          <text x="262.5" y="463" textAnchor="middle" fontFamily={fontSans} fontSize="10" fill={sand500}>
            bespoke
          </text>
        </g>
        <g>
          <rect x="330" y="430" width="115" height="40" rx="10" fill="#ffffff" stroke={border} />
          <text x="387.5" y="448" textAnchor="middle" fontFamily={fontSans} fontSize="12" fill={sand900}>
            Kitchen partner
          </text>
          <text x="387.5" y="463" textAnchor="middle" fontFamily={fontSans} fontSize="10" fill={sand500}>
            mixed
          </text>
        </g>
        <g>
          <rect x="455" y="430" width="115" height="40" rx="10" fill={teal100} stroke={teal500} />
          <text x="512.5" y="448" textAnchor="middle" fontFamily={fontSans} fontSize="12" fontWeight="600" fill={sand900}>
            Cena staff
          </text>
          <text x="512.5" y="463" textAnchor="middle" fontFamily={fontMono} fontSize="10" fill={teal700}>
            slack-first
          </text>
        </g>
        <g>
          <rect x="580" y="430" width="100" height="40" rx="10" fill="#ffffff" stroke={border} />
          <text x="630" y="448" textAnchor="middle" fontFamily={fontSans} fontSize="12" fill={sand900}>
            Public
          </text>
          <text x="630" y="463" textAnchor="middle" fontFamily={fontSans} fontSize="10" fill={sand500}>
            web
          </text>
        </g>
      </g>

      {/* Caption */}
      <text
        x="380"
        y="510"
        textAnchor="middle"
        fontFamily={fontSans}
        fontSize="12"
        fill={sand500}
        fontStyle="italic"
      >
        Surfaces send requests up · Orchestration dispatches across executors · Results return down
      </text>
    </svg>
  );
}
