export function readingTime(text) {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 238);
  return minutes;
}
