import * as React from "react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Textarea = React.forwardRef(({ className, setHighlightedText, highlightedText, setTranslation, ...props }, ref) => {
    const apiKey = process.env.REACT_APP_GOOGLE_CLOUD_API_KEY;

    const handleMouseUp = () => {
      const selectedText = window.getSelection().toString();
      if (selectedText) {
        setHighlightedText(selectedText);  // Update the highlightedText state
        translateText(selectedText);       // Pass the selected text for translation
      }
    };

    const translateText = async (TexttoTranslate) => {
      try {
        const response = await fetch(
          `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              q: TexttoTranslate,      // Text to translate
              target: "en", // Target language code
            }),
          }
        );
  
        const data = await response.json();
        if (data && data.data && data.data.translations) {
          console.log(data.data.translations[0].translatedText)
          setTranslation(data.data.translations[0].translatedText);  // Get the translated text
        } else {
          setTranslation('Error translating text');
        }
      } catch (error) {
        console.error('Error with translation API:', error);
        setTranslation('Failed to translate');
      }
    };

  

  return (
    <textarea
      onMouseUp={handleMouseUp}
      placeholder="Insert text here:"
      className={cn(
        "size-full min-h-max rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
