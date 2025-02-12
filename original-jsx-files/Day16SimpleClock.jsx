/*In this lab, you will create a React application that dynamically displays the current day, date, and time. 
Each of these elements should be in separate <div> elements with specific IDs. 
You will use JavaScript's Date object to obtain the current day, date, and time.*/

import { useEffect, useState } from "react";

export default function App() {
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
      setDay(days[now.getDay()]);

      const dayOfMonth = now.getDate();
      const months = [
        "january", "february", "march", "april", "may", "june",
        "july", "august", "september", "october", "november", "december"
      ];
      const month = months[now.getMonth()];
      const year = now.getFullYear();
      setDate(`${month} ${dayOfMonth}, ${year}`);

      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div id="day">Day: {day}</div>
      <div id="date">Date: {date}</div>
      <div id="time">Time: {time}</div>
    </div>
  );
}
