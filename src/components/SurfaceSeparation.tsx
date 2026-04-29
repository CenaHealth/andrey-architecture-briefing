import type { Lang } from '../i18n/content';

type Props = { className?: string; lang: Lang };

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

const txt = {
  en: {
    surfaces: [
      { label: 'Patient', sub1: 'clinical UX', sub2: 'accessibility, regs' },
      { label: 'Provider', sub1: 'clinician workflows', sub2: 'EHR-adjacent' },
      { label: 'Kitchen partner', sub1: 'onboarding', sub2: 'ops, recipe ingestion' },
      { label: 'Cena staff', sub1: 'Slack', sub2: 'knowledge, processes' },
    ],
    sharedCorpus: 'SHARED CORPUS',
    corpusBody: 'Cena-owned knowledge · processes · positions · audit · identity',
    captionLine1: 'Same data — different roles — separated implementations',
    captionLine2: 'each surface optimizes for its role’s constraints without the others’ constraints leaking in',
  },
  ru: {
    surfaces: [
      { label: 'Пациент', sub1: 'клинический UX', sub2: 'доступность, регуляторика' },
      { label: 'Врач', sub1: 'процессы клинициста', sub2: 'соседствует с ЭМК' },
      { label: 'Кухонный партнёр', sub1: 'онбординг', sub2: 'операции, приём рецептов' },
      { label: 'Сотрудник Cena', sub1: 'Slack', sub2: 'знания, процессы' },
    ],
    sharedCorpus: 'ОБЩИЙ КОРПУС',
    corpusBody: 'Знания Cena · процессы · позиции · аудит · идентичность',
    captionLine1: 'Те же данные — разные роли — отдельные реализации',
    captionLine2: 'каждая поверхность оптимизируется под ограничения своей роли, не пропуская в неё ограничения других',
  },
} as const;

export function SurfaceSeparation({ className, lang }: Props) {
  const T = txt[lang];
  const xs = [50, 220, 390, 560];
  return (
    <svg
      className={className}
      viewBox="0 0 720 360"
      role="img"
      aria-label={T.captionLine1}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      {T.surfaces.map((s, i) => {
        const accent = i === 3;
        const x = xs[i];
        return (
          <g key={s.label}>
            <rect
              x={x}
              y="40"
              width="120"
              height="92"
              rx="12"
              fill={accent ? teal100 : '#ffffff'}
              stroke={accent ? teal500 : border}
              strokeWidth={accent ? 1.5 : 1}
            />
            <text
              x={x + 60}
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
              x={x + 60}
              y="98"
              textAnchor="middle"
              fontFamily={fontSans}
              fontSize="10"
              fill={sand700}
            >
              <tspan x={x + 60} dy="0">
                {s.sub1}
              </tspan>
              <tspan x={x + 60} dy="14">
                {s.sub2}
              </tspan>
            </text>
            <line
              x1={x + 60}
              y1="132"
              x2={x + 60}
              y2="220"
              stroke={sand500}
              strokeWidth="1"
              strokeDasharray="3 3"
            />
          </g>
        );
      })}

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
          {T.sharedCorpus}
        </text>
        <text
          x="360"
          y="276"
          textAnchor="middle"
          fontFamily={fontSans}
          fontSize="13"
          fill={sand900}
        >
          {T.corpusBody}
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
        {T.captionLine1}
      </text>
      <text
        x="360"
        y="346"
        textAnchor="middle"
        fontFamily={fontSans}
        fontSize="11"
        fill={sand500}
      >
        {T.captionLine2}
      </text>
    </svg>
  );
}
