export const detectLanguage = async (text) => {
  const shortText = text.slice(0, 100);
  try {
    const API_URL =
      import.meta.env.VITE_detectLanguage_API_URL ||
      (import.meta.env.PROD
        ? "https://languagelearning.fly.dev/api/detectLanguage"
        : "http://localhost:8080/api/detectlanguage");

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: window.location.origin || "https://languagelearning.fly.dev",
      },
      credentials: "include",
      referrerPolicy: "origin",
      body: JSON.stringify({ content: shortText }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to detect language");
    }

    const data = await response.json();
    return {
      detectedLanguage: data.detectedLanguage,
    };
  } catch (error) {
    console.error("Error with detect language API:", error);
    throw error;
  }
};
