import useLocalStorage from "../hooks/useLocalStorage";

export default function Form() {
  const [name, setName] = useLocalStorage("name", "");
  const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", "");

  return (
    <form>
      <input
        data-testid="name-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        data-testid="serviceNumber-input"
        value={serviceNumber}
        onChange={(e) => setServiceNumber(e.target.value)}
      />
    </form>
  );
}