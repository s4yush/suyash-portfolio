import {
  EXPERIENCE,
  LINKS,
  PROJECTS,
  PROJECT_YEARS,
  SITE,
  SOCIALS,
  STATS,
  TECH_STACK,
  type Project,
} from "@/lib/site";

export type GameProject = Project;

export const GAME_PROJECTS: GameProject[] = PROJECTS;
export const GAME_YEARS = PROJECT_YEARS;
export const GAME_STATEMENT = SITE.statement;
export const GAME_STATS = STATS;
export const GAME_EXPERIENCE = EXPERIENCE;
export const GAME_TECH_STACK = TECH_STACK;
export const GAME_SOCIALS = SOCIALS;
export const GAME_LINKS = LINKS;
export const GAME_ABOUT = {
  name: SITE.name,
  handle: SITE.handle,
  role: SITE.role,
  location: SITE.location,
  available: SITE.available,
  email: SITE.email,
  age: SITE.age,
  whatIDo: SITE.whatIDo,
  howIWork: SITE.howIWork,
  resume: "/resume.pdf",
};
