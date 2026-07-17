import { useEffect, useRef, useState } from "react";

const AutoHideMessage = () => {
  const [message, setMessage] = useState("");

  const inputRef = useRef(null);

  const showMessage = () => {
    setMessage("Data save successfully");

    inputRef.current = setTimeout(() => {
      setMessage("");
      console.log(inputRef.current);
    }, 3000);
  };

  useEffect(() => {
    return () => clearTimeout(inputRef.current);
  }, []);

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
      <h1>{message}</h1>
      <button
        style={{ padding: "10px", borderRadius: "10px", fontWeight: "bold" }}
        onClick={showMessage}
      >
        Click
      </button>
    </div>
  );
};

export default AutoHideMessage;
