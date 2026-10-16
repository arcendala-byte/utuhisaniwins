
import heroImage from "@/app/gallery/images/hero.jpg";
import educationImage from "@/app/gallery/images/education.jpg";
import healthcareImage from "@/app/gallery/images/healthcare.jpg";
import africaMapImage from "@/app/gallery/images/africa-map.jpg";
import listeningImage from "@/app/gallery/images/listening.jpg";
import simayoImage from "@/app/gallery/images/simayo_alone.jpg";
import simayoFriendImage from "@/app/gallery/images/simayo_friend.jpg";
import juneImage from "@/app/gallery/images/june.jpg";
import ongeriImage from "@/app/gallery/images/ongeri_profile.jpg";
import ongeriSpeakingImage from "@/app/gallery/images/ongeri_speaking.jpg";
import helpImage from "@/app/gallery/images/help.jpg";
import communityImage from "@/app/gallery/images/community.jpg";

export interface SiteImage {
  src: string;
  alt: string;
  isFallback?: boolean;
}

export const siteImages = {
  hero: {
    src: heroImage.src,
    alt: "Community gathering for Utuhisaniwins in Kajiado, Kenya",
    isFallback: false,
  },
  storytelling: {
    src: listeningImage.src,
    alt: "A community listening session led by Utuhisaniwins",
    isFallback: false,
  },
  education: {
    src: educationImage.src,
    alt: "A Maasai girl learning in a supportive school environment",
    isFallback: false,
  },
  healthcare: {
    src: healthcareImage.src,
    alt: "Healthcare outreach and community wellness support in Kajiado",
    isFallback: false,
  },
  featured: {
    src: africaMapImage.src,
    alt: "Map highlighting Kenya and the Kajiado region",
    isFallback: false,
  },
  founderStory: {
    src: ongeriSpeakingImage.src,
    alt: "Ongeri speaking during a community engagement session",
    isFallback: false,
  },
  simayo: {
    src: simayoImage.src,
    alt: "Simayo Rempeyian, founder and chairperson of Utuhisaniwins",
    isFallback: false,
  },
  simayoFriend: {
    src: simayoFriendImage.src,
    alt: "Simayo Rempeyian with friends and community members",
    isFallback: false,
  },
  june: {
    src: juneImage.src,
    alt: "June Mwangi, secretary of Utuhisaniwins",
    isFallback: false,
  },
  ongeri: {
    src: ongeriImage.src,
    alt: "Ongeri, a community collaborator with Utuhisaniwins",
    isFallback: false,
  },
  teamPortrait: {
    src: simayoImage.src,
    alt: "Utuhisaniwins team portrait",
    isFallback: false,
  },
  help: {
    src: helpImage.src,
    alt: "Community members engaging in a discussion led by Utuhisaniwins",
    isFallback: false,
  },
  community: {
    src: communityImage.src,
    alt: "Community members participating in a local event organized by Utuhisaniwins",
    isFallback: false,
  },
} as const satisfies Record<string, SiteImage>;
