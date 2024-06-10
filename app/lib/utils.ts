import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names into a single string with deduplication.
 * 
 * This function takes any number of arguments, which can be strings, arrays, or objects
 * representing class names, and merges them into a single string. It uses `clsx` for
 * concatenation and `twMerge` from Tailwind CSS for handling conditional classes and
 * deduplicating class names.
 * 
 * @param inputs - An array of `ClassValue` items. Each `ClassValue` can be a string,
 * an array of strings, or an object with keys as class names and values as booleans
 * indicating whether the class should be included.
 * @returns A string containing all input class names concatenated and deduplicated.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
