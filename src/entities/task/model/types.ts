import type { Category } from "@/entities/category/model/types";

type Status = "todo" | "done";

type Task = {
  id: number;
  title: string;
  description: string;
  status: Status;
  dueDate: string | null;
  categoryId: Category["id"];
  expectedTimeMin?: number;
};

type TaskCategoryCount = {
  categoryId: Category["id"];
  count: number;
};

export type { Task, Status, TaskCategoryCount };
