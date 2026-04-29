import type { Lang } from '../i18n/content';

type Props = { className?: string; lang: Lang };

const sand900 = 'var(--color-sand-900)';
const sand700 = 'var(--color-sand-700)';
const sand500 = 'var(--color-sand-500)';
const teal700 = 'var(--color-teal-700)';
const teal500 = 'var(--color-teal-500)';
const teal100 = 'var(--color-teal-100)';
const border = 'var(--color-border-default)';

const fontSans = 'var(--font-sans)';
const fontMono = 'var(--font-mono)';

const txt = {
  en: {
    orchHeader: 'ORCHESTRATION · CENA-OWNED',
    orchTagline: 'Decides what · breaks it down · dispatches · assembles',
    llmApi: 'LLM API',
    llmSub: 'Claude, GPT, others',
    llmTag: 'MODEL CALLS',
    openclaw: 'OpenClaw',
    openclawSub: 'agent platform + Slack',
    openclawTag: 'CANDIDATE',
    code: 'Code · DB · APIs',
    codeSub: 'deterministic logic',
    codeTag: 'PORTABLE',
    human: 'Human',
    humanSub: 'accountable steps',
    humanTag: 'IN-LOOP',
    patient: 'Patient',
    patientSub: 'bespoke surface',
    provider: 'Provider',
    providerSub: 'bespoke surface',
    cenaStaff: 'Cena staff',
    cenaTag: 'SLACK · NATURAL FIT',
    public: 'Public',
    publicSub: 'web',
    strongFit: 'strong fit',
    legendHypothesis: 'Working hypothesis',
    legendOpen: 'Open question — depends on the spike',
    caption: 'OpenClaw is one executor among several · evaluated against role-specific feasibility',
  },
  ru: {
    orchHeader: 'ОРКЕСТРАЦИЯ · ЗА CENA',
    orchTagline: 'Решает что · разбивает · направляет · компонует',
    llmApi: 'LLM API',
    llmSub: 'Claude, GPT, и другие',
    llmTag: 'ВЫЗОВЫ МОДЕЛИ',
    openclaw: 'OpenClaw',
    openclawSub: 'агентная платформа + Slack',
    openclawTag: 'КАНДИДАТ',
    code: 'Код · БД · API',
    codeSub: 'детерминированная логика',
    codeTag: 'ПЕРЕНОСИМО',
    human: 'Человек',
    humanSub: 'подотчётные шаги',
    humanTag: 'В ЦИКЛЕ',
    patient: 'Пациент',
    patientSub: 'своя поверхность',
    provider: 'Врач',
    providerSub: 'своя поверхность',
    cenaStaff: 'Сотрудник Cena',
    cenaTag: 'SLACK · ЕСТЕСТВЕННО',
    public: 'Публика',
    publicSub: 'web',
    strongFit: 'сильное соответствие',
    legendHypothesis: 'Рабочая гипотеза',
    legendOpen: 'Открытый вопрос — зависит от спайка',
    caption: 'OpenClaw — один из нескольких исполнителей · оценивается по ролевой осуществимости',
  },
} as const;

