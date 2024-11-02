import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"

const Textarea = React.forwardRef(({ className, setHighlightedText, highlightedText, setTranslation, text, setText, ...props }, ref) => {
  const apiKey = import.meta.env.VITE_GOOGLE_CLOUD_API_KEY;;

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
        setTranslation(data.data.translations[0].translatedText);  // Get the translated text
      } else {
        setTranslation('Error translating text');
      }
    } catch (error) {
      console.error('Error with translation API:', error);
      setTranslation('Failed to translate');
    }
  };

const handleClearClick = () => {
  setText("")
}

  return (
    <div className="h-full flex flex-col place-items-center">
      <Button className="m-3 w-4/5" variant="outline" onClick={handleClearClick}>Clear textbox</Button>
      <textarea
        spellCheck={false}
        onMouseUp={handleMouseUp}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add text here..."
        className={cn(
          "size-full text-lg rounded-md border border-input bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
