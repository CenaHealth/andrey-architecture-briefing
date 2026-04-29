export type Lang = 'en' | 'ru';

export type SectionKey =
  | 'topbar.briefing'
  | 'topbar.toggleNote'
  | 'hero.kicker'
  | 'hero.headlineLine1'
  | 'hero.headlineLine2'
  | 'hero.lede'
  | 'hero.callout'
  | 'three.section'
  | 'three.title'
  | 'three.bodyOrch'
  | 'three.bodyExec'
  | 'three.bodySurface'
  | 'orch.section'
  | 'orch.title'
  | 'orch.body1'
  | 'orch.body2'
  | 'orch.callout'
  | 'orch.prim1.name'
  | 'orch.prim1.body'
  | 'orch.prim2.name'
  | 'orch.prim2.body'
  | 'orch.prim3.name'
  | 'orch.prim3.body'
  | 'orch.prim4.name'
  | 'orch.prim4.body'
  | 'orch.prim5.name'
  | 'orch.prim5.body'
  | 'orch.prim6.name'
  | 'orch.prim6.body'
  | 'surfaces.section'
  | 'surfaces.title'
  | 'surfaces.body1'
  | 'surfaces.body2'
  | 'surfaces.body3'
  | 'openclaw.section'
  | 'openclaw.title'
  | 'openclaw.body1'
  | 'openclaw.body2Lead'
  | 'openclaw.body2'
  | 'openclaw.body3Lead'
  | 'openclaw.body3'
  | 'openclaw.body4Lead'
  | 'openclaw.body4After'
  | 'openclaw.body4Em'
  | 'questions.section'
  | 'questions.title'
  | 'questions.body1'
  | 'questions.body2'
  | 'q1.title' | 'q1.body'
  | 'q2.title' | 'q2.body'
  | 'q3.title' | 'q3.body'
  | 'q4.title' | 'q4.body'
  | 'q5.title' | 'q5.body'
  | 'q6.title' | 'q6.body'
  | 'q7.title' | 'q7.body'
  | 'closing.section'
  | 'closing.title'
  | 'closing.body1'
  | 'closing.provenLabel'
  | 'closing.proven1' | 'closing.proven2' | 'closing.proven3' | 'closing.proven4'
  | 'closing.provenFoot'
  | 'closing.projectedLabel'
  | 'closing.projected1' | 'closing.projected2' | 'closing.projected3' | 'closing.projected4' | 'closing.projected5'
  | 'closing.projectedFoot'
  | 'closing.alignLabel'
  | 'closing.align1' | 'closing.align2' | 'closing.align3' | 'closing.align4'
  | 'footer.tag'
  | 'lang.toggle.en'
  | 'lang.toggle.ru'
  | 'lang.note';

