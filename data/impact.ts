/**
 * Impact data for Utuhisaniwins.
 *
 * IMPORTANT: Do NOT populate `verifiedStats` with numbers the
 * organization has not confirmed. Until verified metrics exist,
 * the UI renders the "Priorities" section instead of a stats grid.
 */

export interface VerifiedStat {
  value: number;
  suffix: string;
  label: string;
}

export const verifiedStats: VerifiedStat[] = [];

export const hasVerifiedStats = verifiedStats.length > 0;

export interface Priority {
  number: string;
  title: string;
  description: string;
}

export const impactPriorities: Priority[] = [
  {
    number: "01",
    title: "Access to education",
    description:
      "Supporting Maasai girls with the opportunity to attend school, stay in school, and build a stronger future through learning.",
  },
  {
    number: "02",
    title: "Access to healthcare",
    description:
      "Working to make sure girls and their communities can reach essential healthcare and health information.",
  },
  {
    number: "03",
    title: "Community partnership",
    description:
      "Listening first, working alongside Maasai families and community leaders, and building solutions that last.",
  },
  {
    number: "04",
    title: "Long-term opportunity",
    description:
      "Focusing on outcomes that extend beyond a single program — confidence, dignity, and choice for every girl we support.",
  },
];

/**
 * Short intro used by the homepage impact section.
 * Neutral mission-focused copy until verified data exists.
 */
export const impactIntro = {
  label: "Our impact priorities",
  title: "Four commitments guiding our work.",
  note: "We focus on access to education, healthcare, community partnership, and long-term opportunity for Maasai girls and their families.",
} as const;

/**
 * Featured "mission in practice" block used by the homepage.
 * Not a specific event or beneficiary — general mission language only.
 */
export const missionFeature = {
  label: "Founding story",
  title: "A community response shaped by lived experience.",
  body: "Simayo Rempeyian founded Utuhisaniwins after seeing how a small act of support can change a girl’s future. The organization was built so more Maasai girls could access education, healthcare, and the encouragement they need to keep moving forward.",
  link: { label: "View our story", href: "/about" },
} as const;

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const milestones: Milestone[] = [];

export interface SuccessStory {
  id: string;
  title: string;
  excerpt: string;
}

export const successStories: SuccessStory[] = [];

export const impactNotice =
  "We share impact honestly and only publish verified information after the organization confirms it.";