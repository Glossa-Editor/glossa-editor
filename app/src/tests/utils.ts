import { afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";
import type { ReactElement } from "react";

afterEach(() => {
  cleanup();
});

export function customRender(ui: ReactElement, options = {}) {
  return render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
