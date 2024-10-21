import React from "react";

const HighlightedText = ({ highlightedText }) => {
  return (
    <div>
      <h2>Highlighted Text</h2>
      <p>{highlightedText ? highlightedText : "No text highlighted yet."}</p>
    </div>
  );
};

export default HighlightedText;