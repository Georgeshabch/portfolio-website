"use client";

import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as Theme | null;
    console.log("Stored theme:", storedTheme);
  
    if (storedTheme === "dark") {
      console.log("Applying dark theme");
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else if (storedTheme === "light") {
      console.log("Applying light theme");
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      console.log("System preference: dark");
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      console.log("Defaulting to light theme");
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
      <button
        aria-label="Toggle theme"
        className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] text-blacks transition-all hover:scale-[1.15] active:scale-105 dark:bg-gray-50"
        onClick={toggleTheme}
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>
    </div>
  );
}