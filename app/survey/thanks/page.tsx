"use client";
import React from "react";
import Link from "next/link";
import { HiIdentification } from "react-icons/hi2";
import { redirect } from "next/navigation";

const onBackToHome = () => {
  localStorage.clear();
  window.location.href = "/";
};

const Page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center px-5">
        <h2 className="font-medium text-xl my-3">Thank you!</h2>
        <p className="text-center">
          *data saved to localStorage and ready to push to db
        </p>
        <button
          onClick={onBackToHome}
          className="button-dark button-icon mt-4 mr-2"
        >
          <HiIdentification className="mr-2" /> Back to home
        </button>
      </div>
    </div>
  );
};

export default Page;
