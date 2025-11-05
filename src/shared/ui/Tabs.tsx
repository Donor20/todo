import { Button } from "@/shared/ui/Button";

type TabItem = {
  label: string;
  value?: string;
  active?: boolean; // backward compatibility fallback
  onClick?: () => void; // backward compatibility fallback
};

type Props = {
  items: TabItem[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

function Tabs({ items, value, onChange, className }: Props) {
  return (
    <div className={className ?? "flex items-center gap-3"}>
      {items.map((t) => {
        const itemValue = t.value ?? t.label;
        const isActive = value !== undefined ? value === itemValue : !!t.active;

        return (
          <Button
            key={itemValue}
            variant={isActive ? "secondary" : "ghost"}
            size="sm"
            onClick={onChange ? () => onChange(itemValue) : t.onClick}
            className={isActive ? "font-semibold" : ""}
          >
            {t.label}
          </Button>
        );
      })}
    </div>
  );
}

export default Tabs;
