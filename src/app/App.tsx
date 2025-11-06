import { WithCategoryInit } from "@/app/providers/with-category-init";
import Home from "@/pages/home/Home";

export const App = () => (
  <WithCategoryInit>
    <Home />
  </WithCategoryInit>
);
