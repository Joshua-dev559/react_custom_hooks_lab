import { fireEvent, render, renderHook, act } from "@testing-library/react";
import useLocalStorage from "../../hooks/useLocalStorage";
import App from "../../components/App";

// Mock localStorage
class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

beforeEach(() => {
  localStorage.clear();
});

describe("Custom Hooks", () => {

  test("returns an initial state and a setter function", () => {
    const { result } = renderHook(() =>
      useLocalStorage("test", "value")
    );

    expect(result.current).toMatchObject([
      "value",
      expect.any(Function)
    ]);
  });

  test("has an initial value of null if no value is passed in", () => {
    const { result } = renderHook(() =>
      useLocalStorage("test")
    );

    expect(result.current).toMatchObject([
      null,
      expect.any(Function)
    ]);
  });

  test("saves value in localStorage when state updates", async () => {
    const { result } = renderHook(() =>
      useLocalStorage("name", "old value")
    );

    const [, setState] = result.current;

    act(() => {
      setState("New Value");
    });

    expect(localStorage.getItem("name")).toBe("New Value");
  });

  test("updates input in DOM and saves to localStorage", () => {
    const { getByTestId } = render(<App />);

    const input = getByTestId("name-input");

    fireEvent.change(input, {
      target: { value: "New Value" }
    });

    expect(localStorage.getItem("name")).toBe("New Value");
  });
});