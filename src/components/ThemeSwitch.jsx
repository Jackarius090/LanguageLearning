import { useState, useEffect } from "react";
import { Switch } from "./ui/Switch";

function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const [colorMode, setColorMode] = useState(
    JSON.parse(localStorage.getItem("colorMode")) || false
  );

  useEffect(() => {
    // Remove existing theme classes first
    document.documentElement.classList.remove("light", "dark", "colorful");
    // Add the selected theme as a class
    if (colorMode == true) {
      document.documentElement.classList.add("colorful");
    } else if (darkMode === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("colorMode", colorMode);
  }, [darkMode, colorMode]);

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <label htmlFor="dark-mode">
          <span className="text-xs sm:text-sm md:text-md lg:text-lg">
            Dark mode
          </span>
        </label>
        <Switch
          id="dark-mode-switch"
          storageKey="darkMode"
          onClick={() => setDarkMode(!darkMode)}
        />
      </div>
      <div className="flex items-center space-x-2">
        <label htmlFor="colorful-mode">
          <span className="text-xs sm:text-sm md:text-md lg:text-lg">
            Colorful mode
          </span>
        </label>
        <Switch
          id="colorful-mode-switch"
          storageKey="colorMode"
          onClick={() => setColorMode(!colorMode)}
        />
      </div>
    </div>
  );
}

export default ThemeSwitch;
