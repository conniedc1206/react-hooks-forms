import { useState } from "react";

function Form({
  firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange,
}) {
  const [number, setNumber] = useState(0);
  const [error, setError] = useState(null);

  const handleNumberChange = (event) => {
    const newNumber = parseInt(event.target.value);
    if (newNumber >= 0 && newNumber <= 5) {
      setNumber(newNumber);
      setError(null);
    } else {
      setError(`${newNumber}is not a valid number`);
    }
  };
  return (
    <form>
      <input onChange={handleFirstNameChange} type="text" value={firstName} />
      <input onChange={handleLastNameChange} type="text" value={lastName} />
      <button type="submit">Submit</button>

      <input type="number" value={number} onChange={handleNumberChange} />
      {error ? (
        <span>
          style={{ color: "red" }}
          {error}
        </span>
      ) : null}
    </form>
  );
}

export default Form;
