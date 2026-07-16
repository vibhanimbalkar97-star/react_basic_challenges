import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);

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
      {/* Add a button to switch between 12-hour and 24-hour format. */}
      <button
        style={{ padding: "10px", borderRadius: "10px", fontWeight: "bold" }}
        onClick={() => setIs24Hour(!is24Hour)}
      >
        {is24Hour ? "12Hours" : "24Hours"}
      </button>
     {/* UI display for button click */}
      <h1>
        {time.toLocaleTimeString([], {
          hour12: !is24Hour,
        })}
      </h1>
      {/* <h1>{time.toLocaleTimeString("en-GB")}</h1> */}
      {/* <h1>
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
      <h1>{time.toLocaleTimeString()}</h1> */}
    </div>
  );
};

export default DigitalClock;
