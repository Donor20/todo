import { Card, CardContent, CardHeader } from "@/shared/ui/Card";

function TaskCategories() {
  const completedPercent = 80;

  return (
    <Card variant="secondary">
      <CardHeader>Categories</CardHeader>
      <CardContent>
        <div className="flex items-center gap-6">
          <div className="relative size-28">
            <div className="absolute inset-0 rounded-full bg-primary/80 [clip-path:polygon(50%_50%,50%_0,100%_0,100%_100%)]" />
            <div className="absolute inset-0 rounded-full bg-emerald-500/80 [clip-path:polygon(50%_50%,50%_0,0_0,0_60%)]" />
            <div className="absolute inset-0 rounded-full bg-indigo-500/80" />
          </div>
          <div className="grid gap-2 text-sm">
            <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-primary" /> Work</div>
            <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-indigo-500" /> Personal</div>
            <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-emerald-500" /> Health</div>
          </div>
        </div>
        <div className="mt-4 rounded-md bg-accent p-3 text-sm">
        You're {completedPercent > 0 ? `${Math.min(100, completedPercent)}%` : 'a bit'} closer to your goal than yesterday!
        </div>
      </CardContent>
    </Card>
  );
}

export default TaskCategories;