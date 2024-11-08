// TODO Add GPT function

import { useState } from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import TextWindow from "./components/TextWindow";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="size-full min-h-screen text-primary">
      <NavBar className="flex flex-wrap" setText={setText} />
      <Banner />
      <TextWindow setText={setText} text={text} />
    </div>
  );
}

export default App;
