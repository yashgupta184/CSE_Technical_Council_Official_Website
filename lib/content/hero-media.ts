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
  /** Caption shown under the empty frame while media is pending. */
  placeholderLabel: string;
} = {
  // TODO: replace with the official council reel once supplied.
  video: null,
  // TODO: or replace with an official council photograph.
  image: null,
  placeholderLabel: "Council photo or reel to be added",
};
