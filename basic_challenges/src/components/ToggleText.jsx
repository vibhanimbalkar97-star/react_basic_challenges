import { useState } from "react";

const ToggleText = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show && (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
          repudiandae sapiente dicta delectus amet aut illum placeat soluta
          cupiditate quae, ipsa ipsum expedita tempore commodi autem?
          Perferendis ipsum reprehenderit fugiat ullam doloremque rem incidunt
          provident excepturi tempore veniam. Alias, vero.
        </p>
      )}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
    </div>
  );
};

export default ToggleText;
