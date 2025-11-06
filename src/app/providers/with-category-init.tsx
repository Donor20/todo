import { useEffect } from "react";
import { categoryStore } from "@/entities/category/model/store";
import { observer } from "mobx-react-lite";

export const WithCategoryInit = observer(
  ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
      categoryStore.fetch();
    }, []);

    if (categoryStore.isLoading && categoryStore.data.length === 0) {
      // TODO: loading
      return null;
    }

    if (categoryStore.error) {
      // TODO: error
      return null;
    }

    return <>{children}</>;
  }
);
