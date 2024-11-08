import { useState, useEffect } from "react";
import { Switch } from "./ui/switch";

function DarkModeSwitch() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="dark-mode">
        <span className="text-xs sm:text-sm md:text-md lg:text-lg">
          Dark mode
        </span>
        <Switch onClick={toggleTheme} id="dark-mode" />
      </label>
    </div>
  );
}

export default DarkModeSwitch;
