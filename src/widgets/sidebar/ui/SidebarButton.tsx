import { Button } from "@/shared/ui/Button";
import cn from "classnames";
import { DynamicIcon, type IconName } from 'lucide-react/dynamic';

type Props = {
  icon: IconName;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function SidebarButton({ icon, label, active = false, onClick }: Props) {
  return (
    <Button
      variant="ghost"
      size="lg"
      className={cn('lg:w-full h-auto flex flex-col items-center gap-2 text-secondary-foreground min-w-[100px] py-4')}
      onClick={onClick}
    >
      <DynamicIcon name={icon} className={cn("size-8 lg:size-10", active && "text-primary")} />
      <span>{label}</span>
    </Button>
  );
}

export default SidebarButton;
