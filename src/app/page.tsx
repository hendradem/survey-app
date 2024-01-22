import Progress from "./components/Progress";
import {
  HiChevronRight,
  HiDocumentArrowUp,
  HiCheck,
  HiCheckCircle,
} from "react-icons/hi2";

export default function Home() {
  return (
    <>
      <div className="bg-white w-[100%] h-screen flex items-center justify-center">
        <div className="w-[30%] h-screen bg-white border border-gray-100">
          <div className="navbar px-5 h-[7%] bg-white border-b shadow-sm border-gray-100 flex flex-col items-center justify-center">
            <div className="flex-col w-full ">
              <div className="w-full flex items-center justify-between mb-1">
                <h2 className="font-semibold text-lg text-gray-800">
                  Survey apps
                </h2>
                <p className="font-normal text-gray-800">3 seconds</p>
              </div>
              <Progress progressValue={80} />
            </div>
          </div>
          <div className="main p-5 h-[86%] bg-gray-50 flex-col">
            <div className="question">
              <h2 className="font-semibold text-lg text-gray-800">
                Apakah anda hari ini sudah membuat kopi?
              </h2>
            </div>
            <div className="options mt-2">
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
          <div className="footer px-5 h-[7%] bg-white border-t flex items-center border-gray-100 ">
            <button className="button-dark button-icon mr-2">
              <HiChevronRight className="mr-2" /> Next Question
            </button>
            <button className="button-dark button-icon mr-2">
              <HiDocumentArrowUp className="mr-2" /> Submit Answers
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
