import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import { useState } from "react";


const Textarea = React.forwardRef(({ className, setHighlightedText, highlightedText, setTranslation, ...props }, ref) => {
  const apiKey = import.meta.env.VITE_GOOGLE_CLOUD_API_KEY;;
  const placeholderText = "Sønderborg er en lille by i Sønderjylland. Den er ikke særlig stor, men hyggelig. I en gade i Sønderborg står der et stort, gammelt, rødt hus. Der bor Morten sammen med sin gode ven Thomas. De to er flyttet ind i lejligheden i august, lige før det nye semester begyndte. I deres hus bor der også nogle andre personer. På den første etage bor der en matematiklærer med sin kone og deres to småbørn. Påanden etage bor en gammel dame, der engang har arbejdet som frisør. Hun er meget sød og har tit besøg af hendes børnebørn. De kommer gerne forbi hos hende for at høre spændende historier fra den tid mormor var ung og for at fånoget af hendes lækre kage. Morten og Thomas har en hyggelig lejlighed. I køkkenet stå r der et bord og fire stole. Der sidder de tit sammen med deres venner og spiser. Morten er nemlig meget godt til at lave mad. Thomas kan det ikke så godt, så vasker han alltid op."
  

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


const [text, setText] = useState('')

const handleDanishClick = () => {
  setText(placeholderText)
  }

const handleClearClick = () => {
  setText("")
}

  return (
    <div className="h-full flex flex-col place-items-center">
      <Button className="m-3 text-wrap w-4/5" onClick={handleDanishClick} variant="outline">Add sample Danish text</Button>
      <Button className="m-3 w-4/5" variant="outline" onClick={handleClearClick}>Clear textbox</Button>
      <textarea
        onMouseUp={handleMouseUp}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add text here..."
        className={cn(
          "size-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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
