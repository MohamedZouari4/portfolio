import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "fr" | "ar";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.journey": "Journey",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.ieee": "IEEE",
    "nav.awards": "Awards",
    "nav.testimonials": "Testimonials",
    "nav.uses": "Uses",
    "nav.contact": "Contact",
    "hero.greeting": "Hey there, I'm",
    "hero.currently": "Currently building:",
    "hero.at": "@ ADVISING LTD",
    "hero.download": "Download CV",
    "hero.view": "View Projects",
    "hero.available": "Available for Opportunities",
    "hero.badge": "Seeking Work-Study Program · Open to Opportunities",
    "about.title": "Who I Am",
    "about.subtitle": "Computer Science student with a passion for AI and full-stack development",
    "about.github": "GitHub Activity",
    "about.open": "Open to Opportunities",
    "about.open.sub": "International internships · Graduate programs · Global tech roles",
    "skills.title": "Technical Expertise",
    "skills.subtitle": "A comprehensive tech stack spanning AI, frontend, backend, and cloud",
    "experience.title": "Work Experience",
    "experience.subtitle": "Professional internships and engineering roles",
    "projects.title": "Projects",
    "education.title": "Academic Journey",
    "contact.title": "Get In Touch",
    "testimonials.title": "Kind Words",
    "testimonials.subtitle": "What colleagues and supervisors say about working with me",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.journey": "Parcours",
    "nav.education": "Éducation",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.ieee": "IEEE",
    "nav.awards": "Prix",
    "nav.testimonials": "Avis",
    "nav.uses": "Outils",
    "nav.contact": "Contact",
    "hero.greeting": "Bonjour, je suis",
    "hero.currently": "En cours de développement :",
    "hero.at": "@ ADVISING LTD",
    "hero.download": "Télécharger CV",
    "hero.view": "Voir les projets",
    "hero.available": "Disponible pour des opportunités",
    "hero.badge": "Programme alternance · Ouvert aux opportunités",
    "about.title": "Qui suis-je",
    "about.subtitle": "Étudiant en informatique passionné par l'IA et le développement full-stack",
    "about.github": "Activité GitHub",
    "about.open": "Ouvert aux opportunités",
    "about.open.sub": "Stages internationaux · Programmes de master · Postes tech mondiaux",
    "skills.title": "Expertise Technique",
    "skills.subtitle": "Une stack complète couvrant IA, frontend, backend et cloud",
    "experience.title": "Expérience Pro",
    "experience.subtitle": "Stages professionnels et rôles d'ingénierie",
    "projects.title": "Projets",
    "education.title": "Parcours Académique",
    "contact.title": "Me Contacter",
    "testimonials.title": "Témoignages",
    "testimonials.subtitle": "Ce que disent collègues et superviseurs",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "عني",
    "nav.journey": "مسيرتي",
    "nav.education": "التعليم",
    "nav.experience": "الخبرة",
    "nav.projects": "المشاريع",
    "nav.skills": "المهارات",
    "nav.ieee": "IEEE",
    "nav.awards": "الجوائز",
    "nav.testimonials": "الآراء",
    "nav.uses": "الأدوات",
    "nav.contact": "التواصل",
    "hero.greeting": "مرحباً، أنا",
    "hero.currently": "أعمل حالياً على:",
    "hero.at": "@ ADVISING LTD",
    "hero.download": "تحميل السيرة الذاتية",
    "hero.view": "عرض المشاريع",
    "hero.available": "متاح للفرص",
    "hero.badge": "برنامج التعاون مع المؤسسات · مفتوح للفرص",
    "about.title": "من أنا",
    "about.subtitle": "طالب علوم الحاسوب شغوف بالذكاء الاصطناعي والتطوير الشامل",
    "about.github": "نشاط GitHub",
    "about.open": "متاح للفرص",
    "about.open.sub": "تدريبات دولية · برامج الدراسات العليا · وظائف تقنية عالمية",
    "skills.title": "الخبرة التقنية",
    "skills.subtitle": "مجموعة تقنيات شاملة تغطي الذكاء الاصطناعي والواجهات والخلفيات والسحابة",
    "experience.title": "الخبرة المهنية",
    "experience.subtitle": "تدريبات مهنية وأدوار هندسية",
    "projects.title": "المشاريع",
    "education.title": "المسيرة الأكاديمية",
    "contact.title": "تواصل معي",
    "testimonials.title": "كلمات طيبة",
    "testimonials.subtitle": "ما يقوله الزملاء والمشرفون عن العمل معي",
  },
};

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string): string =>
    translations[lang][key] ?? translations["en"][key] ?? key;

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <div dir={lang === "ar" ? "rtl" : "ltr"}>{children}</div>
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
