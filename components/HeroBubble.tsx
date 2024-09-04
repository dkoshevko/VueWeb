import React from "react";

type HeroBubbleProps = {
  text: string;
  direction: string;
  position: string;
  delay: string
};

export default function HeroBubble({ text, direction, position, delay }: HeroBubbleProps) {
  return (
    <div className={`absolute animate-fly ${position} ${delay}`}>
      <div
        className={`${direction} w-fit text-nowrap bg-white rounded-full py-2 lg:py-4 px-4 lg:px-8 border-2 border-black dark:border-slate-100 dark:bg-slate-950`}
      >
        {text}
      </div>
    </div>
  );
}
