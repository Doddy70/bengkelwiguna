import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRelativeUrl(url: string | undefined): string {
  if (!url) return '/';
  try {
    if (url.startsWith('http')) {
      const parsedUrl = new URL(url);
      return parsedUrl.pathname + parsedUrl.search + parsedUrl.hash;
    }
    return url;
  } catch {
    return url;
  }
}
