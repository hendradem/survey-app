"use client";
import React from "react";

type ProgressProps = {
  timerValue: number;
};

const Timer: React.FC<ProgressProps> = ({ timerValue }) => {
  const countDown = (timerValue * 100) / 60;

  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-400 h-2 rounded-full"
        style={{ width: `${countDown}%` }}
      ></div>
    </div>
  );
};

export default Timer;
