import { Card, CardContent } from "@/shared/ui/Card";

function TaskCompletion() {
  // TODO: calc
  const completedPercent = 80;

  return (
    <Card variant="secondary">
      <CardContent className="flex items-center justify-between py-4">
        <div className="text-5xl font-semibold">{completedPercent}%</div>
        <div className="text-muted-foreground">Tasks completed</div>
      </CardContent>
    </Card>
  );
}

export default TaskCompletion;
