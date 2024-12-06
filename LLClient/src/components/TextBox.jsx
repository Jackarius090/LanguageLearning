import * as React from "react";
import { Button } from "@/components/ui/button";
import { translateText } from "@/lib/translateFunction";
import { getLanguageName } from "@/lib/utils";
import { useTextStore } from "@/lib/textStore";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FormatTextBox } from "./FormatTextBox";
import { useTextStyleStore } from "@/lib/textStyleStore";

const TextBox = ({
  setHighlightedText,
  languageCode,
  setLanguageCode,
  setTranslation,
  translation,
}) => {
  const { toast } = useToast();
  const { setValue, value } = useTextStore();

  const handleMouseUp = () => {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      const wordCount = selectedText.trim().split(/\s+/).length;
      if (wordCount <= 20) {
        setHighlightedText(selectedText);
        setTranslation({ ...translation, loading: true, firstTime: false });
        handleTranslate(selectedText);
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

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleTranslate = async (TexttoTranslate) => {
    try {
      const { translatedText, detectedLanguage } = await translateText(
        TexttoTranslate
      );
      setTranslation({ translation: translatedText, loading: false });
      setLanguageCode(detectedLanguage);
    } catch (error) {
      if (error.message === "Text exceeds 20 words limit") {
        setTranslation({
          translation: "Please select less than 20 words at a time",
        });
      } else {
        setTranslation({ translation: "Failed to translate" });
      }
      console.log(error);
    }
  };

  const language = getLanguageName(languageCode);
  const textSize = useTextStyleStore((state) => state.fontSize);
  const textColor = useTextStyleStore((state) => state.textColor);
  const textFont = useTextStyleStore((state) => state.fontFamily);
  const textAlignment = useTextStyleStore((state) => state.textAlignment);

  return (
    <div className="w-9/12 max-w-74ch flex flex-col">
      <div>
        <FormatTextBox className="" />
        <Button
          className="m-3 w-1/5 mx-4"
          variant="outline"
          onClick={() => setValue("")}
        >
          Clear textbox
        </Button>
      </div>
      <p className="text-center text-xs sm:text-sm md:text-md pb-2">
        Language: {language}
      </p>

      <Textarea
        // these should be in tailwind classes haha
        id="textbox"
        spellCheck={false}
        style={{
          textAlign: textAlignment,
          minHeight: "100vh",
          height: "auto",
          resize: "none",
          overflow: "hidden",
          fontFamily: textFont,
          fontSize: `${textSize}px`,
          color: textColor,
          "--placeholder-color": textColor,
        }}
        className={
          textColor === "primary"
            ? "placeholder-primary"
            : "placeholder:[color:var(--placeholder-color)]"
        }
        onMouseUp={handleMouseUp}
        value={value}
        onChange={handleChange}
        placeholder="Add text here... Try adding a sample text from the menu above or copy in your own text"
      />
    </div>
  );
};

export default TextBox;
