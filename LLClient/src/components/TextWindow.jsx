import HighlightedText from "@/components/HighlightedText";
import { TextBox } from "@/components/TextBox";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";

export default function TextWindow() {
  const [languageCode, setLanguageCode] = useState("");
  const [highlightedText, setHighlightedText] = useState("");
  const [translation, setTranslation] = useState({
    translation: "",
    loading: false,
    firstTime: true,
  }); // Holds the translated text and loading state

  const [targetLang, setTargetLang] = useState("en");

  return (
    <div className="flex mb-4 mx-1 md:mx-6 lg:mx-16 xl:mx-24">
      <div className="flex w-full pt-5 md:p-5">
        <TextBox
          setLanguageCode={setLanguageCode}
          languageCode={languageCode}
          setHighlightedText={setHighlightedText}
          setTranslation={setTranslation}
          targetLang={targetLang}
        />
        <div>
          <div className="grid grid-cols-3 items-center pb-5">
            <Label htmlFor="targetLang">Set target language</Label>
            <Select
              id="targetLang"
              value={targetLang}
              onValueChange={setTargetLang}
            >
              <SelectTrigger className="col-span-2">
                <SelectValue placeholder="Select target language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="da">Danish</SelectItem>
                <SelectItem value="it">Italian</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="zh">Mandarin</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <HighlightedText
            highlightedText={highlightedText}
            translation={translation}
          />
        </div>
      </div>
    </div>
  );
}
