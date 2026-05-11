import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

// GLOBAL MOCK DATA
global.baseTasks = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Finish React project", completed: false },
];


// FETCH MOCK HELPER
global.setFetchResponse = (val) => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(val),
      ok: true,
      status: 200,
    })
  );
};

// CLEANUP AFTER EACH TEST
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});