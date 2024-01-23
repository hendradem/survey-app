"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { HiIdentification } from "react-icons/hi2";

const surveyID = "12kndqwidq";
const startSurvey = () => {
  localStorage.setItem("currentQuestionPosition", "0");
  localStorage.setItem("answers", "[]");
  window.location.href = "/survey";
};

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={() => {
          startSurvey();
        }}
        className="button-dark button-icon mr-2"
      >
        <HiIdentification className="mr-2" /> Take a survey
      </button>
    </div>
  );
}
