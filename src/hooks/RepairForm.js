import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function RepairForm() {
  const [name, setName] = useLocalStorage("name", "old value");
  const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", "");

  return (
    <div>
      <h2>Service Form</h2>

      <form>
        <div>
          <label>Name:</label>
          <input
            data-testid="name"   //  FIXED (was name-input)
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Service Number:</label>
          <input
            data-testid="serviceNumber" //  FIXED (was service-input)
            value={serviceNumber || ""}
            onChange={(e) => setServiceNumber(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default RepairForm;