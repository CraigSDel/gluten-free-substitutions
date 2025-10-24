import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { RecipeProvider } from "../contexts/RecipeContext";
import { IngredientProvider } from "../contexts/IngredientContext";
import { UIProvider } from "../contexts/UIContext";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <UIProvider>
      <IngredientProvider>
        <RecipeProvider>{children}</RecipeProvider>
      </IngredientProvider>
    </UIProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
