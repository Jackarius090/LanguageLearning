export const textToVoice = async (textToConvert, languageCode) => {
  try {
    const wordCount = textToConvert.trim().split(/\s+/).length;
    if (wordCount > 1) {
      throw new Error("Text exceeds 1 word limit");
    }

    const textToVoice_API_URL =
      import.meta.env.VITE_textToVoice_API_URL ||
      (import.meta.env.PROD
        ? "https://languagelearning.fly.dev/api/texttovoice"
        : "http://localhost:8080/api/texttovoice");

    const response = await fetch(textToVoice_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: window.location.origin || "https://languagelearning.fly.dev",
      },
      credentials: "include",
      referrerPolicy: "origin",
      body: JSON.stringify({ text: textToConvert, langCode: languageCode }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to convert text to audio");
    }

    const data = await response.json();
    return {
      audioFile: data,
    };
  } catch (error) {
    console.error("Error with text to audio API:", error);
    throw error;
  }
};
