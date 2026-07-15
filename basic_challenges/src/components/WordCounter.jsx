import { useState } from "react";

const WordCounter = () => {
  const [input, setInput] = useState("");

  const char = input.trim().split(/\s+/).length;

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
      <p>Word count: {char}</p>
    </div>
  );
};

export default WordCounter;
