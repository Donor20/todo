import { makeAutoObservable, runInAction } from "mobx";
import type { Category } from "./types";
import { getCategories } from "./api";
import { getCategoryColorVar } from "../lib/color";

class CategoryStore {
  data: Category[] = [];
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetch() {
    this.isLoading = true;
    this.error = null;
    try {
      const data = await getCategories();
      runInAction(() => {
        this.data = data;
      });
    } catch (e) {
      runInAction(() => {
        this.error = e instanceof Error ? e.message : "Unknown error";
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  get mapById(): Record<string, Category> {
    return this.data.reduce<Record<string, Category>>((acc, category) => {
      acc[category.id] = category;
      return acc;
    }, {});
  }

  getById(id: Category["id"]): Category | undefined {
    return this.mapById[id];
  }

  getColorVarById(id: Category["id"]): string {
    return getCategoryColorVar(this.mapById[id].color);
  }
}

export const categoryStore = new CategoryStore();
