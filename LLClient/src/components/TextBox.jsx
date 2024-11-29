import * as React from "react";
import { Button } from "@/components/ui/button";
import { translateText } from "@/lib/translateFunction";
import { getLanguageName } from "@/lib/utils";
import { useTextStore } from "@/lib/textStore";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FormatTextBox } from "./FormatTextBox";
import { useTextSizeStore } from "@/lib/textSizeStore";

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
          title: `${wordCount} words! That's too many!`,
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
  const textSize = useTextSizeStore((state) => state.value);

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
      <p className="text-center text-xs sm:text-sm md:text-md">
        Language: {language}
      </p>

      <Textarea
        className={`text-${textSize}`}
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
        placeholder="Add text here... Try adding a sample text from the menu above"
      />
    </div>
  );
};

export default TextBox;
