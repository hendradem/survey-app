"use client";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";

import Timer from "../components/Timer";
import { HiChevronRight, HiDocumentArrowUp } from "react-icons/hi2";
import QuestionList from "../components/QuestionList";
import questionData from "../store/data.json";

const Page = () => {
  const totalOfQuestion: number = questionData.length;
  const latestQuestionPosition = localStorage.getItem(
    "currentQuestionPosition"
  );
  const [questionPosition, setQuestionPosition] = useState<number>(
    parseInt(`${latestQuestionPosition}`)
  );
  let [countDown, setCountdown] = useState<number>(15);

  const goToTheNextQuestion = (): void => {
    if (parseInt(`${latestQuestionPosition}`) == totalOfQuestion) {
      localStorage.clear();
    } else {
      localStorage.setItem(
        "currentQuestionPosition",
        (parseInt(`${latestQuestionPosition}`) + 1).toString()
      );
      setQuestionPosition(questionPosition); // go to the next questions
    }
  };

  const useCountDown = (start: number): number => {
    const [counter, setCounter] = useState<number>(start);
    const reset = () => {
      setCounter(countDown);
      goToTheNextQuestion();
    };
    useEffect(() => {
      if (counter === 0 && questionPosition <= totalOfQuestion) {
        reset();
      }
      let cnt = setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
      if (parseInt(`${latestQuestionPosition}`) == totalOfQuestion) {
        clearInterval(cnt);
        localStorage.setItem("currentQuestionPosition", "0");
        redirect("/survey/thanks");
      }
    }, [counter]);
    return counter;
  };

  return (
    <>
      <div className="navbar px-5 h-[7%] bg-white border-b shadow-sm border-gray-100 flex flex-col items-center justify-center">
        <div className="flex-col w-full ">
          <div className="w-full flex items-center justify-between mb-1">
            <p className="font-normal text-gray-800">
              <span className="font-semibold mr-2">{`${
                parseInt(`${latestQuestionPosition}`) + 1
              }/${totalOfQuestion}`}</span>
              Qustions
            </p>
            <p className="font-normal text-gray-800">
              <span className="font-semibold">{useCountDown(countDown)}</span>{" "}
              seconds left
            </p>
          </div>
          <Timer timerValue={countDown} />
        </div>
      </div>
      <div className="main p-5 h-[86%] bg-gray-50 flex-col">
        <QuestionList
          questionData={questionData}
          position={parseInt(`${latestQuestionPosition}`)}
        />
      </div>
      <div className="footer px-5 h-[7%] bg-white border-t flex items-center border-gray-100 ">
        <button
          onClick={goToTheNextQuestion}
          className={`${
            parseInt(`${latestQuestionPosition}`) + 1 >= totalOfQuestion
              ? "button-dark button-icon disabled-button"
              : "button-dark button-icon"
          }  mr-2`}
          disabled={
            parseInt(`${latestQuestionPosition}`) + 1 >= totalOfQuestion
          }
        >
          <HiChevronRight className="mr-2" />
          Next Question
        </button>
        <button
          className={`${
            questionPosition !== totalOfQuestion
              ? "button-dark button-icon disabled-button"
              : "button-dark button-icon"
          } mr-2 `}
          disabled={questionPosition !== totalOfQuestion}
        >
          <HiDocumentArrowUp className="mr-2" /> Submit Answers
        </button>
      </div>
    </>
  );
};

export default Page;
