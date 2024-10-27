import React from "react";
import { useState } from 'react';


const HighlightedText = ({ highlightedText, translation }) => {
  return (
    <>
      <div className="relative">
        <h3 className="text-2xl absolute -top-10">Definition:</h3>
      </div>
      <div className="pt-2">
        <p className="text-lg">Original: {highlightedText ? highlightedText : "No text highlighted yet."}</p>
        <p className="text-lg pt-3">Translation: {translation ? translation : 'No translation yet.'}</p>
      </div>
    </>
  );
};

export default HighlightedText;