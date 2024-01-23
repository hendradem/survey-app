"use client";
import React, { useState } from "react";
import { HiCheck } from "react-icons/hi2";

type QuestionListProps = {
  id: number;
  question: string;
  answers: string[];
};
type QuestionPosition = number;
type QuestionArray = QuestionListProps[];

const QuestionList: React.FC<{
  questionData: QuestionArray;
  position: QuestionPosition;
}> = ({ questionData, position }) => {
  const [userResponses, setUserResponses] = useState([]);
  const [selectedID, setSelectedID] = useState<number>(0);
  const saveResponses = (
    no: number,
    question: string,
    item: string,
    index: number
  ): void => {
    setSelectedID(index);
    const data = {
      no: no + 1,
      question: question,
      answer: item,
    };
    localStorage.setItem(`${no + 1}`, `${JSON.stringify(data)}`);
  };
  return (
    <div>
      {questionData?.length >= 1 ? (
        <div key={questionData[position]?.id}>
          <div className="question mt-4">
            <h2 className="font-semibold text-lg text-gray-800">
              {questionData[position]?.question}
            </h2>
          </div>
          <div className="options mt-3">
            <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg ">
              {questionData[position]?.answers.map((item, index) => {
                return (
                  <div key={index}>
                    <button
                      type="button"
                      onClick={() => {
                        saveResponses(
                          questionData[position]?.id,
                          questionData[position]?.question,
                          item,
                          index
                        );
                      }}
                      className={`${
                        index == selectedID ? "bg-gray-50" : ""
                      } relative inline-flex items-center w-full px-4 py-3 text-lg font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10`}
                    >
                      <HiCheck className="mr-2" />
                      {item}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        "no data available"
      )}
    </div>
  );
};

export default QuestionList;
