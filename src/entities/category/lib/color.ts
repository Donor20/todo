import type { CategoryColor } from "../model/category";

export const getCategoryColorVar = (color: CategoryColor) =>
  `--task-category-${color}`;