const en: Record<SectionKey, string> = {
  'topbar.briefing': 'Ava Architecture Briefing',
  'topbar.toggleNote': 'Russian translation is best-effort and intentional — the comparison is the point.',
  'hero.kicker': 'Ava Architecture Briefing · for Andrey',
  'hero.headlineLine1': 'Stop arguing platforms.',
  'hero.headlineLine2': 'Start naming layers.',
  'hero.lede': 'Ava is one platform composed of three layers, each with a distinct job. Most platform debates reduce to confusion about which layer something belongs in. Naming the layers makes those debates resolvable.',
  'hero.callout': 'A sketch I want you to push on. Pressure-test it, find the gaps, tell me what I’m wrong about. I think this could be amazing — let’s make it real.',

  'three.section': 'Section 1 · the model',
  'three.title': 'Three layers, three jobs',
  'three.bodyOrch': '<strong>Orchestration</strong> is the brain — receives a request, decides whether it’s a one-shot or needs orchestration, breaks the work into increments small enough for high-confidence execution, dispatches them, collects results, and assembles the response.',
  'three.bodyExec': '<strong>Execution</strong> is the hands — runs individual increments and returns results. LLM API calls, agent platforms (OpenClaw, others), deterministic code, integrations, and human-in-the-loop steps are all executors. The orchestrator picks which to use.',
  'three.bodySurface': '<strong>UX surface</strong> is the face — how a specific role (patient, provider, kitchen partner, Cena staff, public) actually interacts. Surfaces are physically separate from each other.',

  'orch.section': 'Section 2 · what we own',
  'orch.title': 'The orchestration layer is Cena-owned. This is non-negotiable.',
  'orch.body1': 'Memory, tools, context, and orchestration logic live here regardless of which executor or surface we’re talking to. The model — Claude, GPT, Gemini, OpenClaw-hosted, local — is swappable. The orchestration is not. This is what makes our vendor-independence stance real instead of aspirational.',
  'orch.body2': 'Without this layer, system-level reliability over a non-deterministic LLM is impossible. With it, we get the same behavior every time even when the leaf model is non-deterministic. Vault is the existence proof for the pattern (more on what’s proven vs projected later).',
  'orch.callout': 'Skills are not brains. Skills are templates the brain selects and the executor runs. The combination is what produces system-level determinism over a non-deterministic LLM.',
  'orch.prim1.name': 'Triage gating',
  'orch.prim1.body': 'Every request passes through a deterministic triage step before reaching an executor. Vault implements this as a UserPromptSubmit hook; in Ava it is whatever step our orchestrator runs first — not a model decision.',
  'orch.prim2.name': 'Skill registry',
  'orch.prim2.body': 'Deterministic procedures the orchestrator dispatches. Skills are not the brain — they are templates the brain selects and the executor runs. They constrain output to a known shape so the LLM&rsquo;s non-determinism does not propagate to the system level.',
  'orch.prim3.name': 'Expert dispatch',
  'orch.prim3.body': 'Calibrated personas with their own context, retro logs, and judgment patterns. Dispatched into scoped sub-contexts so the parent orchestrator does not drown.',
  'orch.prim4.name': 'Plans (durable working state)',
  'orch.prim4.body': 'Files on disk that survive context compaction and session boundaries. The orchestrator maintains a plan for any non-trivial task.',
  'orch.prim5.name': 'Memory (durable cross-session state)',
  'orch.prim5.body': 'What was learned previously. Loaded on demand; verified against current state before acting. Not the same as plans.',
  'orch.prim6.name': 'Hook-style gating',
  'orch.prim6.body': 'Deterministic checks the system runs around model calls — commit-scope enforcement, verify-time-sensitive-claims, and so on. Shell-level guarantees, not model promises.',

  'surfaces.section': 'Section 3 · surfaces',
  'surfaces.title': 'Surfaces are physically separate. The corpus is shared.',
  'surfaces.body1': 'Patients, providers, kitchen partners, and Cena staff each get their own surface. They look different, behave differently, and meet different regulatory and accessibility requirements. None of them is the same surface as another.',
  'surfaces.body2': 'What they share is the corpus underneath — Cena’s knowledge, processes, positions, audit trail, identity. Same data, different roles, separated implementations. Separation lets each surface optimize for its role’s constraints without the others’ constraints leaking in.',
  'surfaces.body3': 'A surface choice does not determine the orchestrator. Multiple surfaces can dispatch to the same orchestration layer; that’s the point.',

  'openclaw.section': 'Section 4 · OpenClaw',
  'openclaw.title': 'Where OpenClaw sits — feasibility first, not dogma',
  'openclaw.body1': 'OpenClaw is on the table for any role where it meets our feasibility bar. The spike (next section) is how we test that, role by role. The only commitment up front is to evaluate from rationale, not dogma.',
  'openclaw.body2Lead': 'Working hypothesis:',
  'openclaw.body2': ' the most natural fit is the Cena staff surface and the company-brain executor role — conversational access to corporate knowledge, deterministic onboarding and ingestion workflows, Slack as the entry point. Staff are technically literate, the data is internal, and OpenClaw’s access model matches the audience.',
  'openclaw.body3Lead': 'Open question:',
  'openclaw.body3': ' whether OpenClaw can host the patient or provider surfaces under their regulatory, clinical, and accountability constraints. Default assumption is those surfaces are physically separate from staff, informed by the same corpus but optimized for their role. Whether OpenClaw runs underneath them depends on the spike.',
  'openclaw.body4Lead': 'What OpenClaw is ',
  'openclaw.body4Em': 'not',
  'openclaw.body4After': ': the orchestrator. Layer 1 stays Cena-owned regardless of which platforms host the executors.',

  'questions.section': 'Section 5 · the spike',
  'questions.title': 'Seven questions the spike has to answer',
  'questions.body1': 'Each question has a binary outcome: OpenClaw provides the primitive natively (good), we implement it in our orchestration layer above OpenClaw (also good — lower platform risk), or it’s not buildable without OpenClaw changes (forces a decision).',
  'questions.body2': 'You’re the right person to co-own this spike. I can run web research; you have the hands-on experience. The list below is the acceptance criteria.',
  'q1.title': 'Skill / workflow primitives',
  'q1.body': 'Can OpenClaw express deterministic workflows the way we need (onboarding a new staff member, ingesting a kitchen partner) — branching, validation, human-in-the-loop steps? What&rsquo;s the format?',
  'q2.title': 'Hook-equivalent gating',
  'q2.body': 'Can we run deterministic checks before/after a model call inside OpenClaw, or do those checks live in our orchestration layer above OpenClaw?',
  'q3.title': 'Sub-agent / scoped context dispatch',
  'q3.body': 'Can OpenClaw spawn scoped sub-contexts for sub-tasks, or does it operate as a single conversational agent? If the latter, our orchestrator handles fan-out and OpenClaw handles leaf tasks.',
  'q4.title': 'Persistent state',
  'q4.body': 'What does OpenClaw provide for memory, plans, and state that survives across sessions? Does that state stay portable (Cena-owned) or does it become locked to OpenClaw&rsquo;s storage?',
  'q5.title': 'Tool calling and integrations',
  'q5.body': 'Native integrations and how OpenClaw calls out to Cena-owned services. Latency, auth, audit.',
  'q6.title': 'Multi-user, audit, compliance',
  'q6.body': 'User identity, access controls, audit trails — sufficient for staff use? Sufficient if any clinical context leaks in?',
  'q7.title': 'Migration cost',
  'q7.body': 'If we adopt OpenClaw as the staff-surface executor and later need to swap, what&rsquo;s the actual cost given how we&rsquo;ve defined the integration?',

  'closing.section': 'Section 6 · honest framing',
  'closing.title': 'What’s proven vs projected — and what we agree on',
  'closing.body1': 'Vault is the existence proof that the three-layer pattern works. It is not yet evidence that the pattern scales to clinical multi-user. That gap is real and is part of what makes Ava ambitious. Future architecture decisions should name which gap they close.',
  'closing.provenLabel': 'Proven · today, in Vault',
  'closing.proven1': 'System-level determinism over a non-deterministic LLM, via hooks + skills + rules',
  'closing.proven2': 'Multi-step orchestration with plan persistence across sessions',
  'closing.proven3': 'Expert dispatch into scoped sub-contexts',
  'closing.proven4': 'Memory hygiene that survives model upgrades',
  'closing.provenFoot': 'Single-user, single-tenant, single-machine — Aaron’s solo workflow.',
  'closing.projectedLabel': 'Projected · Ava goal, not yet built',
  'closing.projected1': 'Multi-user agentic operations (staff, partners, patients concurrently)',
  'closing.projected2': 'Clinical accountability boundaries — which decisions need a credentialed human',
  'closing.projected3': 'Multi-tenant data isolation and audit',
  'closing.projected4': 'Production reliability under load',
  'closing.projected5': 'Vendor-portable orchestration with multiple executor backends',
  'closing.projectedFoot': 'Multi-user, clinical, production — what the spike helps us close in on.',
  'closing.alignLabel': 'Where I’m asking for your help',
  'closing.align1': 'Pressure-test the three-layer model. If it’s the wrong frame, I want to know now — not after we build on it.',
  'closing.align2': 'Push back on Cena-owned orchestration. What would change your mind? Where does this stance create more risk than it removes?',
  'closing.align3': 'Tell me where my OpenClaw read is off. Your hands-on experience is the actual spike — these seven questions are just the acceptance criteria.',
  'closing.align4': 'We co-own this. I want your sharpest take, not your easiest agreement. Help me fill the gaps and let’s make this real.',

  'footer.tag': '© Cena Health · internal briefing',
  'lang.toggle.en': 'EN',
  'lang.toggle.ru': 'RU',
  'lang.note': 'Translation is best-effort, on purpose. The comparison helps the concepts stick.',
};

