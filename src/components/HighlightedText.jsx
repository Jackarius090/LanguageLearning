import React from "react";

const HighlightedText = ({ highlightedText }) => {
  return (
    <>
      <div className="relative">
        <h3 className="text-2xl absolute -top-9">Definition:</h3>
      </div>
      <div>
        <p>{highlightedText ? highlightedText : "No text highlighted yet."}</p>
      </div>
    </>
  );
};

export default HighlightedText;