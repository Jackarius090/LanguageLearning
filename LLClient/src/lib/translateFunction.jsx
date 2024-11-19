export const translateText = async (TexttoTranslate, apiKey) => {
  try {
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: TexttoTranslate,
          target: "en",
        }),
      }
    );

    const data = await response.json();

    if (data && data.data && data.data.translations) {
      return {
        translatedText: data.data.translations[0].translatedText,
        detectedLanguage: data.data.translations[0].detectedSourceLanguage,
      };
    } else {
      throw new Error("Error translating text");
    }
  } catch (error) {
    console.error("Error with translation API:", error);
    throw new Error("Failed to translate");
  }
};
  