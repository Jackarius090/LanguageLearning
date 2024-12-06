import React from "react";
import GptWindow from "./GptWindow";

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

  return (
    <div className="flex-1 pl-2 pt-3">
      <div className="relative">
        <h1 className="text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl absolute -top-9">
          Definition:
        </h1>
      </div>
      <div className="pt-2 border border-input rounded-md bg-background px-3 py-2 text-xs sm:text-sm md:text-md">
        <p>
          Original:{" "}
          {highlightedText ? highlightedText : "No text highlighted yet."}
        </p>
        <TranslationTextToRender />
      </div>
      <GptWindow />
      <p>
        Add some text in the textbox, then highlight a word you don't understand
        to see a translation.
      </p>
    </div>
  );
};

export default HighlightedText;
