import { useState, useEffect } from 'react';
import { Switch } from './ui/switch';

function DarkModeSwitch() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <label htmlFor="dark-mode">
        Dark mode
        <Switch onClick={toggleTheme} id="dark-mode" />
    </label>
    );
}

export default DarkModeSwitch;
