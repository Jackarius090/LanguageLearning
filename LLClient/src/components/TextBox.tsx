import * as React from "react";
import { Button } from "@/components/ui/button";
import { translateText } from "@/lib/translateFunction";
import { detectLanguage } from "@/lib/detectLanguage";
import { getLanguageName } from "@/lib/utils";
import { useTextStore } from "@/lib/textStore";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FormatTextBox } from "./FormatTextBox";
import { useTextStyleStore } from "@/lib/textStyleStore";
import { textToVoice } from "@/lib/textToVoiceFunction";
import { useEffect, useRef } from "react";

const TextBox = ({
  setHighlightedText,
  languageCode,
  setLanguageCode,
  setTranslation,
  translation,
  targetLang,
  setAudioSrc,
}) => {
  const { toast } = useToast();
  const { setTextboxText, TextboxText } = useTextStore();
  const language = getLanguageName(languageCode);
  const textSize = useTextStyleStore((state) => state.fontSize);
  const textColor = useTextStyleStore((state) => state.textColor);
  const textFont = useTextStyleStore((state) => state.fontFamily);
  const textAlignment = useTextStyleStore((state) => state.textAlignment);
  const lineHeight = useTextStyleStore((state) => state.lineHeight);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to scroll height
    }
  }, [TextboxText]);

  const handleMouseUp = () => {
    handleSelection();
  };

  const handleTouchEnd = () => {
    handleSelection();
  };

  const detectedLanguageCodeSetter = async (text) => {
    try {
      const result = await detectLanguage(text);
      setLanguageCode(result.detectedLanguage);
    } catch (error) {
      console.error("Error in langCode:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (TextboxText && TextboxText.trim() !== "") {
      detectedLanguageCodeSetter(TextboxText);
    }
  }, [TextboxText]);

  const handleChange = (e) => {
    const newText = e.target.value;
    setTextboxText(newText);
    if (newText) {
      detectedLanguageCodeSetter(newText);
    }
  };

  const handleSelection = () => {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      const wordCount = selectedText.trim().split(/\s+/).length;
      if (wordCount <= 20) {
        setHighlightedText(selectedText);
        setTranslation({ ...translation, loading: true, firstTime: false });
        handleTranslate(selectedText, selectedText);
      } else {
        toast({
          variant: "destructive",
          title: `${wordCount} words! That's too many!`,
          description: "Please select less than 20 words at a time",
        });
        setHighlightedText(selectedText);
        setTranslation({
          translation: "Please select less than 20 words at a time",
        });
      }
    }
  };

  const handleTranslate = async (TexttoTranslate, selectedText) => {
    try {
      const { translatedText } = await translateText(
        TexttoTranslate,
        targetLang
      );
      setTranslation({ translation: translatedText, loading: false });

      await handleTextToVoice(selectedText, languageCode);
    } catch (error) {
      if (error.message === "Text exceeds 20 words limit") {
        setTranslation({
          translation: "Please select less than 20 words at a time",
        });
      } else if (
        error.message ===
        "Too many translation requests, please try again later"
      ) {
        setTranslation({
          translation: "Too many translation requests, please try again later",
        });
      } else {
        setTranslation({ translation: "Failed to translate" });
      }
      console.error(error);
    }
  };

  const handleTextToVoice = async (text, languageCode) => {
    if (!text) {
      return;
    }
    try {
      const { audioFile } = await textToVoice(text, languageCode);
      setAudioSrc(`data:audio/mp3;base64,${audioFile.audioFile}`);
    } catch (error) {
      console.error("Error processing audio:", error);
    }
  };

  return (
    <div className="w-9/12 max-w-74ch flex flex-col">
      <div className="flex gap-2 justify-center">
        <FormatTextBox />
        <Button
          className="text-xs md:text-base text-wrap"
          variant="outline"
          onClick={() => setTextboxText("")}
        >
          Clear textbox
        </Button>
      </div>
      <p className="text-center text-xs sm:text-sm md:text-md pb-2">
        Language: {language}
      </p>

      <Textarea
        ref={textareaRef}
        rows={30} // Set default rows
        id="textbox"
        spellCheck={false}
        // these should be in tailwind classes haha
        style={
          {
            textAlign: textAlignment,
            fontFamily: textFont,
            fontSize: `${textSize}px`,
            color: textColor,
            "--placeholder-color": textColor,
            lineHeight: lineHeight,
          } as React.CSSProperties
        }
        className={
          textColor === "primary"
            ? "placeholder-primary"
            : "placeholder:[color:var(--placeholder-color)]"
        }
        onMouseUp={handleMouseUp}
        onTouchEnd={handleTouchEnd}
        value={TextboxText}
        onChange={handleChange}
        placeholder="Add text here... Try adding a sample text from the menu above or copy in your own text"
      />
    </div>
  );
};

export { TextBox };
