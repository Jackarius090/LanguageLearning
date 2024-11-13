import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import HighlightedText from "@/components/HighlightedText";
import GptWindow from "./GptWindow";

export default function TextWindow({ setText, text }) {
  const [language, setLanguage] = useState(""); // Holds the translated text
  const [highlightedText, setHighlightedText] = useState(
    "Highlight a word to see its definition!"
  );
  const [translation, setTranslation] = useState(""); // Holds the translated text

  return (
    <div className="flex pt-4 mb-4 h-screen border-2">
      <div className="flex size-full pt-5 md:p-5">
        <Textarea
          setLanguage={setLanguage}
          language={language}
          setHighlightedText={setHighlightedText}
          setTranslation={setTranslation}
          text={text}
          setText={setText}
        />
        {/* <div className="flex-col"> */}
        <HighlightedText
          highlightedText={highlightedText}
          translation={translation}
        />
        
        {/* </div> */}
      </div>
    </div>
  );
}
