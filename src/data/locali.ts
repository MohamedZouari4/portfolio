import type { Lang } from "../lib/LangContext";

// Progress figures from the LOCALI Tasks board, snapshot of 23 November 2026.
export const localiProgress = {
  done: 46,
  total: 126,
  stepDone: 25,
  stepTotal: 39,
  stepActive: 4,
};

interface LocaliContent {
  status: string;
  eyebrow: string;
  tagline: string;
  description: string;
  quote: string;
  role: string;
  byline: string;
  mock: {
    privateLabel: string;
    projectsLabel: string;
    projects: string[];
    question: string;
    answer: string;
    sources: string[];
    footer: string;
  };
  pro: {
    label: string;
    title: string;
    subtitle: string;
    role: string;
    exampleLabel: string;
    example: string;
    doesTitle: string;
    does: string[];
    whoTitle: string;
    who: string;
    whyTitle: string;
    why: string;
    progressLabel: string;
    progressValue: string;
    progressStep: string;
    snapshot: string;
    launchTitle: string;
    launch: string[];
  };
  roadmap: {
    label: string;
    title: string;
    intro: string;
    now: string;
    phases: { name: string; objective: string }[];
  };
  vision: {
    label: string;
    title: string;
    text: string;
    missionTitle: string;
    mission: string;
    promise: { title: string; text: string }[];
    note: string;
  };
  tags: string[];
}

