import { getTaskCategoryCountStat } from "@/entities/task/model/api";
import type { TaskCategoryCount } from "@/entities/task/model/types";
import { Card, CardContent, CardHeader } from "@/shared/ui/Card";
import { useEffect, useMemo, useState } from "react";
import { PieChart, Pie, Legend } from "recharts";
import { categoryStore } from "@/entities/category/model/store";

// TODO: add tooltip
function TaskCategories() {
  const [taskCategoryCountStat, setTaskCategoryCountStat] = useState<
    TaskCategoryCount[]
  >([]);

  useEffect(() => {
    getTaskCategoryCountStat().then(setTaskCategoryCountStat);
  }, []);

  const data = useMemo(() => {
    return taskCategoryCountStat.reduce(
      (list, stat) => {
        const category = categoryStore.getById(stat.categoryId);
        const colorVar = categoryStore.getColorVarById(stat.categoryId);

        list.push({
          name: category?.title,
          value: stat.count,
          fill: `var(${colorVar})`,
        });

        return list;
      },
      [] as Record<string, unknown>[]
    );
  }, [taskCategoryCountStat]);

  return (
    <Card variant="secondary">
      <CardHeader>Categories</CardHeader>
      <CardContent>
        <PieChart width={272} height={110}>
          <Pie
            data={data}
            cx="56"
            cy="50%"
            innerRadius="60%"
            outerRadius="100%"
          >
            <Legend
              iconSize={8}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={{
                top: "50%",
                left: "50%",
                transform: "translate(0, -50%)",
                fontSize: "14px",
                lineHeight: "28px",
              }}
              iconType="circle"
            />
          </Pie>
        </PieChart>
      </CardContent>
    </Card>
  );
}

export default TaskCategories;
