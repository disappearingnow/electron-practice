import { useState, FormEvent } from "react";
import { TextInput } from "./components/_index";
import "./App.css";

function App() {
  const [textInput, setTextInput] = useState("");
  const [displayText, setDisplayText] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDisplayText(textInput);
    setTextInput("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="testInput">Test input:</label>
        <TextInput
          name="testInput"
          id="testInput"
          value={textInput}
          setValue={setTextInput}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>What you typed:</h3>
        <p>{displayText}</p>
      </div>
    </div>
  );
}

export default App;
