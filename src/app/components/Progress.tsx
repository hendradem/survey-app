import React from "react";

type ProgressProps = {
  progressValue: number;
};

const Progress: React.FC<ProgressProps> = ({ progressValue }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-600 h-2 rounded-full"
        style={{ width: `${progressValue}%` }}
      ></div>
    </div>
  );
};

export default Progress;
