import { useEffect, useState } from "react";

export type Theme = "cyber" | "ocean";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored === "cyber" || stored === "ocean") return stored;
    return "cyber";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("cyber", "ocean", "dark", "light");
    root.classList.add(theme, "dark"); // keep "dark" for Tailwind dark: variants
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "cyber" ? "ocean" : "cyber"));

  return { theme, toggle };
}
