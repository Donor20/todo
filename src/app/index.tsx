import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "@/pages/home/Home.tsx";
import { applyTheme, getInitialTheme } from "@/shared/lib/theme";

// Initialize theme before React renders
applyTheme(getInitialTheme());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
