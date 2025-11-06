import { Card, CardContent, CardHeader } from "@/shared/ui/Card";
import { Bar, BarChart, XAxis } from "recharts";

// TODO: calc
const data = [
  { name: "6AM", value: 10 },
  { name: "8", value: 6 },
  { name: "10", value: 2 },
  { name: "12", value: 0 },
  { name: "14", value: 1 },
  { name: "18", value: 3 },
  { name: "20", value: 8 },
  { name: "22", value: 4 },
];

// TODO: add tooltip
function TaskActivity() {
  return (
    <Card variant="secondary" className="flex-1 flex min-h-50 max-h-60">
      <CardHeader>Activity</CardHeader>
      <CardContent className="flex-1 flex flex-col min-h-0">
        <BarChart responsive data={data} className="h-full">
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            className="text-sm"
          />
          <Bar dataKey="value" className="fill-primary" radius={8} />
        </BarChart>
      </CardContent>
    </Card>
  );
}

export default TaskActivity;
