import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function RepairForm() {
  // REQUIRED KEYS: "name" and "serviceNumber"
  const [name, setName] = useLocalStorage("name", "");
  const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", "");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Repair Company Form</h2>

      <form>
        {/* NAME FIELD */}
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        {/* SERVICE NUMBER FIELD */}
        <div style={{ marginBottom: "10px" }}>
          <label>Service Number:</label>
          <br />
          <input
            type="text"
            value={serviceNumber}
            onChange={(e) => setServiceNumber(e.target.value)}
            placeholder="Enter service number"
          />
        </div>
      </form>
    </div>
  );
}

export default RepairForm;