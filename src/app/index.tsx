import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { applyTheme, getInitialTheme } from "@/shared/lib/theme";
import { App } from "./App";

// Initialize theme before React renders
applyTheme(getInitialTheme());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
