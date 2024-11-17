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
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.classList.toggle("colorful");
    localStorage.setItem("colorMode", colorMode);
  }, [colorMode]);

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
