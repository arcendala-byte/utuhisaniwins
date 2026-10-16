import { siteImages } from "@/data/images";

export interface Program {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  whatWeDo: string;
  whyItMatters: string;
  whoBenefits: string;
  futureGoals: string;
  image: string;
  imageAlt: string;
  href: string;
}

export const programs: Program[] = [
  {
    id: "education",
    number: "01",
    title: "Education",
    shortDescription:
      "We work to expand access to learning for Maasai girls — so school is a realistic path, not a distant hope.",
    fullDescription:
      "Education sits at the center of our mission. We partner with families and communities in Kajiado to reduce barriers that keep girls out of school and to support environments where learning can continue.",
    whatWeDo:
      "School fee assistance, mentorship, student monitoring, and practical support that helps girls stay engaged in learning. We also work to ensure girls have essential supplies, including sanitary towels, so they can attend school with dignity and confidence.",
    whyItMatters:
      "When a girl can learn, she gains choices about her health, her livelihood, and her role in community life.",
    whoBenefits:
      "Maasai girls and the families and communities surrounding them in Kajiado and surrounding areas.",
    futureGoals:
      "Deepen existing education support and document outcomes with verified data as programs mature.",
    image: siteImages.education.src,
    imageAlt: siteImages.education.alt,
    href: "/work#education",
  },
  {
    id: "healthcare",
    number: "02",
    title: "Healthcare",
    shortDescription:
      "We support access to essential healthcare and health education for girls and the communities they belong to.",
    fullDescription:
      "Health and education reinforce each other. Our healthcare focus is on access, awareness, and community-level support — not on claiming services we have not yet verified with the client.",
    whatWeDo:
      "Community health awareness, essential supply support, and practical encouragement for girls and families to access healthcare when they need it. Details for any formal clinical activities remain subject to confirmation from the organization.",
    whyItMatters:
      "Girls who are healthy can attend school regularly and participate fully in community life.",
    whoBenefits:
      "Maasai girls, their families, and community members reached through Utuhisaniwins initiatives.",
    futureGoals:
      "Expand verified healthcare activities and measure reach with data supplied by the organization.",
    image: siteImages.healthcare.src,
    imageAlt: siteImages.healthcare.alt,
    href: "/work#healthcare",
  },
];
