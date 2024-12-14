import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { languageCodes } from "./languageCodes";

export function getLanguageName(code) {
  const language = languageCodes.find((lang) => lang.code === code);
  return language ? language.name : "Language code not found";
}

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}