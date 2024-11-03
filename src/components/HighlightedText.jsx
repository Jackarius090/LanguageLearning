import React from "react";


const HighlightedText = ({ highlightedText, translation }) => {
  return (
    <>
      <div className="relative">
        <h1 className="text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl absolute -top-9">Definition:</h1>
      </div>
      <div className="pt-2 border-2 rounded-md text-xs sm:text-sm md:text-md">
        <p>Original: {highlightedText ? highlightedText : "No text highlighted yet."}</p>
        <p className="pt-3">Translation: {translation ? translation : 'No translation yet.'}</p>
      </div>
    </>
  );
};

export default HighlightedText;