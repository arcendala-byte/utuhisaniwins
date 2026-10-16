/**
 * Centralized media configuration for Utuhisaniwins.
 *
 * ─────────────────────────────────────────────────────────────
 * HOW TO REPLACE PLACEHOLDER IMAGES WITH REAL PHOTOS:
 *
 *   1. Drop the real image into /public/images/ (any subfolder)
 *   2. Update the `src` below to match (e.g. "/images/education/girl-reading.jpg")
 *   3. Update `alt` to describe what's actually in the photo
 *   4. Delete the `isPlaceholder: true` flag once a real photo is in place
 * ─────────────────────────────────────────────────────────────
 *
 * The <Photo /> component reads these values and renders an elegant
 * fallback block for any entry still marked `isPlaceholder: true`.
 */

export interface MediaAsset {
  src: string;
  alt: string;
  /** Caption shown when rendered as a fallback block. Keep it factual. */
  fallbackLabel: string;
  /** Set to false once a real client photo replaces this entry. */
  isPlaceholder: boolean;
  /** Optional focal point for object-position. Defaults to "center". */
  focalPoint?: string;
}

// ── HERO ─────────────────────────────────────────────
import heroImage from "@/app/gallery/images/hero.jpg";
import educationImage from "@/app/gallery/images/education.jpg";
import healthcareImage from "@/app/gallery/images/healthcare.jpg";
import listeningImage from "@/app/gallery/images/listening.jpg";
import africaMapImage from "@/app/gallery/images/africa-map.jpg";

export const heroMedia: MediaAsset = {
  src: heroImage.src,
  alt: "Maasai girls participating in a Utuhisaniwins educational program",
  fallbackLabel: "Hero photograph",
  isPlaceholder: false,
};

// ── PROGRAM FEATURES ─────────────────────────────────
export const educationMedia: MediaAsset = {
  src: educationImage.src,
  alt: "A Maasai girl studying with her classmates",
  fallbackLabel: "Education program photograph",
  isPlaceholder: false,
};

export const healthcareMedia: MediaAsset = {
  src: healthcareImage.src,
  alt: "Community health outreach in Kajiado",
  fallbackLabel: "Healthcare program photograph",
  isPlaceholder: false,
};

// ── STORYTELLING ─────────────────────────────────────
export const communityStoryMedia: MediaAsset = {
  src: listeningImage.src,
  alt: "A gathering of the Maasai community in Kajiado",
  fallbackLabel: "Community photograph",
  isPlaceholder: false,
};

export const featuredStoryMedia: MediaAsset = {
  src: africaMapImage.src,
  alt: "Interactive Africa map highlighting Kenya and the Kajiado region where Utuhisaniwins works",
  fallbackLabel: "Featured story map",
  isPlaceholder: false,
};

// ── SUPPORT CTA ──────────────────────────────────────
export const supportMedia: MediaAsset = {
  src: listeningImage.src,
  alt: "A wide view of the community we work with",
  fallbackLabel: "Community photograph",
  isPlaceholder: false,
};