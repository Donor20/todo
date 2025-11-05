import type { Category } from "@/entities/category/model/category";

type Status = "todo" | "done";

type Task = {
  id: number;
  title: string;
  description: string;
  status: Status;
  dueDate: string | null;
  category: Category;
  expectedTimeMin?: number;
};

export type { Task, Status };
