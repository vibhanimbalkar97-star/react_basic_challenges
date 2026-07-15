import { useState } from "react";

const ShowHidePassword = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <input
        type={show ? "text" : "password"}
        style={{ position: "relative" }}
      />
      <button
        style={{ position: "absolute", right: "80%" }}
        onClick={() => setShow(!show)}
      >
        {show ? "🙈" : "👁️"}
      </button>
    </div>
  );
};

export default ShowHidePassword;
