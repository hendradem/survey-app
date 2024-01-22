"use client";
import React from "react";
import Progress from "../components/Progress";
import { HiChevronRight, HiDocumentArrowUp } from "react-icons/hi2";
import QuestionList from "../components/QuestionList";

import questionData from "../store/data.json";

const Page = () => {
  return (
    <>
      <div className="navbar px-5 h-[7%] bg-white border-b shadow-sm border-gray-100 flex flex-col items-center justify-center">
        <div className="flex-col w-full ">
          <div className="w-full flex items-center justify-between mb-1">
            <p className="font-normal text-gray-800">
              {" "}
              <span className="font-semibold">3/10</span> Qustions
            </p>
            <p className="font-normal text-gray-800">3 seconds left</p>
          </div>
          <Progress progressValue={80} />
        </div>
      </div>
      <div className="main p-5 h-[86%] bg-gray-50 flex-col">
        <QuestionList questionData={questionData} />
      </div>
      <div className="footer px-5 h-[7%] bg-white border-t flex items-center border-gray-100 ">
        <button className="button-dark button-icon mr-2">
          <HiChevronRight className="mr-2" /> Next Question
        </button>
        <button className="button-dark button-icon mr-2">
          <HiDocumentArrowUp className="mr-2" /> Submit Answers
        </button>
      </div>
    </>
  );
};

export default Page;
