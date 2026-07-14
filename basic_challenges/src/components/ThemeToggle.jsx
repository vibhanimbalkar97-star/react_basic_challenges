import { useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={dark ? "dark" : "light"}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button onClick={() => setDark(!dark)}>{dark ? "Light" : "Dark"}</button>
    </div>
  );
};

export default ThemeToggle;
