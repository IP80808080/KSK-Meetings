"use client";
import React, { useState, useEffect } from "react";

type Props = {};

function Time({}: Props) {
  const [time, setTime] = useState("");
  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const newTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(newTime);
    }
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return <h1 className="text-4xl font-extrabold lg:text-6xl">{time}</h1>;
}

export default Time;
