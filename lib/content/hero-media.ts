/**
 * Hero visual configuration.
 *
 * The hero's right column renders whatever is configured here. Until an
 * official council photograph or reel is supplied, both fields stay null and
 * the column renders a neutral placeholder frame — no stock or generated
 * artwork is substituted.
 *
 * To go live with a visual, set exactly one of:
 *   - `video`: a self-hosted MP4 (plus an optional `poster` still), e.g.
 *       video: { src: "/media/hero.mp4", poster: "/media/hero-poster.jpg" }
 *   - `image`: a still, e.g.
 *       image: { src: "/media/hero.jpg", width: 1280, height: 1600 }
 *
 * `video` wins if both are set. Remote sources must have their hostname added
 * to `images.remotePatterns` in next.config.ts (images only; video is a plain
 * <video> tag and needs no config).
 */

export type HeroVideo = {
  src: string;
  /** Optional still shown before the video can play. */
  poster?: string;
  /** Describes the footage for users who cannot see it. */
  description: string;
};

export type HeroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const heroMedia: {
  video: HeroVideo | null;
  image: HeroImage | null;
  placeholderLabel: string;
} = {
  // Replace with official council reel when ready
  video: null,
  // Official CSE Technical Council seal/logo
  image: {
    src: "/hero-logo.png",
    alt: "CSE Technical Council Official Emblem - JSS University, Noida",
    width: 1024,
    height: 1024,
  },
  placeholderLabel: "Official Council Seal",
};
