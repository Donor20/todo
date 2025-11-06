type CategoryColor = "blue" | "green" | "red";

type Category = {
  id: number;
  title: string;
  color: CategoryColor;
};

export type { CategoryColor, Category };
