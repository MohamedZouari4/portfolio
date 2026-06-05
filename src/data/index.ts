export const personal = {
  name: "Mohamed Zouari",
  title: "AI Engineer | Full-Stack Developer | IEEE Leader",
  taglines: [
    "AI Engineer",
    "Full-Stack Developer",
    "IEEE Leader",
    "RAG Architect",
    "Software Engineer",
  ],
  location: "Sfax, Tunisia",
  email: "mohamedzouari202@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohamedzouari202/",
  phone: "+216 55077985",
  github: "https://github.com/MohamedZouari4",
  summary:
    "Computer Science student passionate about Artificial Intelligence, Full-Stack Development, Software Engineering, and building intelligent systems that solve real-world problems.",
  about: `I am a Computer Science student at the International Institute of Technology (IIT), Tunisia, with experience in AI Engineering, Software Development, and Full-Stack Web Applications. I am passionate about leveraging cutting-edge AI and software engineering to solve real-world problems at scale.`,
};

export const languages = [
  { name: "Arabic", level: 100, label: "Native", flag: "🇹🇳", color: "#00FFB2" },
  { name: "French", level: 90, label: "Proficient", flag: "🇫🇷", color: "#00D9FF" },
  { name: "English", level: 80, label: "Advanced", flag: "🇬🇧", color: "#7C3AED" },
  { name: "Deutsch", level: 25, label: "A1 Beginner", flag: "🇩🇪", color: "#F59E0B" },
];

export const softSkills = [
  { label: "Leadership", icon: "🎯" },
  { label: "Communication", icon: "💬" },
  { label: "Teamwork", icon: "🤝" },
  { label: "Problem-Solving", icon: "🧩" },
  { label: "Adaptability", icon: "⚡" },
  { label: "Time Management", icon: "⏱️" },
];

export const stats = [
  { label: "Years Programming", value: 3, suffix: "+" },
  { label: "Professional Internships", value: 3, suffix: "+" },
  { label: "IEEE Leadership Roles", value: 15, suffix: "+" },
  { label: "Major Events Organized", value: 10, suffix: "+" },
  { label: "AI & Full-Stack Projects", value: 7, suffix: "+" },
];