const ru: Record<SectionKey, string> = {
  'topbar.briefing': 'Брифинг по архитектуре Ava',
  'topbar.toggleNote': 'Русский перевод — наша честная попытка, и это намеренно. Сравнение и есть смысл.',
  'hero.kicker': 'Брифинг по архитектуре Ava · для Андрея',
  'hero.headlineLine1': 'Хватит спорить о платформах.',
  'hero.headlineLine2': 'Пора называть слои.',
  'hero.lede': 'Ava — это одна платформа, состоящая из трёх слоёв, у каждого из которых своя задача. Большинство споров о платформах сводится к путанице в том, к какому слою относится тот или иной элемент. Когда слои названы, споры становятся разрешимыми.',
  'hero.callout': 'Это набросок, который я хочу, чтобы ты прокачал. Прессуй его, ищи дыры, говори, в чём я не прав. Мне кажется, может получиться что-то классное — давай сделаем это реальным.',

  'three.section': 'Раздел 1 · модель',
  'three.title': 'Три слоя, три задачи',
  'three.bodyOrch': '<strong>Оркестрация</strong> — это мозг: принимает запрос, решает, нужен ли один шаг или полноценная оркестрация, разбивает работу на достаточно мелкие шаги для уверенного выполнения, направляет их, собирает результаты и компонует ответ.',
  'three.bodyExec': '<strong>Исполнение</strong> — это руки: выполняет отдельные шаги и возвращает результаты. Вызовы LLM API, агентные платформы (OpenClaw и другие), детерминированный код, интеграции, шаги с участием человека — всё это исполнители. Оркестратор выбирает, кого задействовать.',
  'three.bodySurface': '<strong>UX-поверхность</strong> — это лицо: то, как с системой реально взаимодействует конкретная роль (пациент, врач, кухонный партнёр, сотрудник Cena, публика). Поверхности физически отделены друг от друга.',

  'orch.section': 'Раздел 2 · что мы держим у себя',
  'orch.title': 'Слой оркестрации принадлежит Cena. Это не обсуждается.',
  'orch.body1': 'Память, инструменты, контекст и логика оркестрации живут здесь — независимо от того, с каким исполнителем или поверхностью мы имеем дело. Модель — Claude, GPT, Gemini, размещённая в OpenClaw, локальная — взаимозаменяема. Оркестрация — нет. Именно это делает нашу позицию о независимости от вендора реальной, а не декларативной.',
  'orch.body2': 'Без этого слоя надёжность на уровне системы поверх недетерминированной LLM невозможна. С ним — мы получаем одинаковое поведение каждый раз, даже когда листовая модель недетерминирована. Vault — это доказательство существования паттерна (о доказанном и проектируемом — далее).',
  'orch.callout': 'Навыки — это не мозги. Навыки — это шаблоны, которые мозг выбирает, а исполнитель запускает. Их связка и порождает детерминизм на уровне системы поверх недетерминированной LLM.',
  'orch.prim1.name': 'Сортировка на входе (triage)',
  'orch.prim1.body': 'Каждый запрос проходит детерминированный шаг сортировки до того, как попадает к исполнителю. В Vault это реализовано как хук UserPromptSubmit; в Ava это будет тот первый шаг, который запускает наш оркестратор — не решение модели.',
  'orch.prim2.name': 'Реестр навыков',
  'orch.prim2.body': 'Детерминированные процедуры, которые направляет оркестратор. Навыки — не мозг: это шаблоны, которые мозг выбирает, а исполнитель запускает. Они сужают вывод до известной формы, чтобы недетерминизм LLM не распространялся на уровень системы.',
  'orch.prim3.name': 'Диспетчеризация экспертов',
  'orch.prim3.body': 'Откалиброванные роли со своим контекстом, ретро-журналами и шаблонами суждений. Запускаются в изолированных под-контекстах, чтобы родительский оркестратор не утонул в данных.',
  'orch.prim4.name': 'Планы (устойчивое рабочее состояние)',
  'orch.prim4.body': 'Файлы на диске, которые переживают сжатие контекста и границы сессий. Оркестратор ведёт план для любой нетривиальной задачи.',
  'orch.prim5.name': 'Память (устойчивое межсессионное состояние)',
  'orch.prim5.body': 'То, что было выучено ранее. Подгружается по необходимости; перед действием сверяется с текущим состоянием. Это не то же самое, что планы.',
  'orch.prim6.name': 'Хук-шлюзование',
  'orch.prim6.body': 'Детерминированные проверки, которые система прогоняет вокруг вызовов модели — контроль области коммита, проверка временно-чувствительных утверждений и т.д. Гарантии уровня оболочки, а не обещания модели.',

  'surfaces.section': 'Раздел 3 · поверхности',
  'surfaces.title': 'Поверхности физически отделены. Корпус знаний — общий.',
  'surfaces.body1': 'У пациентов, врачей, кухонных партнёров и сотрудников Cena — у каждого своя поверхность. Они выглядят по-разному, ведут себя по-разному, отвечают разным регуляторным требованиям и требованиям доступности. Ни одна из них не является той же поверхностью, что и другая.',
  'surfaces.body2': 'Общим у них является корпус знаний под ними — знания Cena, процессы, позиции, журнал аудита, идентичность. Те же данные, разные роли, отдельные реализации. Разделение позволяет каждой поверхности оптимизироваться под ограничения своей роли, не пропуская в неё ограничения других.',
  'surfaces.body3': 'Выбор поверхности не предопределяет оркестратор. Несколько поверхностей могут обращаться к одному и тому же слою оркестрации; в этом и смысл.',

  'openclaw.section': 'Раздел 4 · OpenClaw',
  'openclaw.title': 'Где находится OpenClaw — сначала осуществимость, не догма',
  'openclaw.body1': 'OpenClaw рассматривается для любой роли, в которой он соответствует нашему уровню осуществимости. Спайк (следующий раздел) — это как мы это проверим, роль за ролью. Единственное обязательство на старте — оценивать по доводам, а не по догме.',
  'openclaw.body2Lead': 'Рабочая гипотеза:',
  'openclaw.body2': ' наиболее естественное соответствие — поверхность сотрудников Cena и роль исполнителя «корпоративного мозга». Разговорный доступ к корпоративным знаниям, детерминированные процессы онбординга и приёма данных, Slack как точка входа. Сотрудники технически грамотны, данные — внутренние, и модель доступа OpenClaw подходит этой аудитории.',
  'openclaw.body3Lead': 'Открытый вопрос:',
  'openclaw.body3': ' может ли OpenClaw разместить под собой поверхности пациентов или врачей при их регуляторных, клинических и подотчётных ограничениях. По умолчанию мы считаем, что эти поверхности физически отделены от поверхности сотрудников, опираются на тот же корпус, но оптимизированы под свою роль. Будет ли под ними работать OpenClaw — зависит от спайка.',
  'openclaw.body4Lead': 'Чем OpenClaw ',
  'openclaw.body4Em': 'не является',
  'openclaw.body4After': ': оркестратором. Слой 1 остаётся за Cena, независимо от того, какие платформы размещают исполнителей.',

  'questions.section': 'Раздел 5 · спайк',
  'questions.title': 'Семь вопросов, на которые спайк должен ответить',
  'questions.body1': 'У каждого вопроса бинарный исход: OpenClaw предоставляет примитив штатно (хорошо), мы реализуем его в нашем слое оркестрации над OpenClaw (тоже хорошо — меньше зависимости от платформы), или это нельзя построить без изменений в OpenClaw (вынуждает решение).',
  'questions.body2': 'Ты — правильный человек, чтобы со-вести этот спайк. Я могу провести веб-исследование; у тебя есть практический опыт. Список ниже — это критерии приёмки.',
  'q1.title': 'Примитивы навыков и процессов',
  'q1.body': 'Может ли OpenClaw выразить детерминированные процессы так, как нам нужно (онбординг сотрудника, приём кухонного партнёра) — ветвления, валидация, шаги с участием человека? Каков формат?',
  'q2.title': 'Шлюзы, эквивалентные хукам',
  'q2.body': 'Можем ли мы запускать детерминированные проверки до и после вызова модели внутри OpenClaw, или эти проверки живут в нашем слое оркестрации над OpenClaw?',
  'q3.title': 'Подагенты и изолированные под-контексты',
  'q3.body': 'Может ли OpenClaw порождать изолированные под-контексты для подзадач, или он работает как один разговорный агент? Если второе — наш оркестратор берёт на себя ветвление, а OpenClaw — листовые задачи.',
  'q4.title': 'Устойчивое состояние',
  'q4.body': 'Что OpenClaw предоставляет для памяти, планов и состояния, переживающего сессии? Остаётся ли это состояние переносимым (за Cena), или оказывается замкнутым на хранилище OpenClaw?',
  'q5.title': 'Вызов инструментов и интеграции',
  'q5.body': 'Штатные интеграции и то, как OpenClaw обращается к сервисам Cena. Задержки, авторизация, аудит.',
  'q6.title': 'Многопользовательский режим, аудит, соответствие требованиям',
  'q6.body': 'Идентичность пользователей, контроль доступа, журналы аудита — достаточно ли для использования сотрудниками? Достаточно ли, если в систему попадает клинический контекст?',
  'q7.title': 'Стоимость миграции',
  'q7.body': 'Если мы примем OpenClaw как исполнителя для поверхности сотрудников и позже нам понадобится сменить платформу — какова реальная стоимость такой смены при том, как мы определили интеграцию?',

  'closing.section': 'Раздел 6 · честная картина',
  'closing.title': 'Что доказано, а что проектируется — и о чём мы договариваемся',
  'closing.body1': 'Vault — это доказательство существования: трёхслойный паттерн работает. Это пока не доказательство того, что паттерн масштабируется до клинического многопользовательского режима. Этот разрыв реален, и часть того, что делает Ava амбициозной. Будущие архитектурные решения должны называть, какой именно разрыв они закрывают.',
  'closing.provenLabel': 'Доказано · сегодня, в Vault',
  'closing.proven1': 'Детерминизм на уровне системы поверх недетерминированной LLM, через хуки + навыки + правила',
  'closing.proven2': 'Многошаговая оркестрация с устойчивостью планов между сессиями',
  'closing.proven3': 'Диспетчеризация экспертов в изолированные под-контексты',
  'closing.proven4': 'Гигиена памяти, переживающая обновления модели',
  'closing.provenFoot': 'Один пользователь, один тенант, одна машина — сольный рабочий процесс Аарона.',
  'closing.projectedLabel': 'Проектируется · цель Ava, ещё не построено',
  'closing.projected1': 'Многопользовательские агентные операции (сотрудники, партнёры, пациенты одновременно)',
  'closing.projected2': 'Границы клинической подотчётности — какие решения требуют сертифицированного человека',
  'closing.projected3': 'Изоляция данных и аудит в многотенантном режиме',
  'closing.projected4': 'Производственная надёжность под нагрузкой',
  'closing.projected5': 'Переносимая между вендорами оркестрация с несколькими бэкендами-исполнителями',
  'closing.projectedFoot': 'Многопользовательский, клинический, продакшен — то, к чему спайк помогает подойти ближе.',
  'closing.alignLabel': 'Где мне нужна твоя помощь',
  'closing.align1': 'Прокачай трёхслойную модель. Если рамка неверна, я хочу узнать это сейчас — а не после того, как мы построим на ней.',
  'closing.align2': 'Поспорь с тезисом «оркестрация за Cena». Что заставит тебя изменить мнение? Где эта позиция создаёт больше риска, чем убирает?',
  'closing.align3': 'Скажи, где я неправильно читаю OpenClaw. Твой практический опыт и есть настоящий спайк — эти семь вопросов лишь критерии приёмки.',
  'closing.align4': 'Это наше общее. Мне нужен твой самый острый взгляд, а не самое лёгкое согласие. Помоги заполнить пробелы — и давай сделаем это реальным.',

  'footer.tag': '© Cena Health · внутренний брифинг',
  'lang.toggle.en': 'EN',
  'lang.toggle.ru': 'RU',
  'lang.note': 'Перевод — наша честная попытка, и это намеренно. Сравнение помогает концепциям закрепиться.',
};

const content: Record<Lang, Record<SectionKey, string>> = { en, ru };

export function t(lang: Lang, key: SectionKey): string {
  return content[lang][key];
}
