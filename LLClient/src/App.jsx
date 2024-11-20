// TODO Add GPT function
// TODO fix nav bar in small screens
// TODO Add acessibility features
// TODO useReducer
// TODO colorful dark mode
// TODO look at SVG for logo
// TODO change colors of themes
// TODO pronunciation sound clips

import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import TextWindow from "./components/TextWindow";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="size-full min-h-screen text-primary">
      <NavBar className="flex flex-wrap" />
      <Banner />
      <TextWindow />
      <Toaster />
    </div>
  );
}

export default App;