export const experience = [
  {
    id: 1,
    role: "AI Software Engineering Intern",
    company: "ADVISING LTD",
    period: "Jan 2026 – Present",
    type: "current",
    description:
      "Leading AI development initiatives including RAG architectures, FastAPI backends, and React frontends for enterprise-grade content automation platforms.",
    responsibilities: [
      "Built FastAPI backend services with async architecture",
      "Developed React frontend applications with TypeScript",
      "Designed RAG architecture using pgvector for semantic search",
      "Integrated Ollama and Qwen models for content generation",
      "Implemented workflow automation systems",
      "Built comprehensive analytics dashboards",
      "Created content automation pipelines",
      "Designed NLP processing systems",
      "Developed role-based access control systems",
    ],
    tech: ["FastAPI", "Python", "React", "PostgreSQL", "pgvector", "Ollama", "Qwen", "NLP", "Docker"],
    color: "#00D9FF",
  },
  {
    id: 2,
    role: "Software Development Intern",
    company: "CliniSys ERP",
    period: "July 2025",
    type: "past",
    description:
      "Developed a pharmacy inventory management system with Spring Boot backend and React frontend, implementing secure CRUD operations and database optimization.",
    responsibilities: [
      "Developed pharmacy inventory system",
      "Built RESTful APIs with Spring Boot",
      "React frontend development",
      "Database optimization",
      "Secure CRUD operations",
    ],
    tech: ["Spring Boot", "React", "MySQL", "Java", "REST APIs"],
    color: "#7C3AED",
  },
  {
    id: 3,
    role: "Web Development Intern",
    company: "International Institute of Technology",
    period: "Jul 2024 – Sep 2024",
    type: "past",
    description:
      "Developed web applications with Django backend, focused on UI optimization and accessibility improvements for institutional platforms.",
    responsibilities: [
      "Developed web applications",
      "Django backend development",
      "UI optimization",
      "Accessibility improvements",
    ],
    tech: ["Django", "JavaScript", "HTML", "CSS", "Python"],
    color: "#00FFB2",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Content Automation Platform",
    description:
      "Enterprise-grade AI-powered content management and publishing system with RAG architecture, multi-model integration, and advanced analytics.",
    tech: ["FastAPI", "React", "PostgreSQL", "pgvector", "Ollama", "Qwen", "Docker"],
    features: [
      "RAG architecture with semantic search",
      "AI-powered content generation",
      "Workflow automation pipelines",
      "Analytics dashboard",
      "Multi-platform publishing",
      "Role-based access control",
    ],
    category: "AI",
    featured: true,
    color: "#00D9FF",
    gradient: "from-[#00D9FF]/20 to-[#7C3AED]/20",
    github: "https://github.com/MohamedZouari4",
  },
  {
    id: 2,
    title: "Task Manager App",
    description:
      "Full-stack task management application built with Spring Boot backend and HTML/CSS/Java frontend, featuring task CRUD and user management.",
    tech: ["Java", "Spring Boot", "HTML", "CSS", "MySQL"],
    features: [
      "Task CRUD operations",
      "Spring Boot REST APIs",
      "User management",
      "Clean responsive UI",
      "Database integration",
    ],
    category: "Full-Stack",
    featured: false,
    color: "#7C3AED",
    gradient: "from-[#7C3AED]/20 to-[#00FFB2]/20",
    github: "https://github.com/MohamedZouari4/Task-Manager-App",
  },
  {
    id: 3,
    title: "E-Training Website",
    description:
      "Full-stack e-training platform built with ASP.NET Core MVC, featuring course management, student tracking, and a clean responsive interface.",
    tech: ["C#", "ASP.NET Core", "HTML", "CSS", "JavaScript", "SQL Server"],
    features: [
      "MVC architecture",
      "Course management",
      "Student tracking",
      "Role-based access",
      "Responsive design",
    ],
    category: "Full-Stack",
    featured: false,
    color: "#00FFB2",
    gradient: "from-[#00FFB2]/20 to-[#00D9FF]/20",
    github: "https://github.com/MohamedZouari4/E-Training-Website",
  },
  {
    id: 4,
    title: "Revision.Tn",
    description:
      "Academic revision platform for Tunisian students, built with Java and Gradle, helping students organize and review course material efficiently.",
    tech: ["Java", "HTML", "CSS", "Gradle"],
    features: [
      "Course revision tools",
      "Student-focused UX",
      "Collaborative features",
      "Organized study material",
      "Cross-platform support",
    ],
    category: "Full-Stack",
    featured: false,
    color: "#F59E0B",
    gradient: "from-[#F59E0B]/20 to-[#7C3AED]/20",
    github: "https://github.com/MohamedZouari4/Revision.Tn",
  },
  {
    id: 5,
    title: "Meteo App",
    description:
      "Cross-platform weather application built with Flutter and Dart, delivering real-time weather data with a clean modern UI across mobile and desktop.",
    tech: ["Flutter", "Dart", "C++", "CMake"],
    features: [
      "Real-time weather data",
      "Cross-platform (mobile & desktop)",
      "Clean Flutter UI",
      "Location-based forecasts",
      "Multi-platform builds",
    ],
    category: "Mobile & Games",
    featured: false,
    color: "#00D9FF",
    gradient: "from-[#00D9FF]/20 to-[#00FFB2]/20",
    github: "https://github.com/MohamedZouari4/Meteo_App",
  },
  {
    id: 6,
    title: "Game Dev Project",
    description:
      "A Unity-based game development project built with C#, exploring game mechanics, physics, and interactive gameplay systems.",
    tech: ["C#", "Unity"],
    features: [
      "Unity game engine",
      "Custom game mechanics",
      "Physics interactions",
      "C# scripting",
      "Interactive gameplay",
    ],
    category: "Mobile & Games",
    featured: false,
    color: "#7C3AED",
    gradient: "from-[#7C3AED]/20 to-[#F59E0B]/20",
    github: "https://github.com/MohamedZouari4/Game-Dev-Project",
  },
  {
    id: 7,
    title: "Python Mini Games",
    description:
      "Collection of classic Python games including Ping Pong, Snake, and XO (Tic-Tac-Toe), built to sharpen core programming fundamentals.",
    tech: ["Python"],
    features: [
      "Ping Pong game",
      "Snake game",
      "XO / Tic-Tac-Toe",
      "Keyboard controls",
      "Clean game logic",
    ],
    category: "Mobile & Games",
    featured: false,
    color: "#00FFB2",
    gradient: "from-[#00FFB2]/20 to-[#7C3AED]/20",
    github: "https://github.com/MohamedZouari4/MyProject",
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor in Computer Science",
    institution: "International Institute of Technology (IIT)",
    location: "Sfax, Tunisia",
    period: "2023 – Present",
    status: "current",
    description:
      "3rd year Computer Science student in a Work-Study program, specializing in AI Engineering, Full-Stack Development, and Software Engineering.",
    highlights: [
      "AI & Machine Learning",
      "Full-Stack Web Development",
      "Software Engineering",
      "Data Structures & Algorithms",
      "System Design",
      "Work-Study Program",
    ],
    color: "#00D9FF",
  },
  {
    id: 2,
    degree: "High School Diploma in Technological Sciences",
    institution: "Lycée November 1955",
    location: "Sfax, Tunisia",
    period: "2022 – 2023",
    status: "completed",
    description:
      "Graduated with a Baccalaureate in Technological Sciences, building strong foundations in mathematics, physics, and applied sciences.",
    highlights: [
      "Technological Sciences",
      "Mathematics",
      "Physics",
      "Applied Sciences",
    ],
    color: "#7C3AED",
  },
];

