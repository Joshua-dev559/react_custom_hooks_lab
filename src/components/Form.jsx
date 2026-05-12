import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Form() {
  const [name, setName] = useLocalStorage("name", "old value");
  const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", "");

  return (
    <div>
      <h2>Service Form</h2>

      <form>
        <div>
          <label>Name:</label>
          <input
            data-testid="name"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Service Number:</label>
          <input
            data-testid="serviceNumber"
            value={serviceNumber || ""}
            onChange={(e) => setServiceNumber(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}