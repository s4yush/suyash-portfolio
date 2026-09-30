/**
 * Edit this file to update your name, bio, socials, and projects.
 * Placeholder URLs are marked YOUR_* — swap them when you have the real links.
 */

export const SITE = {
  name: "Suyash",
  handle: "s4yush",
  age: 19,
  role: "First-year BTech CSE student",
  headline: "Aspiring software engineer",
  location: "India",
  available: "Open to learning & internships",
  statement:
    "I'm Suyash, 19, a first-year BTech Computer Science student. I want to become a software engineer — this site is where I'll share the projects and the journey as they happen.",
  heroLine: "First-year BTech CSE. Learning to build. Aiming for software engineering.",
  whatIDo:
    "I'm starting out in computer science: coding, problem-solving, and figuring out how real software gets made.",
  howIWork:
    "Curious, consistent, and early in the journey. Projects, internships, and write-ups will land here over time.",
  email: "YOUR_GMAIL@gmail.com",
  githubUser: "s4yush",
  github: "https://github.com/s4yush",
  siteUrl: "https://github.com/s4yush",
  twitterHandle: "@YOUR_TWITTER",
  codingStartYear: 2026,
} as const;

export type SocialLink = {
  label: string;
  href: string;
  color: string;
};

/** Change these hrefs when you have real accounts. GitHub is already yours. */
export const SOCIALS: SocialLink[] = [
  { label: "GitHub", href: SITE.github, color: "#F4F4EF" },
  { label: "Gmail", href: `mailto:${SITE.email}`, color: "#EA4335" },
  { label: "Spotify", href: "https://open.spotify.com/user/YOUR_SPOTIFY", color: "#1DB954" },
  { label: "LinkedIn", href: "https://linkedin.com/in/YOUR_LINKEDIN", color: "#0A66C2" },
  { label: "Instagram", href: "https://instagram.com/YOUR_INSTAGRAM", color: "#E4405F" },
  { label: "X / Twitter", href: "https://x.com/YOUR_TWITTER", color: "#9CA3AF" },
  { label: "YouTube", href: "https://youtube.com/@YOUR_YOUTUBE", color: "#FF0000" },
];

export const TICKER = [
  "BTech CSE",
  "First year",
  "Software engineering",
  "Learning",
  "Python",
  "C",
  "Java",
  "GitHub",
];

export const TECH_STACK = [
  { name: "Python", color: "#3776AB" },
  { name: "C", color: "#A8B9CC" },
  { name: "Java", color: "#ED8B00" },
  { name: "HTML / CSS", color: "#E34F26" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Git", color: "#F05032" },
];

export const EXPERIENCE = [
  {
    title: "BTech Computer Science",
    company: "First year · journey just starting",
    period: "2026 – Present",
    description:
      "Learning the fundamentals. Projects, internships, and the rest of the story will be added here as they happen.",
    current: true,
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  github: string;
  url?: string;
  tech: string[];
  year: number;
  stars?: number;
  users?: string;
  image?: string;
  featured?: boolean;
  stat?: string;
  num?: string;
};

/** Add real projects here later. */
export const PROJECTS: Project[] = [
  {
    name: "Coming soon",
    tagline: "Projects and journey loading…",
    description:
      "I'm in my first year. When I ship something, it will show up here. Until then, you can follow along on GitHub.",
    github: SITE.github,
    tech: ["Learning", "CSE", "Build in public"],
    year: 2026,
    featured: true,
    stat: "Soon",
    num: "01",
  },
];

export const FEATURED = PROJECTS.filter((p) => p.featured).map((p, i) => ({
  ...p,
  num: p.num ?? String(i + 1).padStart(2, "0"),
  stat: p.stat ?? "Soon",
}));

export const PROJECT_YEARS = [...new Set(PROJECTS.map((p) => p.year))].sort(
  (a, b) => b - a,
);

export const STATS = [
  { label: "Age", value: SITE.age, suffix: "" },
  { label: "Year", value: 1, suffix: "" },
  { label: "Degree", value: 4, suffix: "y" },
  {
    label: "Journey year",
    value: Math.max(1, new Date().getFullYear() - SITE.codingStartYear + 1),
    suffix: "",
  },
];

export const LINKS = [
  { name: "GitHub", description: "Code, repos, and what I ship next", href: SITE.github, external: true },
  { name: "Gmail", description: "Say hi — replace YOUR_GMAIL in src/lib/site.ts", href: `mailto:${SITE.email}`, external: true },
  { name: "Spotify", description: "What I'm listening to — replace YOUR_SPOTIFY", href: "https://open.spotify.com/user/YOUR_SPOTIFY", external: true },
  { name: "LinkedIn", description: "Professional profile — replace YOUR_LINKEDIN", href: "https://linkedin.com/in/YOUR_LINKEDIN", external: true },
  { name: "Website Status", description: "Uptime checks (placeholder)", href: "/status", external: false },
];

export const REDIRECTS: Record<string, string> = {
  github: SITE.github,
  gmail: `mailto:${SITE.email}`,
  spotify: "https://open.spotify.com/user/YOUR_SPOTIFY",
  linkedin: "https://linkedin.com/in/YOUR_LINKEDIN",
  instagram: "https://instagram.com/YOUR_INSTAGRAM",
  x: "https://x.com/YOUR_TWITTER",
  twitter: "https://x.com/YOUR_TWITTER",
  yt: "https://youtube.com/@YOUR_YOUTUBE",
};
