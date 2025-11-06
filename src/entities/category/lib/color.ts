import type { CategoryColor } from "../model/types";

export const getCategoryColorVar = (color: CategoryColor) =>
  `--task-category-${color}`;
