import React from "react";
import { useState } from 'react';


const HighlightedText = ({ highlightedText, translation }) => {
  return (
    <>
      <div className="relative">
        <h3 className="text-2xl absolute -top-9">Definition:</h3>
      </div>
      <div>
        <p>{highlightedText ? highlightedText : "No text highlighted yet."}</p>
        <p>{translation ? translation : 'No translation yet.'}</p>
      </div>
    </>
  );
};

export default HighlightedText;