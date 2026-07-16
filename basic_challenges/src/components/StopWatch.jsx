import { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const inputRef = useRef(null);

  //   if only show MM:SS format this formula
  //   const minutes = Math.floor(seconds/60)
  //   const remainingSeconds = seconds % 60

  // show HH:MM:SS then below formula
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const start = () => {
    setIsRunning(true);
    if (inputRef.current) return;

    inputRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
      console.log(inputRef.current);
    }, 1000);
  };
  const startTimer = start;
  const resume = start;

  const stop = () => {
    setIsRunning(false);
    clearInterval(inputRef.current);
    inputRef.current = null;
    console.log(inputRef.current);
  };

  const reset = () => {
    setIsRunning(false);
    clearInterval(inputRef.current);
    inputRef.current = null;
    setSeconds(0);
  };

  const pause = () => {
    clearInterval(inputRef.current);
    inputRef.current = null;
    setIsRunning(false);
  };

  useEffect(() => {
    return () => {
      clearInterval(inputRef.current);
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
      <h1>{seconds.toString().padStart(2, "0")}</h1>
      {/* <h1>{minutes.toString().padStart(2, "0")} : {remainingSeconds.toString().padStart(2, "0")}</h1> */}
      <h1>
        {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")} :{" "}
        {remainingSeconds.toString().padStart(2, "0")}
      </h1>

      <button
        style={{ padding: "10px", borderRadius: "10px", fontWeight: "bold" }}
        onClick={startTimer}
        disabled={isRunning}
      >
        start
      </button>
      <button
        style={{ padding: "10px", borderRadius: "10px", fontWeight: "bold" }}
        onClick={stop}
        disabled={!isRunning}
      >
        stop
      </button>
      <button
        style={{ padding: "10px", borderRadius: "10px", fontWeight: "bold" }}
        onClick={reset}
        disabled={seconds == 0}
      >
        reset
      </button>
      <button
        style={{ padding: "10px", borderRadius: "10px", fontWeight: "bold" }}
        onClick={pause}
        disabled={!isRunning}
      >
        pause
      </button>
      <button
        style={{ padding: "10px", borderRadius: "10px", fontWeight: "bold" }}
        onClick={resume}
        disabled={isRunning}
      >
        resume
      </button>
    </div>
  );
};

export default StopWatch;

// | Value | After `toString()` | After `padStart(2, "0")` |
// | ----: | ------------------ | ------------------------ |
// |   `1` | `"1"`              | `"01"`                   |
// |   `5` | `"5"`              | `"05"`                   |
// |   `9` | `"9"`              | `"09"`                   |
// |  `10` | `"10"`             | `"10"`                   |
// |  `15` | `"15"`             | `"15"`                   |
// |  `99` | `"99"`             | `"99"`                   |

// Interview Question
// Why do we use toString()?
// Answer
// Because padStart() is a string method. Numbers don't have a padStart() method, so we first convert the number to a string using toString().

// / What does padStart(2, "0") do?
// Answer
// It ensures the string has at least 2 characters. If it's shorter, it adds "0" at the beginning.

// targetLength → Final string length
// padString → Character to add at the beginning


// Q1. Why doesn't Pause reset the time?

// Answer:

// Pause only stops the interval. The seconds state remains unchanged, so Resume continues from the same value.

// Q2. Why is Resume almost the same as Start?

// Answer:

// Both create a new interval. The difference is that Resume uses the existing seconds value, while Start is typically used for the initial run.

// Q3. Why don't we call setSeconds(0) in Pause?

// Answer:

// Because Pause should preserve the elapsed time. Reset is the only action that should set the time back to zero.

// Q4. Do we need another useEffect?

// Answer:

// No. The existing interval logic is sufficient. Pause and Resume only control when the interval runs.