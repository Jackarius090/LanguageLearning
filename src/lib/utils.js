import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// export async function translateText(TexttoTranslate) {
//   const apiKey = import.meta.env.VITE_GOOGLE_CLOUD_API_KEY;
//   try {
//     const response = await fetch(
//       `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           q: TexttoTranslate, // Text to translate
//           target: "en", // Target language code
//         }),
//       }
//     );
//     const data = await response.json();
//     if (data && data.data && data.data.translations) {
//       const translatedText = data.data.translations[0].translatedText; // Get the translated text
//       const language = data.data.translations[0].detectedSourceLanguage;
//       const response = [translatedText, language];
//       console.log(response);
//       return response;
//       // console.log(JSON.stringify(data, null, 2));
//     } else {
//       return "Error translating text";
//     }
//   } catch (error) {
//     console.error("Error with translation API:", error);
//     return "Failed to translate";
//   }
// }
