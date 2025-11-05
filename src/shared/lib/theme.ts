export type Theme = "light" | "dark";

const THEME_KEY = "theme";

export function getStoredTheme(): Theme | null {
  const value = localStorage.getItem(THEME_KEY);
  if (value === "light" || value === "dark") return value;
  return null;
}

export function getSystemPrefersDark(): boolean {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export function getInitialTheme(): Theme {
  return getStoredTheme() ?? (getSystemPrefersDark() ? "dark" : "light");
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  localStorage.setItem(THEME_KEY, theme);
}

export function toggleTheme(): Theme {
  const next: Theme = document.documentElement.classList.contains("dark")
    ? "light"
    : "dark";
  applyTheme(next);
  return next;
}
