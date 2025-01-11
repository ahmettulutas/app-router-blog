"use client";

import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { cn } from "@/utils/tw-utils";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  return (
    <button
      type="button"
      onClick={() => setIsDarkMode((d) => !d)}
      aria-label="Toggle dark mode"
      className={cn(
        "relative z-[2] flex items-center justify-between gap-1 h-10 px-2 rounded-full shadow-md transition-all duration-300 ease-in-out",
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"
      )}
    >
      {isDarkMode ? (
        <div className="relative flex items-center justify-center h-full z-[1] ">
          <MoonIcon className="w-5 h-5 text-blue-400" />
          <p className="text-xs font-medium">Dark</p>
        </div>
      ) : (
        <div className="relative flex items-center justify-center h-full z-[1]">
          <SunIcon className="w-5 h-5 text-yellow-500" />
          <p className="text-xs font-medium">Light</p>
        </div>
      )}
    </button>
  );
};

export default DarkModeToggle;
