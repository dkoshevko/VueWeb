"use client"

import React from "react";
import Lottie from 'lottie-react'


export default function LottieAnimation({ animation }) {
  return (
    <div className="flex flex-col items-center justify-center h-fit">
      <Lottie
        animationData={animation}
        loop={true}
        className=""
      />
    </div>
  );
}
