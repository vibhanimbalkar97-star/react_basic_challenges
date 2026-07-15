import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
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
      <h1>{time.toLocaleTimeString("en-GB")}</h1>
      <h1>
        {time.toLocaleTimeString([], {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })}
      </h1>
      <h1>{time.toLocaleTimeString()}</h1>
      <h1>
        {time.toLocaleDateString([], {
          weekday: "long",
        })}
      </h1>
      <h1>
        {time.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </h1>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default DigitalClock;
