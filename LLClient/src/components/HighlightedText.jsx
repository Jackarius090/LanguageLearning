import React, { useEffect, useState } from "react";
import GptWindow from "./GptWindow";
import { Play } from "lucide-react";
import { Button } from "./ui/button";
import { textToVoice } from "@/lib/textToVoiceFunction";
import { Label } from "@radix-ui/react-label";

const HighlightedText = ({ highlightedText, translation }) => {
  const TranslationTextToRender = () => {
    if (!translation.firstTime && !translation.translation) {
      return <p>loading...</p>;
    } else if (!translation.firstTime && translation.translation) {
      return <p>Translation: {translation.translation}</p>;
    } else {
      return <p>No translation yet</p>;
    }
  };

  const handlePlay = () => {
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.play();
    }
  };

  const [audioSrc, setAudioSrc] = useState("");

  useEffect(() => {
    const handleTextToVoice = async () => {
      if (!highlightedText) {
        return;
      }
      try {
        const { audioFile } = await textToVoice(highlightedText, "da");
        setAudioSrc(`data:audio/mp3;base64,${audioFile.audioFile}`);
      } catch (error) {
        console.error("Error processing audio:", error);
      }
    };
    handleTextToVoice();
  }, [highlightedText]);

  useEffect(() => {
    handlePlay();
  }, [audioSrc]);

  return (
    <div className="flex-1 pl-2 pt-3">
      <div className="relative">
        <h1 className="text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl absolute -top-9">
          Definition:
        </h1>
      </div>
      <div className="flex justify-center md:gap-8 flex-col sm:flex-row pt-2 border border-input rounded-md bg-background px-3 py-2 text-xs sm:text-sm md:text-md">
        <div className="place-content-center p-1">
          <Label htmlFor="playbutton">Play audio!</Label>
          <Button
            onClick={handlePlay}
            id="playbutton"
            variant="outline"
            size="icon"
            disabled={!highlightedText}
            className="m-1"
          >
            <Play />
          </Button>
        </div>
        <div className="flex flex-col place-content-center">
          <p>
            Original:{" "}
            {highlightedText ? highlightedText : "No text highlighted yet."}
          </p>
          <TranslationTextToRender />
        </div>
      </div>
      <GptWindow />
      <p className="mt-4 text-sm text-gray-600">
        Add some text in the textbox, then highlight a word you don't understand
        to see a translation.
      </p>
    </div>
  );
};

export default HighlightedText;
