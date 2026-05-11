import useLocalStorage from "../hooks/useLocalStorage";

export default function Form() {
  const [name, setName] = useLocalStorage("name", "");
  const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", "");

  return (
    <form>
      <div>
        <label>Name:</label>
        <input
          data-testid="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Service Number:</label>
        <input
          data-testid="service-input"
          value={serviceNumber}
          onChange={(e) => setServiceNumber(e.target.value)}
        />
      </div>
    </form>
  );
}