export const skills = {
  "Programming Languages": {
    color: "#00D9FF",
    items: [
      { name: "Python", level: 90 },
      { name: "Java", level: 82 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 78 },
      { name: "C#", level: 72 },
      { name: "PHP", level: 65 },
      { name: "C", level: 70 },
      { name: "SQL", level: 82 },
    ],
  },
  Frontend: {
    color: "#00FFB2",
    items: [
      { name: "React", level: 88 },
      { name: "TypeScript", level: 78 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  Backend: {
    color: "#7C3AED",
    items: [
      { name: "FastAPI", level: 88 },
      { name: "Spring Boot", level: 80 },
      { name: "Django", level: 75 },
      { name: ".NET", level: 70 },
    ],
  },
  "AI & Machine Learning": {
    color: "#00D9FF",
    items: [
      { name: "LLMs / Ollama", level: 85 },
      { name: "RAG Systems", level: 88 },
      { name: "Hugging Face", level: 78 },
      { name: "NLP", level: 80 },
      { name: "Embeddings", level: 82 },
      { name: "Agentic AI", level: 75 },
    ],
  },
  Databases: {
    color: "#00FFB2",
    items: [
      { name: "PostgreSQL / pgvector", level: 85 },
      { name: "MySQL", level: 82 },
      { name: "SQL Server", level: 75 },
      { name: "Oracle", level: 68 },
    ],
  },
  "Cloud & DevOps": {
    color: "#7C3AED",
    items: [
      { name: "Docker", level: 78 },
      { name: "AWS", level: 65 },
      { name: "Linux", level: 80 },
      { name: "Git / GitHub", level: 88 },
      { name: "CI/CD", level: 70 },
    ],
  },
};

export const ieeeRoles = {
  leadership: [
    {
      role: "Lead",
      org: "IEEE CS AI Caravan Tunisia",
      period: "2025 – Present",
      description: "Leading nationwide AI initiatives and promoting AI education across Tunisia.",
      color: "#00D9FF",
      icon: "🚀",
    },
    {
      role: "Chair",
      org: "IEEE Computer Society IIT Student Branch Chapter",
      period: "2025",
      description: "Led chapter strategy, volunteer teams, technical initiatives, and member engagement.",
      color: "#7C3AED",
      icon: "👑",
    },
    {
      role: "Mentor",
      org: "IEEE Computer Society IIT Student Branch Chapter",
      period: "2026 – Present",
      description: "Guiding student volunteers and future IEEE leaders.",
      color: "#00FFB2",
      icon: "🎯",
    },
    {
      role: "VTools Coordinator",
      org: "IEEE Systems Council Tunisia Chapter",
      period: "2025 – Present",
      description: "Managing IEEE activity reporting and volunteer documentation.",
      color: "#00D9FF",
      icon: "📊",
    },
    {
      role: "Webmaster",
      org: "IEEE IIT Student Branch",
      period: "2025 – Present",
      description: "Managed branding, visual identity, and digital presence for multiple IEEE units.",
      color: "#7C3AED",
      icon: "🌐",
    },
  ],
  international: [
    {
      role: "Social Media Coordinator & Designer",
      org: "IEEE Computer Society Region 8",
      period: "2025",
      description: "Creating communication strategies and digital campaigns across Europe, Africa, and the Middle East.",
      color: "#00D9FF",
      icon: "🌍",
    },
    {
      role: "Designer",
      org: "IEEEXtreme Global Team",
      period: "2024",
      description: "Contributing to branding and visual communication for one of IEEE's largest global programming competitions.",
      color: "#7C3AED",
      icon: "🏆",
    },
    {
      role: "Graphics Designer",
      org: "IEEE MGA SAC",
      period: "2024-2025",
      description: "Supporting global IEEE initiatives through design and communication.",
      color: "#00FFB2",
      icon: "🎨",
    },
    {
      role: "Ambassador",
      org: "IEEE Industry Applications Society",
      period: "2024",
      description: "Representing IEEE initiatives and encouraging student engagement.",
      color: "#00D9FF",
      icon: "⭐",
    },
  ],
  events: [
    {
      role: "Congress Chair",
      org: "AfroTech Intelligence Congress (ATIC)",
      description: "Chaired a major continental tech congress focused on AI and innovation.",
      color: "#00D9FF",
      icon: "🎙️",
    },
    {
      role: "Chair",
      org: "CrackCode 1.0",
      description: "Organized and chaired a competitive programming event.",
      color: "#7C3AED",
      icon: "💻",
    },
    {
      role: "Core Team Video Editor",
      org: "IEEE PES Day 2025",
      description: "Produced video content for IEEE Power & Energy Society Day.",
      color: "#00FFB2",
      icon: "🎬",
    },
    {
      role: "Designer",
      org: "NASA Space Apps Challenge Irbid",
      description: "International collaboration with teams from Jordan and Tunisia.",
      color: "#00D9FF",
      icon: "🛸",
    },
    {
      role: "Social Media Manager",
      org: "IEEE Gaza",
      description: "Led social media campaigns and engagement initiatives.",
      color: "#7C3AED",
      icon: "📱",
    },
  ],
};

export const ieeeStats = [
  { label: "Leadership Positions", value: 15, suffix: "+" },
  { label: "Major Events Organized", value: 10, suffix: "+" },
  { label: "Region 8 Experience", value: 1, suffix: "" },
  { label: "Global Collaborations", value: 5, suffix: "+" },
];

export const awards = [
  {
    title: "Best Ambassador",
    event: "IEEEXtreme 18.0",
    year: "2024",
    emoji: "🏆",
    color: "#FFD700",
    gradient: "from-yellow-500/20 to-yellow-700/10",
    description: "Recognized as the Best Ambassador at the prestigious global IEEE programming competition.",
  },
  {
    title: "Second Best Ambassador",
    event: "rAI/a Event",
    year: "2024",
    emoji: "🥈",
    color: "#C0C0C0",
    gradient: "from-gray-400/20 to-gray-600/10",
    description: "Honored as Runner-Up Ambassador at the rAI/a regional AI event.",
  },
  {
    title: "Outstanding Student Branch Chapter of the Month",
    event: "IEEE Computer Society Region 8",
    year: "October 2025",
    emoji: "🌍",
    color: "#00D9FF",
    gradient: "from-[#00D9FF]/20 to-[#7C3AED]/10",
    description: "IEEE IIT SBC recognized as the Outstanding Chapter across Europe, Africa, and the Middle East.",
  },
];

export const aiesec = {
  role: "Outgoing Global Volunteering Member",
  org: "AIESEC",
  period: "2023 – 2025",
  description: "Participated in AIESEC's global volunteering program, engaging in cross-cultural experiences and community development projects internationally.",
  color: "#00FFB2",
  icon: "🌱",
};

export const certifications = [
  {
    name: "Python for Data Science, AI & Development",
    issuer: "IBM",
    icon: "🐍",
    color: "#00D9FF",
    year: "2024",
    link: "https://www.credly.com/org/ibm/badge/python-for-data-science-and-ai",
    description:
      "Covers Python fundamentals, data manipulation with Pandas & NumPy, data visualization, and introductory AI concepts via IBM's professional certificate track.",
  },
  {
    name: "Scrum Fundamentals Certified",
    issuer: "SCRUMstudy",
    icon: "⚡",
    color: "#7C3AED",
    year: "2024",
    link: "https://www.scrumstudy.com/certification/scrum-fundamentals-certified",
    description:
      "Validates foundational understanding of Scrum framework — sprints, ceremonies, roles (Scrum Master, Product Owner, Development Team), and agile project delivery.",
  },
];

export const publications = [
  {
    title: "Leveraging Artificial Intelligence for Adaptive Battery Optimization in Smartphones",
    venue: "2025 IEEE International Conference on Advances in Data-Driven Analytics And Intelligent Systems (ADACIS)",
    date: "March 2026",
    authors: ["Mohamed Zouari", "Omar Jaoua"],
    link: "https://ieeexplore.ieee.org/document/11437179",
    doi: "10.1109/ADACIS",
    color: "#00D9FF",
    tags: ["AI", "Battery Optimization", "Smartphones", "Machine Learning"],
  },
];

export const exploring = [
  { topic: "Agentic AI", icon: "🤖", color: "#00D9FF" },
  { topic: "Multi-Agent Systems", icon: "🕸️", color: "#7C3AED" },
  { topic: "Generative AI", icon: "✨", color: "#00FFB2" },
  { topic: "RAG Architectures", icon: "🔍", color: "#00D9FF" },
  { topic: "AI Automation", icon: "⚙️", color: "#7C3AED" },
  { topic: "LLM Fine-Tuning", icon: "🎯", color: "#00FFB2" },
  { topic: "Cloud-Native AI", icon: "☁️", color: "#00D9FF" },
  { topic: "Intelligent Agents", icon: "🧠", color: "#7C3AED" },
];
