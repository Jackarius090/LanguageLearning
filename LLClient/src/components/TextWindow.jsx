import HighlightedText from "@/components/HighlightedText";
import { TextBox } from "@/components/TextBox";
import { useState } from "react";

export default function TextWindow() {
  const [languageCode, setLanguageCode] = useState("");
  const [highlightedText, setHighlightedText] = useState("");
  const [translation, setTranslation] = useState({
    translation: "",
    loading: false,
    firstTime: true,
  }); // Holds the translated text and loading state

  return (
    <div className="flex mb-4 mx-1 md:mx-6 lg:mx-16 xl:mx-24">
      <div className="flex w-full pt-5 md:p-5">
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
      </div>
    </div>
  );
}
