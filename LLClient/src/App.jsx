// TODO Add GPT function
// TODO Add acessibility features
// TODO useReducer
// TODO Add user login - https://workos.com/user-management
// TODO Add ANKI codes
// TODO Add mute button

import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import TextWindow from "./components/TextWindow";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

function App() {
  const { toast } = useToast();

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;

    if (isTouchDevice) {
      toast({
        variant: "destructive",
        title: "Touch Screen Device Detected",
        description:
          "This app requires a mouse to highlight text. Please use a computer to try out this website.",
        duration: Infinity,
      });
    }
  }, [toast]);

  return (
    <div className="size-full min-h-screen">
      <NavBar className="flex flex-wrap" />
      <Banner />
      <TextWindow />
      <Toaster />
    </div>
  );
}

export default App;
