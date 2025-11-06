import { Checkbox } from "@/shared/ui/Checkbox";
import { Label } from "@/shared/ui/Label";
import type { Task, Status } from "@/entities/task/model/types";
import { Card, CardContent } from "@/shared/ui/Card";
import { Progress } from "@/shared/ui/Progress";
import { Clock3 } from "lucide-react";
import { Badge } from "@/shared/ui/Badge";
import { categoryStore } from "@/entities/category/model/store";

type Props = {
  task: Task;
  onStatusChange: (status: Status) => void;
};

function TaskLine({ task, onStatusChange }: Props) {
  const checked = task.status === "done";
  const category = categoryStore.getById(task.categoryId)!;
  const colorVar = categoryStore.getColorVarById(task.categoryId);

  return (
    <Label>
      <Card variant="border" className="w-full">
        <CardContent className="flex items-start gap-3">
          <Checkbox
            id="toggle-2"
            checked={checked}
            onCheckedChange={(checked) =>
              onStatusChange(checked ? "done" : "todo")
            }
            className="mt-px"
          />
          <div className="flex-1">
            <div className="flex items-start gap-3">
              <p className="font-medium text-xl leading-none flex-1">
                {task.title}
              </p>
              {typeof task.expectedTimeMin === "number" && (
                <span className="inline-flex items-center gap-1 text-muted-foreground text-sm">
                  <Clock3 className="size-4" />
                  <span>{task.expectedTimeMin}m</span>
                </span>
              )}
            </div>
            {task.description && (
              <p className="text-muted-foreground text-sm">
                {task.description}
              </p>
            )}
            <div
              className="flex items-center gap-4 pt-2"
              style={{ "--primary": `var(${colorVar})` } as React.CSSProperties}
            >
              <Badge variant="ghost">{category.title}</Badge>
              <Progress value={20} className="flex-1" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Label>
  );
}

export default TaskLine;
