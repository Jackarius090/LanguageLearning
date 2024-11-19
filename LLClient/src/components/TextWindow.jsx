import HighlightedText from "@/components/HighlightedText";
import TextBox from "@/components/TextBox";
import { useState } from "react";

export default function TextWindow() {
  const [languageCode, setLanguageCode] = useState(""); // Holds the translated text
  const [highlightedText, setHighlightedText] = useState(
    "Highlight a word to see its definition!"
  );
  const [translation, setTranslation] = useState(""); // Holds the translated text

  return (
    <div className="flex pt-4 mb-4 h-screen border-2">
      <div className="flex size-full pt-5 md:p-5">
        <TextBox
          setLanguageCode={setLanguageCode}
          languageCode={languageCode}
          setHighlightedText={setHighlightedText}
          setTranslation={setTranslation}
        />
        <HighlightedText
          highlightedText={highlightedText}
          translation={translation}
        />

        {/* </div> */}
      </div>
    </div>
  );
}
