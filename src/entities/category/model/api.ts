import type { Category } from "./types";

export const categoriesDb: Category[] = [
  {
    id: 1,
    title: "Personal",
    color: "blue",
  },
  {
    id: 2,
    title: "Health",
    color: "green",
  },
  {
    id: 3,
    title: "Work",
    color: "red",
  },
];

function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export async function getCategories(): Promise<Category[]> {
  await delay(200);

  return categoriesDb;
}
