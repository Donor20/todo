import { Card, CardContent, CardHeader } from "@/shared/ui/Card";

function TaskActivity() {
  return (
    <Card variant="secondary" className="flex-1 flex min-h-50 max-h-60">
      <CardHeader>Activity</CardHeader>
      <CardContent className="flex-1 flex flex-col min-h-0">
        <div className="grid grid-cols-12 items-end gap-2 flex-1 min-h-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="bg-primary rounded" style={{ height: `${10 + ((i * 7) % 70)}%` }} />
          ))}
        </div>
        <div className="mt-2 grid grid-cols-12 text-xs text-muted-foreground">
          {['6AM','8','10','12','1PM','2','4','6','8','10','12','18'].map((t, i) => (
            <div key={i} className="text-center">{t}</div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default TaskActivity;