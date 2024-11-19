export const translateText = async (TexttoTranslate) => {
  try {
    const API_URL = import.meta.env.PROD
      ? "https://languagelearning.fly.dev/api/translate"
      : "http://localhost:8080/api/translate";

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": window.location.origin
      },
      body: JSON.stringify({ text: TexttoTranslate }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to translate");
    }

    const data = await response.json();
    return {
      translatedText: data.translatedText,
      detectedLanguage: data.detectedLanguage,
    };
  } catch (error) {
    console.error("Error with translation API:", error);
    throw error;
  }
};
