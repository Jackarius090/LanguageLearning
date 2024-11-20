import { useState, useEffect } from "react";
import { Switch } from "./ui/Switch";

function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    return savedTheme;
  });

  const [colorMode, setColorMode] = useState(() => {
    const savedColorMode = localStorage.getItem("colorMode") === "true";
    return savedColorMode;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.classList.toggle("colorful", colorMode);
    localStorage.setItem("colorMode", colorMode.toString());
  }, [colorMode]);

  return (
    <div className="flex flex-col place-items-end space-y-4 mr-4">
      <div className="flex space-x-2">
        <label htmlFor="dark-mode">
          <span className="text-xs sm:text-sm md:text-md lg:text-lg">
            Dark mode
          </span>
        </label>
        <Switch
          id="dark-mode-switch"
          checked={darkMode}
          storageKey="darkMode"
          onCheckedChange={() => setDarkMode(!darkMode)}
        />
      </div>
      <div className="flex space-x-2">
        <label htmlFor="colorful-mode">
          <span className="text-nowrap text-xs sm:text-sm md:text-md lg:text-lg">
            Colorful mode
          </span>
        </label>
        <Switch
          id="colorful-mode-switch"
          checked={colorMode}
          storageKey="colorMode"
          onCheckedChange={() => setColorMode(!colorMode)}
        />
      </div>
    </div>
  );
}

export default ThemeSwitch;
