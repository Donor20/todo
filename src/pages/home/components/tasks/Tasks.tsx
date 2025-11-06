import { getTasks, updateTaskStatus } from "@/entities/task/model/api";
import type { Status, Task } from "@/entities/task/model/types";
import TaskLine from "@/entities/task/ui/TaskLine";
import Tabs from "@/shared/ui/Tabs";
import { Separator } from "@radix-ui/react-separator";
import { useState, useEffect } from "react";

const filterOptions = [
  { label: "All", value: "All" },
  { label: "Today", value: "Today" },
  { label: "Week", value: "Week" },
  { label: "Completed", value: "Completed" },
];

function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterValue, setFilterValue] = useState<string>("All");

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const onStatusChange = async (id: Task["id"], status: Status) => {
    const next = await updateTaskStatus(id, status);
    setTasks(next);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Filters */}
      <Tabs
        className="flex items-center gap-2 pb-2"
        items={filterOptions}
        value={filterValue}
        onChange={setFilterValue}
      />
      <Separator />
      {/* Task list */}
      <div className="min-h-0 flex-1 overflow-auto pr-2 py-2">
        <div className="flex flex-col gap-3">
          {tasks.map((task) => (
            <TaskLine
              key={task.id}
              task={task}
              onStatusChange={(status) => onStatusChange(task.id, status)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tasks;
