import * as React from "react";
import { Button } from "@/components/ui/button";
import { translateText } from "@/lib/translateFunction";
import { getLanguageName } from "@/lib/utils";
import { useTextStore } from "@/lib/textStore";
import { Textarea } from "./ui/textarea";

const TextBox = ({
  setHighlightedText,
  languageCode,
  setLanguageCode,
  setTranslation,
  ...props
}) => {
  const { setValue, value } = useTextStore();

  const handleMouseUp = () => {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      setHighlightedText(selectedText);
      handleTranslate(selectedText);
    }
  };

  const handleTranslate = async (TexttoTranslate) => {
    try {
      const { translatedText, detectedLanguage } = await translateText(
        TexttoTranslate
      );
      setTranslation(translatedText);
      setLanguageCode(detectedLanguage);
      console.log(detectedLanguage);
    } catch (error) {
      setTranslation("Failed to translate");
    }
  };
  

  const language = getLanguageName(languageCode);

  return (
    <div className="size-full pl-2 w-9/12 max-w-74ch flex flex-col place-items-center place-content-center">
      <Button
        className="m-3 w-4/5"
        variant="outline"
        onClick={() => setValue("")}
      >
        Clear textbox
      </Button>
      <p>Language: {language}</p>

      <Textarea
        spellCheck={false}
        onMouseUp={handleMouseUp}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add text here..."
        className={
          "text-xs sm:text-sm md:text-md lg:text-lg size-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        }
      />
    </div>
  );
};

export default TextBox;
