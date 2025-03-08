"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      onClick={toggleTheme}
      className="cursor-pointer rounded-md p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5" /> // Increased size
      ) : (
        <MoonIcon className="h-5 w-5" /> // Increased size
      )}
    </div>
  );
}
