import { useState } from "react";

const CharacterCounter = () => {
  const [input, setInput] = useState("");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "600px",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Text: {input}</p>
      <p>characters: {input.length}</p>
    </div>
  );
};

export default CharacterCounter;