export const localiContent: Record<Lang, LocaliContent> = {
  en: {
    status: "Phase 1 · In development",
    eyebrow: "A local AI platform",
    tagline: "Understand. Connect. Act.",
    description:
      "LOCALI is a local AI platform that lets people and organizations run and use AI on devices they control. It starts with one focused product: LOCALI Professional.",
    quote: "One intelligence. Multiple environments. User control.",
    role: "Founder & Developer",
    byline: "A startup project by Mohamed Zouari",
    mock: {
      privateLabel: "RUNS ON THIS PC",
      projectsLabel: "Projects",
      projects: ["Client: Benali", "Case 2026-14", "Office admin"],
      question: "Which of my client contracts end before March?",
      answer: "Two contracts end before March: the Benali service agreement (31 Jan) and the Kefi lease (28 Feb).",
      sources: ["Benali_contract.pdf · p.4", "Kefi_lease.docx · p.2"],
      footer: "ANSWERED FROM PERMITTED FOLDERS",
    },
    pro: {
      label: "Now building",
      title: "LOCALI Professional",
      subtitle: "Start here",
      role:
        "A private assistant on a Windows computer that helps professionals find and understand their work documents, with answers linked to their sources.",
      exampleLabel: "Example",
      example:
        "A lawyer asks: “Which of my client contracts end before March?” LOCALI searches the permitted client folders and responds with the relevant files and page references.",
      doesTitle: "What it is intended to do",
      does: [
        "Organize work into projects, such as one project per client or case",
        "Answer questions about permitted project documents",
        "Show the files and passages supporting its answers",
        "Support Arabic, French and English",
        "Let users choose which folders LOCALI may read",
        "Organize and change files only with user approval",
        "Provide undo or recovery for supported file operations",
        "Install and run like a normal Windows application",
      ],
      whoTitle: "Who it is for",
      who: "Professionals who work with confidential documents: lawyers, accountants, consultants, engineers, researchers and professional offices.",
      whyTitle: "Why it matters",
      why: "Some professionals cannot safely paste client or business documents into general online AI services. LOCALI aims to provide useful AI help while keeping their information under their control.",
      progressLabel: "In progress",
      progressValue: "46 of 126 tasks",
      progressStep:
        "Current step, asking questions about a project's files: 25 of 39 tasks done and 4 more under way.",
      snapshot: "Task-board snapshot · 23 November 2026",
      launchTitle: "What must happen before public launch",
      launch: [
        "Daily use and testing by the founder",
        "Private testing with trusted users",
        "Reliable answer quality and source references",
        "Clear permission and file-operation behaviour",
        "A straightforward installation experience",
        "Evidence that a defined customer group uses it repeatedly and is willing to pay",
      ],
    },
    roadmap: {
      label: "The ecosystem",
      title: "One shared heart, built one proven step at a time.",
      intro:
        "LOCALI Core is the shared intelligence and control foundation. Products grow outward from it, and each phase moves forward only when its validation conditions are met. These are not committed dates.",
      now: "Now",
      phases: [
        { name: "Professional", objective: "Validate a useful paid product for a specific professional audience." },
        { name: "Core", objective: "Extract and stabilize reusable platform capabilities." },
        { name: "Personal", objective: "Expand to individuals." },
        { name: "Connect", objective: "Connect devices and selected applications." },
        { name: "Family & Enterprise", objective: "Support households and organizations." },
        { name: "Hardware", objective: "Certify or partner on suitable devices." },
        { name: "Robotics", objective: "Extend LOCALI into robots through partners." },
      ],
    },
    vision: {
      label: "Vision",
      title: "Capable AI, without giving up control.",
      text: "A world where people and organizations can use capable AI across their digital and physical environments without giving up control of their data, devices or decisions.",
      missionTitle: "Mission",
      mission:
        "Build a modular, local-first AI platform that understands a user's information and environment, connects the tools and devices they choose, and helps them take useful actions safely and transparently.",
      promise: [
        { title: "Control", text: "Choose what LOCALI can access and what it can do." },
        { title: "Privacy", text: "Keep processing local wherever practical, and make external data sharing explicit." },
        { title: "Continuity", text: "Use shared capabilities across supported products and devices." },
        { title: "Transparency", text: "Understand what LOCALI accessed, proposed and did." },
        { title: "Extensibility", text: "Add applications, integrations and devices without rebuilding the platform." },
      ],
      note: "Local-first is an honest, testable promise: if a user enables an external connector, the data flow is clearly disclosed and controlled.",
    },
    tags: ["Local-first", "Private by design", "Windows first", "Arabic · French · English"],
  },

  fr: {
    status: "Phase 1 · En développement",
    eyebrow: "Une plateforme d'IA locale",
    tagline: "Comprendre. Connecter. Agir.",
    description:
      "LOCALI est une plateforme d'IA locale qui permet aux personnes et aux organisations d'utiliser l'IA sur des appareils qu'elles contrôlent. Elle commence par un produit ciblé : LOCALI Professional.",
    quote: "Une intelligence. Plusieurs environnements. Le contrôle à l'utilisateur.",
    role: "Fondateur & Développeur",
    byline: "Un projet startup de Mohamed Zouari",
    mock: {
      privateLabel: "TOURNE SUR CE PC",
      projectsLabel: "Projets",
      projects: ["Client : Benali", "Dossier 2026-14", "Administration"],
      question: "Quels contrats clients se terminent avant mars ?",
      answer: "Deux contrats se terminent avant mars : le contrat de service Benali (31 janv.) et le bail Kefi (28 févr.).",
      sources: ["Contrat_Benali.pdf · p.4", "Bail_Kefi.docx · p.2"],
      footer: "RÉPONSE ISSUE DES DOSSIERS AUTORISÉS",
    },
    pro: {
      label: "En construction",
      title: "LOCALI Professional",
      subtitle: "Point de départ",
      role:
        "Un assistant privé sur un ordinateur Windows qui aide les professionnels à retrouver et comprendre leurs documents de travail, avec des réponses reliées à leurs sources.",
      exampleLabel: "Exemple",
      example:
        "Une avocate demande : « Quels contrats clients se terminent avant mars ? » LOCALI parcourt les dossiers clients autorisés et répond avec les fichiers concernés et les numéros de page.",
      doesTitle: "Ce qu'il doit faire",
      does: [
        "Organiser le travail en projets, par exemple un projet par client ou par dossier",
        "Répondre aux questions sur les documents autorisés d'un projet",
        "Montrer les fichiers et passages qui appuient ses réponses",
        "Prendre en charge l'arabe, le français et l'anglais",
        "Laisser l'utilisateur choisir les dossiers que LOCALI peut lire",
        "Organiser et modifier les fichiers uniquement avec l'accord de l'utilisateur",
        "Permettre d'annuler ou de restaurer les opérations sur fichiers prises en charge",
        "S'installer et fonctionner comme une application Windows classique",
      ],
      whoTitle: "Pour qui",
      who: "Les professionnels qui manipulent des documents confidentiels : avocats, comptables, consultants, ingénieurs, chercheurs et cabinets.",
      whyTitle: "Pourquoi c'est important",
      why: "Certains professionnels ne peuvent pas coller des documents clients dans des services d'IA en ligne. LOCALI vise à offrir une aide utile tout en gardant leurs informations sous leur contrôle.",
      progressLabel: "En cours",
      progressValue: "46 tâches sur 126",
      progressStep:
        "Étape actuelle, poser des questions sur les fichiers d'un projet : 25 tâches sur 39 terminées et 4 en cours.",
      snapshot: "Instantané du tableau de tâches · 23 novembre 2026",
      launchTitle: "Avant le lancement public",
      launch: [
        "Utilisation et tests quotidiens par le fondateur",
        "Tests privés avec des utilisateurs de confiance",
        "Qualité des réponses et références aux sources fiables",
        "Comportement clair des permissions et des opérations sur fichiers",
        "Une installation simple",
        "La preuve qu'un groupe de clients défini l'utilise régulièrement et est prêt à payer",
      ],
    },
    roadmap: {
      label: "L'écosystème",
      title: "Un cœur commun, construit étape par étape.",
      intro:
        "LOCALI Core est la base commune d'intelligence et de contrôle. Les produits se développent autour d'elle, et chaque phase n'avance que lorsque ses conditions de validation sont remplies. Ce ne sont pas des dates garanties.",
      now: "Maintenant",
      phases: [
        { name: "Professional", objective: "Valider un produit payant utile pour un public professionnel précis." },
        { name: "Core", objective: "Extraire et stabiliser les capacités réutilisables de la plateforme." },
        { name: "Personal", objective: "S'ouvrir aux particuliers." },
        { name: "Connect", objective: "Connecter des appareils et des applications choisies." },
        { name: "Family & Enterprise", objective: "Accompagner les foyers et les organisations." },
        { name: "Hardware", objective: "Certifier des appareils adaptés ou s'associer à des fabricants." },
        { name: "Robotics", objective: "Étendre LOCALI aux robots via des partenaires." },
      ],
    },
    vision: {
      label: "Vision",
      title: "Une IA performante, sans perdre le contrôle.",
      text: "Un monde où personnes et organisations utilisent une IA performante dans leurs environnements numériques et physiques sans renoncer au contrôle de leurs données, appareils ou décisions.",
      missionTitle: "Mission",
      mission:
        "Construire une plateforme d'IA modulaire et locale qui comprend les informations et l'environnement de l'utilisateur, connecte les outils et appareils qu'il choisit, et l'aide à agir de façon sûre et transparente.",
      promise: [
        { title: "Contrôle", text: "Choisir ce à quoi LOCALI peut accéder et ce qu'il peut faire." },
        { title: "Confidentialité", text: "Traiter localement autant que possible et rendre explicite tout partage externe." },
        { title: "Continuité", text: "Des capacités partagées entre les produits et appareils pris en charge." },
        { title: "Transparence", text: "Comprendre ce que LOCALI a consulté, proposé et fait." },
        { title: "Extensibilité", text: "Ajouter applications, intégrations et appareils sans reconstruire la plateforme." },
      ],
      note: "« Local avant tout » est une promesse honnête et vérifiable : si l'utilisateur active un connecteur externe, le flux de données est clairement indiqué et contrôlé.",
    },
    tags: ["Local avant tout", "Privé par conception", "Windows d'abord", "Arabe · Français · Anglais"],
  },

  ar: {
    status: "المرحلة 1 · قيد التطوير",
    eyebrow: "منصة ذكاء اصطناعي محلية",
    tagline: "افهم. اربط. نفّذ.",
    description:
      "LOCALI منصة ذكاء اصطناعي محلية تتيح للأفراد والمؤسسات تشغيل الذكاء الاصطناعي واستخدامه على أجهزة يتحكمون فيها. تبدأ بمنتج واحد مركّز: LOCALI Professional.",
    quote: "ذكاء واحد. بيئات متعددة. التحكم للمستخدم.",
    role: "المؤسس والمطور",
    byline: "مشروع ناشئ من تطوير محمد الزواري",
    mock: {
      privateLabel: "يعمل على هذا الحاسوب",
      projectsLabel: "المشاريع",
      projects: ["العميل: بن علي", "الملف 2026-14", "إدارة المكتب"],
      question: "ما هي عقود العملاء التي تنتهي قبل شهر مارس؟",
      answer: "ينتهي عقدان قبل مارس: عقد خدمات بن علي (31 جانفي) وعقد إيجار الكافي (28 فيفري).",
      sources: ["Benali_contract.pdf · ص4", "Kefi_lease.docx · ص2"],
      footer: "إجابة من المجلدات المسموح بها",
    },
    pro: {
      label: "قيد البناء الآن",
      title: "LOCALI Professional",
      subtitle: "نقطة البداية",
      role:
        "مساعد خاص على حاسوب Windows يساعد المهنيين على إيجاد مستندات عملهم وفهمها، مع إجابات مرتبطة بمصادرها.",
      exampleLabel: "مثال",
      example:
        "يسأل محامٍ: «ما هي عقود العملاء التي تنتهي قبل مارس؟» فيبحث LOCALI في مجلدات العملاء المسموح بها ويجيب بالملفات المعنية وأرقام الصفحات.",
      doesTitle: "ما الذي يُفترض أن يفعله",
      does: [
        "تنظيم العمل في مشاريع، مثل مشروع لكل عميل أو قضية",
        "الإجابة عن الأسئلة حول مستندات المشروع المسموح بها",
        "عرض الملفات والمقاطع التي تدعم إجاباته",
        "دعم العربية والفرنسية والإنجليزية",
        "ترك المستخدم يختار المجلدات التي يمكن لـ LOCALI قراءتها",
        "تنظيم الملفات وتعديلها فقط بموافقة المستخدم",
        "إمكانية التراجع أو الاسترجاع لعمليات الملفات المدعومة",
        "التثبيت والتشغيل كتطبيق Windows عادي",
      ],
      whoTitle: "لمن هو موجّه",
      who: "المهنيون الذين يتعاملون مع مستندات سرية: المحامون والمحاسبون والمستشارون والمهندسون والباحثون والمكاتب المهنية.",
      whyTitle: "لماذا هو مهم",
      why: "لا يستطيع بعض المهنيين لصق مستندات عملائهم في خدمات الذكاء الاصطناعي العامة على الإنترنت بأمان. يهدف LOCALI إلى تقديم مساعدة مفيدة مع إبقاء معلوماتهم تحت سيطرتهم.",
      progressLabel: "قيد الإنجاز",
      progressValue: "46 من 126 مهمة",
      progressStep: "الخطوة الحالية، طرح الأسئلة حول ملفات المشروع: أُنجزت 25 من 39 مهمة و4 أخرى قيد العمل.",
      snapshot: "لقطة من لوحة المهام · 23 نوفمبر 2026",
      launchTitle: "ما يجب تحقيقه قبل الإطلاق العام",
      launch: [
        "الاستخدام والاختبار اليومي من قبل المؤسس",
        "اختبار خاص مع مستخدمين موثوقين",
        "جودة إجابات موثوقة مع الإحالة إلى المصادر",
        "سلوك واضح للأذونات وعمليات الملفات",
        "تجربة تثبيت بسيطة",
        "دليل على أن فئة محددة من العملاء تستخدمه بانتظام ومستعدة للدفع",
      ],
    },
    roadmap: {
      label: "المنظومة",
      title: "قلب مشترك واحد، يُبنى خطوة مُثبتة تلو الأخرى.",
      intro:
        "LOCALI Core هو أساس الذكاء والتحكم المشترك، وتنمو المنتجات حوله. لا تتقدم أي مرحلة إلا عند تحقق شروط التحقق الخاصة بها، وهذه ليست مواعيد مضمونة.",
      now: "الآن",
      phases: [
        { name: "Professional", objective: "إثبات منتج مدفوع ومفيد لجمهور مهني محدد." },
        { name: "Core", objective: "استخراج قدرات المنصة القابلة لإعادة الاستخدام وتثبيتها." },
        { name: "Personal", objective: "التوسع نحو الأفراد." },
        { name: "Connect", objective: "ربط الأجهزة والتطبيقات المختارة." },
        { name: "Family & Enterprise", objective: "دعم الأسر والمؤسسات." },
        { name: "Hardware", objective: "اعتماد أجهزة مناسبة أو الشراكة مع مصنّعين." },
        { name: "Robotics", objective: "توسيع LOCALI نحو الروبوتات عبر الشركاء." },
      ],
    },
    vision: {
      label: "الرؤية",
      title: "ذكاء اصطناعي قوي، دون التخلي عن التحكم.",
      text: "عالم يستطيع فيه الأفراد والمؤسسات استخدام ذكاء اصطناعي قوي في بيئاتهم الرقمية والمادية دون التخلي عن التحكم في بياناتهم أو أجهزتهم أو قراراتهم.",
      missionTitle: "المهمة",
      mission:
        "بناء منصة ذكاء اصطناعي معيارية ومحلية أولاً، تفهم معلومات المستخدم وبيئته، وتربط الأدوات والأجهزة التي يختارها، وتساعده على اتخاذ إجراءات مفيدة بأمان وشفافية.",
      promise: [
        { title: "التحكم", text: "اختر ما يمكن لـ LOCALI الوصول إليه وما يمكنه فعله." },
        { title: "الخصوصية", text: "معالجة محلية كلما أمكن، وأي مشاركة خارجية تكون صريحة." },
        { title: "الاستمرارية", text: "قدرات مشتركة عبر المنتجات والأجهزة المدعومة." },
        { title: "الشفافية", text: "افهم ما اطّلع عليه LOCALI وما اقترحه وما فعله." },
        { title: "قابلية التوسع", text: "أضف تطبيقات وتكاملات وأجهزة دون إعادة بناء المنصة." },
      ],
      note: "«محلي أولاً» وعد صادق وقابل للاختبار: إذا فعّل المستخدم موصلاً خارجياً، يتم الإفصاح عن تدفق البيانات بوضوح والتحكم فيه.",
    },
    tags: ["محلي أولاً", "خصوصية من التصميم", "Windows أولاً", "العربية · الفرنسية · الإنجليزية"],
  },
};
