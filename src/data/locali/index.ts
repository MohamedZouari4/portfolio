import type { Lang } from "../../lib/LangContext";
import en from "./en";
import fr from "./fr";
import ar from "./ar";

export type ModuleId =
  | "core"
  | "professional"
  | "personal"
  | "connect"
  | "family"
  | "enterprise"
  | "hardware"
  | "robotics";

export type GroupId = "foundation" | "experience" | "physical";

export interface ModuleMeta {
  id: ModuleId;
  phase: number;
  group: GroupId;
  done: number;
  total: number;
  /** Core: its foundation is built inside Professional. */
  base?: boolean;
  /** Orbit ring (0 = centre) and angle in degrees on the ecosystem map. */
  ring: number;
  angle: number;
}

// Progress from the LOCALI Tasks board, snapshot of 23 November 2026.
export const MODULES: ModuleMeta[] = [
  { id: "core", phase: 2, group: "foundation", done: 21, total: 21, base: true, ring: 0, angle: 0 },
  { id: "professional", phase: 1, group: "experience", done: 46, total: 126, ring: 1, angle: 270 },
  { id: "personal", phase: 3, group: "experience", done: 0, total: 31, ring: 2, angle: -35 },
  { id: "connect", phase: 4, group: "foundation", done: 0, total: 12, ring: 2, angle: 120 },
  { id: "family", phase: 5, group: "experience", done: 0, total: 4, ring: 3, angle: 220 },
  { id: "enterprise", phase: 5, group: "experience", done: 0, total: 5, ring: 3, angle: 35 },
  { id: "hardware", phase: 6, group: "physical", done: 0, total: 0, ring: 4, angle: 160 },
  { id: "robotics", phase: 7, group: "physical", done: 0, total: 0, ring: 4, angle: -15 },
];

export const OVERALL = { done: 46, total: 200, active: 4 };

/** Roadmap phases in order; each points at the module whose progress it shows. */
export const PHASE_MODULES: ModuleId[] = [
  "professional",
  "core",
  "personal",
  "connect",
  "family",
  "hardware",
  "robotics",
];

export const pct = (m: ModuleMeta) => (m.total ? Math.round((m.done / m.total) * 100) : 0);
export const isPhysical = (id: ModuleId) => id === "hardware" || id === "robotics";

export interface ModuleText {
  tag: string;
  role: string;
  example: string;
  doesTitle: string;
  does: string[];
  who: string;
  why: string;
  firstTitle?: string;
  first: string[];
  opens?: string;
  status: string;
}

type Item = { title: string; text: string };

export interface LocaliContent {
  hero: {
    status: string;
    eyebrow: string;
    tagline: string;
    description: string;
    quote: string;
    role: string;
    byline: string;
  };
  stats: { overall: string; professional: string; modules: string; modulesValue: string; active: string };
  mock: {
    privateLabel: string;
    projectsLabel: string;
    projects: string[];
    question: string;
    answer: string;
    sources: string[];
    footer: string;
  };
  positioning: { label: string; title: string; text: string; cards: { badge: string; title: string; text: string }[] };
  ecosystem: {
    label: string;
    title: string;
    intro: string;
    groups: Record<GroupId, Item>;
    mapLabel: string;
    mapNote: string;
    capsTitle: string;
    capsNote: string;
    caps: string[];
    capsLater: string[];
    later: string;
  };
  labels: {
    phase: string;
    example: string;
    who: string;
    why: string;
    first: string;
    opens: string;
    insidePro: string;
    inProgress: string;
    planned: string;
    idea: string;
    baseReady: string;
    noTasks: string;
    tasks: (done: number, total: number) => string;
    now: string;
    gate: string;
    overall: string;
    foundation: string;
  };
  modules: Record<ModuleId, ModuleText>;
  platform: {
    label: string;
    title: string;
    intro: string;
    core: Item[];
    interfacesTitle: string;
    interfaces: string;
    extTitle: string;
    extIntro: string;
    ext: string[];
    flowTitle: string;
    flowNote: string;
    flow: Item[];
    robotsFlow: string;
  };
  roadmap: {
    label: string;
    title: string;
    intro: string;
    phases: { name: string; objective: string; gate: string }[];
    disciplineTitle: string;
    discipline: string[];
  };
  progress: { label: string; title: string; snapshot: string; note: string };
  principles: { label: string; title: string; items: Item[]; robotsTitle: string; robots: string[] };
  longterm: { label: string; title: string; intro: string; items: Item[] };
  business: { label: string; title: string; intro: string; items: Item[] };
  risks: { label: string; title: string; cols: [string, string, string]; items: [string, string, string][] };
  vision: {
    label: string;
    title: string;
    text: string;
    missionTitle: string;
    mission: string;
    promise: Item[];
    note: string;
  };
  closing: { label: string; title: string; paras: string[]; quote: string };
  tags: string[];
}

export const localiContent: Record<Lang, LocaliContent> = { en, fr, ar };
