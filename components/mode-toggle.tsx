"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const commonClassName = "h-7 w-7 cursor-pointer rounded-md transition-colors";
  const sunClassName = `${commonClassName} hover:text-yellow-400 hover:bg-yellow-100 dark:hover:bg-yellow-900/30`;
  const moonClassName = `${commonClassName} hover:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30`;

  return (
    <div onClick={toggleTheme}>
      {theme === "dark" ? (
        <SunIcon className={sunClassName} />
      ) : (
        <MoonIcon className={moonClassName} />
      )}
    </div>
  );
}
