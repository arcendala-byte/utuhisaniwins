import { siteImages } from "@/data/images";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
}

export const team: TeamMember[] = [
  {
    name: "Simayo Rempeyian",
    role: "Founder and Chairperson",
    bio: "Simayo Rempeyian founded Utuhisaniwins in 2024 after drawing strength from her own sponsorship journey and the urgent need to support other girls facing barriers to education and wellbeing.",
    image: siteImages.simayo.src,
    imageAlt: siteImages.simayo.alt,
  },
  {
    name: "June Mwangi",
    role: "Secretary",
    bio: "June Mwangi joined Simayo in building the organization and helped shape its early leadership, community focus, and commitment to practical support for girls.",
    image: siteImages.june.src,
    imageAlt: siteImages.june.alt,
  },
  {
    name: "Ongeri",
    role: "Community collaborator",
    bio: "Ongeri is part of the wider community network supporting the mission and the girls Utuhisaniwins serves. The organization’s full role description for this individual is kept minimal and factual.",
    image: siteImages.ongeri.src,
    imageAlt: siteImages.ongeri.alt,
  },
];
