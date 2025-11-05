import {
  applyTheme,
  getInitialTheme,
  toggleTheme,
  type Theme,
} from "@/shared/lib/theme";
import { Card } from "@/shared/ui/Card";
import SidebarButton from "@/widgets/sidebar/ui/SidebarButton";
import { useEffect, useState } from "react";

function Sidebar() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const initial = getInitialTheme();
    applyTheme(initial);
    setTheme(initial);
  }, []);

  return (
    <aside className="lg:w-32 flex flex-col lg:mb-6">
      <Card
        variant="secondary"
        className="flex-1 flex min-h-0 max-h-150 pt-0 pb-0"
      >
        <nav className="h-full flex lg:flex-col lg:gap-2 overflow-x-auto lg:my-2 lg:justify-between">
          <SidebarButton icon="table-2" label="Tasks" active={true} />
          <SidebarButton icon="bar-chart-3" label="Statistics" />
          <SidebarButton icon="clock-8" label="Pomodoro" />
          <SidebarButton icon="settings" label="Settings" />
          {theme === "light" ? (
            <SidebarButton
              onClick={() => setTheme(toggleTheme())}
              icon="moon"
              label="Dark theme"
            />
          ) : (
            <SidebarButton
              onClick={() => setTheme(toggleTheme())}
              icon="sun"
              label="Light theme"
            />
          )}
        </nav>
      </Card>
    </aside>
  );
}

export { Sidebar };