export function OpenClawPositioning({ className, lang }: Props) {
  const T = txt[lang];
  return (
    <svg
      className={className}
      viewBox="0 0 760 520"
      role="img"
      aria-label={T.caption}
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

      <g>
        <rect x="60" y="30" width="640" height="62" rx="12" fill={teal700} />
        <text x="80" y="54" fontFamily={fontSans} fontSize="11" letterSpacing="2" fill={teal100}>
          {T.orchHeader}
        </text>
        <text x="80" y="80" fontFamily={fontSans} fontWeight="600" fontSize="18" fill="#ffffff">
          {T.orchTagline}
        </text>
      </g>

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

      <g>
        <rect x="80" y="142" width="160" height="76" rx="12" fill="#ffffff" stroke={border} />
        <text x="160" y="170" textAnchor="middle" fontFamily={fontSans} fontWeight="600" fontSize="14" fill={sand900}>
          {T.llmApi}
        </text>
        <text x="160" y="190" textAnchor="middle" fontFamily={fontSans} fontSize="11" fill={sand700}>
          {T.llmSub}
        </text>
        <text x="160" y="206" textAnchor="middle" fontFamily={fontMono} fontSize="10" fill={sand500} letterSpacing="1">
          {T.llmTag}
        </text>

        <rect x="240" y="142" width="160" height="76" rx="12" fill={teal100} stroke={teal500} strokeWidth="1.5" />
        <text x="320" y="170" textAnchor="middle" fontFamily={fontSans} fontWeight="600" fontSize="14" fill={sand900}>
          {T.openclaw}
        </text>
        <text x="320" y="190" textAnchor="middle" fontFamily={fontSans} fontSize="11" fill={teal700}>
          {T.openclawSub}
        </text>
        <text x="320" y="206" textAnchor="middle" fontFamily={fontMono} fontSize="10" fill={teal700} letterSpacing="1">
          {T.openclawTag}
        </text>

        <rect x="400" y="142" width="160" height="76" rx="12" fill="#ffffff" stroke={border} />
        <text x="480" y="170" textAnchor="middle" fontFamily={fontSans} fontWeight="600" fontSize="14" fill={sand900}>
          {T.code}
        </text>
        <text x="480" y="190" textAnchor="middle" fontFamily={fontSans} fontSize="11" fill={sand700}>
          {T.codeSub}
        </text>
        <text x="480" y="206" textAnchor="middle" fontFamily={fontMono} fontSize="10" fill={sand500} letterSpacing="1">
          {T.codeTag}
        </text>

        <rect x="560" y="142" width="120" height="76" rx="12" fill="#ffffff" stroke={border} />
        <text x="620" y="170" textAnchor="middle" fontFamily={fontSans} fontWeight="600" fontSize="14" fill={sand900}>
          {T.human}
        </text>
        <text x="620" y="190" textAnchor="middle" fontFamily={fontSans} fontSize="11" fill={sand700}>
          {T.humanSub}
        </text>
        <text x="620" y="206" textAnchor="middle" fontFamily={fontMono} fontSize="10" fill={sand500} letterSpacing="1">
          {T.humanTag}
        </text>
      </g>

      <g>
        <rect x="80" y="380" width="120" height="62" rx="12" fill="#ffffff" stroke={border} />
        <text x="140" y="408" textAnchor="middle" fontFamily={fontSans} fontWeight="600" fontSize="13" fill={sand900}>
          {T.patient}
        </text>
        <text x="140" y="426" textAnchor="middle" fontFamily={fontSans} fontSize="10" fill={sand500}>
          {T.patientSub}
        </text>

        <rect x="220" y="380" width="120" height="62" rx="12" fill="#ffffff" stroke={border} />
        <text x="280" y="408" textAnchor="middle" fontFamily={fontSans} fontWeight="600" fontSize="13" fill={sand900}>
          {T.provider}
        </text>
        <text x="280" y="426" textAnchor="middle" fontFamily={fontSans} fontSize="10" fill={sand500}>
          {T.providerSub}
        </text>

        <rect x="380" y="380" width="160" height="62" rx="12" fill={teal100} stroke={teal500} strokeWidth="1.5" />
        <text x="460" y="408" textAnchor="middle" fontFamily={fontSans} fontWeight="600" fontSize="13" fill={sand900}>
          {T.cenaStaff}
        </text>
        <text x="460" y="426" textAnchor="middle" fontFamily={fontMono} fontSize="10" fill={teal700} letterSpacing="1">
          {T.cenaTag}
        </text>

        <rect x="560" y="380" width="120" height="62" rx="12" fill="#ffffff" stroke={border} />
        <text x="620" y="408" textAnchor="middle" fontFamily={fontSans} fontWeight="600" fontSize="13" fill={sand900}>
          {T.public}
        </text>
        <text x="620" y="426" textAnchor="middle" fontFamily={fontSans} fontSize="10" fill={sand500}>
          {T.publicSub}
        </text>
      </g>

      <path d="M 320 218 C 320 300 460 300 460 380" fill="none" stroke={teal500} strokeWidth="2" />
      <text x="395" y="296" fontFamily={fontSans} fontSize="11" fill={teal700} fontWeight="600">
        {T.strongFit}
      </text>

      <path d="M 320 218 C 320 300 280 300 280 380" fill="none" stroke={sand500} strokeWidth="1.2" strokeDasharray="4 4" />
      <text x="240" y="296" fontFamily={fontSans} fontSize="11" fill={sand700} fontStyle="italic">
        ?
      </text>

      <path d="M 320 218 C 320 320 140 320 140 380" fill="none" stroke={sand500} strokeWidth="1.2" strokeDasharray="4 4" />
      <text x="105" y="316" fontFamily={fontSans} fontSize="11" fill={sand700} fontStyle="italic">
        ?
      </text>

      <g transform="translate(60, 462)">
        <line x1="0" y1="6" x2="20" y2="6" stroke={teal500} strokeWidth="2" />
        <text x="28" y="10" fontFamily={fontSans} fontSize="11" fill={sand700}>
          {T.legendHypothesis}
        </text>

        <line x1="180" y1="6" x2="200" y2="6" stroke={sand500} strokeWidth="1.2" strokeDasharray="4 4" />
        <text x="208" y="10" fontFamily={fontSans} fontSize="11" fill={sand700}>
          {T.legendOpen}
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
        {T.caption}
      </text>
    </svg>
  );
}
