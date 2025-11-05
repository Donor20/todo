import React from "react";
import { Sidebar } from "@/widgets/sidebar/ui/Sidebar";
import cn from "classnames";
import { Plus, ShellIcon } from "lucide-react";
import { Button } from "@/shared/ui/Button";

type Tab = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

type Props = {
  tabs?: Tab[];
  className?: string;
  children: React.ReactNode;
};

function MainLayout({ className, children }: Props) {
  return (
    <div className="h-screen lg:pt-6 lg:px-8 max-w-[1600px] mx-auto">
      <div
        className={cn(
          "h-full flex flex-col bg-card text-card-foreground lg:rounded-t-xl lg:pb-0 shadow-xs overflow-none",
          className
        )}
      >
        {/* Header */}
        <div className="w-full">
          <div className="mx-4 lg:mx-10 flex items-center justify-between py-6">
            <div className="flex gap-2 items-center text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-pink-500 from-50% to-primary to-90% bg-clip-text text-transparent">
              <ShellIcon className="size-8 text-pink-500" />
              <span>Focus</span>
            </div>
            <Button size="lg">
              <Plus className="size-6 stroke-3" />
              <div className="text-base font-bold">Add task</div>
            </Button>
          </div>
        </div>

        {/* Body */}
        <div className="w-full flex flex-col lg:flex-row gap-8 px-4 lg:px-10 flex-1 overflow-hidden">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
