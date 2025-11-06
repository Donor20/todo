import { categoriesDb } from "@/entities/category/model/api";
import type { Task, Status, TaskCategoryCount } from "./types";
import type { Category } from "@/entities/category/model/types";

let tasksDb: Task[] = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Milk, bread, cheese, vegetables",
    status: "todo",
    dueDate: "2025-10-03",
    categoryId: categoriesDb[0].id,
  },
  {
    id: 2,
    title: "Do workout",
    description: "Run 5 km and stretching",
    status: "done",
    dueDate: "2025-10-01",
    categoryId: categoriesDb[1].id,
    expectedTimeMin: 45,
  },
  {
    id: 3,
    title: "Finish work task",
    description: "Complete API integration",
    status: "done",
    dueDate: "2025-10-05",
    categoryId: categoriesDb[2].id,
    expectedTimeMin: 120,
  },
  {
    id: 4,
    title: "Call parents",
    description: "",
    status: "done",
    dueDate: null,
    categoryId: categoriesDb[0].id,
  },
  {
    id: 5,
    title: "Buy groceries",
    description: "Milk, bread, cheese, vegetables",
    status: "todo",
    dueDate: "2025-10-03",
    categoryId: categoriesDb[0].id,
  },
  {
    id: 6,
    title: "Do workout",
    description: "Run 5 km and stretching",
    status: "done",
    dueDate: "2025-10-01",
    categoryId: categoriesDb[1].id,
    expectedTimeMin: 50,
  },
  {
    id: 7,
    title: "Finish work task",
    description: "Complete API integration",
    status: "done",
    dueDate: "2025-10-05",
    categoryId: categoriesDb[2].id,
    expectedTimeMin: 90,
  },
  {
    id: 8,
    title: "Call parents",
    description: "",
    status: "done",
    dueDate: null,
    categoryId: categoriesDb[0].id,
  },
];

function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export async function getTasks(): Promise<Task[]> {
  await delay(200);

  return tasksDb;
}

export async function updateTaskStatus(
  id: Task["id"],
  status: Status
): Promise<Task[]> {
  tasksDb = tasksDb.map((task) =>
    task.id === id ? { ...task, status } : task
  );
  await delay(150);

  return tasksDb;
}

export async function updateTaskCategory(
  id: Task["id"],
  category: Category
): Promise<Task[]> {
  tasksDb = tasksDb.map((task) =>
    task.id === id ? { ...task, category } : task
  );
  await delay(150);

  return tasksDb;
}

export async function getTaskCategoryCountStat(): Promise<TaskCategoryCount[]> {
  await delay(200);

  const data: Record<Category["id"], TaskCategoryCount> = {};
  for (const task of tasksDb) {
    if (!data[task.categoryId])
      data[task.categoryId] = { categoryId: task.categoryId, count: 0 };
    data[task.categoryId].count++;
  }

  return Object.values(data);
}
