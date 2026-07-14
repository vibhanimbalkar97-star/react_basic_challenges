// Counter (+, -, Reset)

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(5);

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    } else {
      console.log("Values are less than 0");
    }
  };

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={() => setCount(5)}>Reset</button>
    </div>
  );
};

export default Counter;
