import * as React from "react";
import { Button } from "@/components/ui/button";
import { translateText } from "@/lib/translateFunction";
import { getLanguageName } from "@/lib/utils";
import { useTextStore } from "@/lib/textStore";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const TextBox = ({
  setHighlightedText,
  languageCode,
  setLanguageCode,
  setTranslation,
}) => {
  const { toast } = useToast();

  const { setValue, value } = useTextStore();

  const handleMouseUp = () => {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      const wordCount = selectedText.trim().split(/\s+/).length;
      if (wordCount <= 20) {
        setHighlightedText(selectedText);
        handleTranslate(selectedText);
      } else {
        toast({
          variant: "destructive",
          title: "Too many words!",
          description: "Please select less than 20 words at a time",
        });
        setHighlightedText(selectedText);
        setTranslation("Please select less than 20 words at a time");
      }
    }
  };

  const adjustHeight = (element) => {
    element.style.height = "300px";
    const newHeight = Math.max(300, element.scrollHeight);
    element.style.height = `${newHeight}px`;
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    adjustHeight(e.target);
  };

  React.useEffect(() => {
    const textarea = document.getElementById("textbox");
    if (textarea) {
      adjustHeight(textarea);
    }
  }, [value]);

  const handleTranslate = async (TexttoTranslate) => {
    try {
      const { translatedText, detectedLanguage } = await translateText(
        TexttoTranslate
      );
      setTranslation(translatedText);
      setLanguageCode(detectedLanguage);
    } catch (error) {
      if (error.message === "Text exceeds 20 words limit") {
        setTranslation("Please select less than 20 words at a time");
      } else {
        setTranslation("Failed to translate");
      }
      console.log(error);
    }
  };

  const language = getLanguageName(languageCode);

  return (
    <div className="w-9/12 max-w-74ch flex flex-col">
      <Button
        className="m-3 w-4/5 mx-auto"
        variant="outline"
        onClick={() => setValue("")}
      >
        Clear textbox
      </Button>
      <p className="text-center text-xs sm:text-sm md:text-md">
        Language: {language}
      </p>

      <Textarea
        id="textbox"
        spellCheck={false}
        style={{
          minHeight: "100vh",
          height: "auto",
          resize: "none",
          overflow: "hidden",
        }}
        onMouseUp={handleMouseUp}
        value={value}
        onChange={handleChange}
        placeholder="Add text here..."
      />
    </div>
  );
};

export default TextBox;
