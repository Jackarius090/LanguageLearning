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
  const [audioSrc, setAudioSrc] = useState("");

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
          setAudioSrc={setAudioSrc}
          highlightedText={highlightedText}
        />
        <div>
          <div className="flex row pb-10">
            <Label htmlFor="targetLang" className="text-sm md:text-md">
              Set target language:
            </Label>
            <div className="w-75 px-2">
              <Select
                id="targetLang"
                value={targetLang}
                onValueChange={setTargetLang}
              >
                <SelectTrigger className="">
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
          </div>
          <HighlightedText
            highlightedText={highlightedText}
            translation={translation}
            targetLang={targetLang}
            audioSrc={audioSrc}
          />
        </div>
      </div>
    </div>
  );
}
