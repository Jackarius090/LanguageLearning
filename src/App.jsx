// TODO Add GPT function
// TODO fix nav bar in small screens
// TODO Add acessibility features
// TODO useReducer
// TODO colouful dark mode
// TODO look at SVG for logo

import { useState } from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import TextWindow from "./components/TextWindow";

function App() {
  return (
    <div className="size-full min-h-screen text-primary">
      <NavBar className="flex flex-wrap" />
      <Banner />
      <TextWindow />
    </div>
  );
}

export default App;
