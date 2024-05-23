import React from "react";

type HeroBubbleProps = {
  text: string;
  direction: string;
  position: string;
};

export default function HeroBubble({ text, direction, position }: HeroBubbleProps) {
  return (
    <div
      className={`${direction} ${position} absolute w-fit bg-white rounded-full py-4 px-8 border-2 border-black dark:text-black`}
    >
      {text}
    </div>
  );
}
