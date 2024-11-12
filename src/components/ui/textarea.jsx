import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { translateText } from "@/lib/translateFunction";

const Textarea = React.forwardRef(
  (
    {
      className,
      setHighlightedText,
      language,
      setLanguage,
      setTranslation,
      text,
      setText,
      ...props
    },
    ref
  ) => {
    const apiKey = import.meta.env.VITE_GOOGLE_CLOUD_API_KEY;

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
          TexttoTranslate,
          apiKey
        );
        setTranslation(translatedText);
        setLanguage(detectedLanguage);
      } catch (error) {
        setTranslation("Failed to translate");
      }
    };

    return (
      <div className="size-full pl-2 w-9/12 max-w-74ch flex flex-col place-items-center place-content-center">
        <Button
          className="m-3 w-4/5"
          variant="outline"
          onClick={() => setText("")}
        >
          Clear textbox
        </Button>
        <p>Language: {language}</p>
        <textarea
          spellCheck={false}
          onMouseUp={handleMouseUp}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add text here..."
          className={cn(
            "text-xs sm:text-sm md:text-md lg:text-lg size-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
