import React from "react";
import { HiCheck } from "react-icons/hi2";

type QuestionListProps = {
  id: number;
  question: string;
  answers: string[];
};

type QuestionArray = QuestionListProps[];

const QuestionList: React.FC<{ questionData: QuestionArray }> = ({
  questionData,
}) => {
  return (
    <div>
      {questionData?.length >= 1
        ? questionData.map((data) => {
            return (
              <div key={data.id}>
                <div className="question mt-4">
                  <h2 className="font-semibold text-lg text-gray-800">
                    {data.question}
                  </h2>
                </div>
                <div className="options mt-3">
                  <div className="w-full text-gray-900 bg-white border border-gray-200 rounded-lg ">
                    <button
                      type="button"
                      className="relative inline-flex items-center w-full px-4 py-3 text-lg font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                    >
                      <HiCheck className="mr-2" />
                      Sudah
                    </button>
                    <button
                      type="button"
                      className="relative inline-flex items-center w-full px-4 py-3 text-lg font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                    >
                      <HiCheck className="mr-2" />
                      Belum
                    </button>
                    <button
                      type="button"
                      className="relative inline-flex items-center w-full px-4 py-3 text-lg font-medium border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                    >
                      <HiCheck className="mr-2" />
                      Tidak tahu
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        : "no data available"}
    </div>
  );
};

export default QuestionList;
