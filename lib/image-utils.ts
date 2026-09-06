export function getImageUrl(src: string | undefined | null): string | null {
  if (!src || src.includes("placeholder")) return null;
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("/")) {
    return src;
  }
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "l5nibmw6";
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${src}`;
}
