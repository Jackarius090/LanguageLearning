const express = require("express");
const cors = require("cors");
require("dotenv").config();
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const path = require("path");

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: false,
    referrerPolicy: { policy: "strict-origin-when-cross-origin" },
  })
);

app.use(
  cors({
    origin: [
      "https://languagelearning.fly.dev",
      "http://localhost:5173",
      "http://localhost:8080",
    ],
    methods: ["POST", "OPTIONS"],
    credentials: true,
    exposedHeaders: ["*"],
  })
);

app.use(express.json());

app.use(express.static(path.join(__dirname, "dist")));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 500, // limit each IP to 50 requests per windowMs
});

app.use("/api/", limiter);

// Add rate limiting for translation endpoint specifically
const translationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 250, // Adjust this number based on your needs
  message: { error: "Too many translation requests, please try again later" },
});

app.post("/api/translate", translationLimiter, async (req, res) => {
  try {
    const { text } = req.body;
    const { target } = req.body;

    if (!text || typeof text !== "string") {
      return res.status(400).json({ error: "Invalid input" });
    }

    if (text.length > 200) {
      return res.status(400).json({ error: "Text too long" });
    }

    const apiKey = process.env.GOOGLE_CLOUD_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "API key not configured" });
    }

    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Referer: req.headers.referer || "https://languagelearning.fly.dev",
        },
        body: JSON.stringify({
          q: text,
          target: target,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || "Translation API error",
      });
    }

    if (data?.data?.translations?.[0]) {
      res.json({
        translatedText: data.data.translations[0].translatedText,
        detectedLanguage: data.data.translations[0].detectedSourceLanguage,
      });
    } else {
      res
        .status(400)
        .json({ error: "Invalid response from translation service" });
    }
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/detectlanguage", translationLimiter, async (req, res) => {
  try {
    const { content } = req.body;

    if (!content || typeof content !== "string" || content.trim() === "") {
      throw new Error("Invalid input: Text is required.");
    }

    if (content.length > 500) {
      return res.status(400).json({ error: "Text too long" });
    }

    const apiKey = process.env.GOOGLE_CLOUD_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "API key not configured" });
    }

    const API_URL = `https://translation.googleapis.com/language/translate/v2/detect?key=${apiKey}`;

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: req.headers.referer || "https://languagelearning.fly.dev",
      },
      body: JSON.stringify({
        q: content,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || "Translation API error",
      });
    }

    if (data?.data?.detections?.[0][0].language) {
      res.json({
        detectedLanguage: data.data.detections[0][0].language,
      });
    } else {
      res
        .status(400)
        .json({ error: "Invalid response from translation service" });
    }
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/texttovoice", async (req, res) => {
  try {
    const { text } = req.body;
    const { langCode } = req.body;

    if (!text || typeof text !== "string") {
      return res.status(400).json({ error: "Invalid input" });
    }

    if (text.length > 20) {
      return res.status(400).json({ error: "Text too long" });
    }

    const apiKey = process.env.GOOGLE_CLOUD_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "API key not configured" });
    }

    const response = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Referer: req.headers.referer || "https://languagelearning.fly.dev",
        },
        body: JSON.stringify({
          input: {
            text: text,
          },
          voice: {
            languageCode: langCode || "en",
          },
          audioConfig: {
            audioEncoding: "MP3",
          },
        }),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || "Text to voice API error",
      });
    }

    if (data) {
      res.json({
        audioFile: data.audioContent,
      });
    } else {
      res
        .status(400)
        .json({ error: "Invalid response from text to voice service" });
    }
  } catch (error) {
    console.error("Server error:", error);
    res
      .status(500)
      .json({ error: "Internal server error from text to voice service" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
