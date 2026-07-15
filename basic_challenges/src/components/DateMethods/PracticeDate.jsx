import { useState } from "react";

const PracticeDate = () => {
  const [time] = useState(new Date());

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 5,
        paddingTop: "10px",
        minHeight: "900px",
      }}
    >
      <h2>Date Methods</h2>
      <p>
        Day:
        {time.getDate()}
      </p>
      <p>
        Month:
        {time.getMonth()}
      </p>
      <p>
        Year:
        {time.getFullYear()}
      </p>
      <p>
        Weekday:
        {time.getDay()}
      </p>
      <p>
        Minutes:
        {time.getMinutes()}
      </p>
      <p>
        {/* this is not a recommended way */}
        Day name:
        {days[time.getDay()]}
      </p>

      <h2>Using Date Formatting (toLocaleDateString())</h2>
      <p>
        Month:
        {time.toLocaleDateString([], {
          month: "short",
        })}
      </p>

      <p>
        Numeric Month:
        {time.toLocaleDateString([], {
          month: "2-digit",
        })}
      </p>

      <p>
        Weekday:
        {time.toLocaleDateString([], {
          weekday: "long",
        })}
      </p>
      <p>
        Weekday:
        {time.toLocaleDateString([], {
          weekday: "short",
        })}
      </p>
      <p>
        Weekday:
        {time.toLocaleDateString([], {
          weekday: "narrow",
        })}
      </p>
      <p>
        Full Year:
        {time.toLocaleDateString([], {
          year: "numeric",
        })}
      </p>
      <p>
        15 July 2026:
        {time.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>

      <h3>Using Time Formatting (toLocaleTimeString())</h3>
      <p>Default time: {time.toLocaleTimeString()}</p>
      <p>Without PM/AM(24-hours-format): {time.toLocaleTimeString("en-GB")}</p>
      <p>
        Hours and minutes:{" "}
        {time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <p>
        seconds:{" "}
        {time.toLocaleTimeString([], {
          second: "2-digit",
        })}
      </p>
      <p>
        Hours:{" "}
        {time.toLocaleTimeString([], {
          hour: "2-digit",
          hour12: false,
        })}
      </p>
      <p>
        minutes:{" "}
        {time.toLocaleTimeString([], {
          minute: "2-digit",
        })}
      </p>
      <h3>Mostly asked in interviews</h3>
      <p>
        15/07/2026:
        {time.toLocaleDateString("en-GB")}
      </p>
      <p>07/15/2026: {time.toLocaleDateString("en-US")}</p>
      <p>
        15 July 2026:{" "}
        {time.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </p>
      <p>
        Jul 15, 2026:{" "}
        {time.toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        })}
      </p>
      <p>
        Wednesday:{" "}
        {time.toLocaleDateString([], {
          weekday: "long",
        })}
      </p>
      <p>
        Wed:{" "}
        {time.toLocaleDateString([], {
          weekday: "short",
        })}
      </p>
      <p>
        14:35:20:{" "}
        {time.toLocaleTimeString([], {
          hour12: false,
        })}
      </p>
      <p>
        02:35:20 PM:{" "}
        {time.toLocaleTimeString([], {
          hour12: true,
        })}
      </p>
    </div>
  );
};

export default PracticeDate;
