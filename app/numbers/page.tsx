"use client"
import Image from "next/image";
import { useState } from "react";
import numberToWord from "../lib/numberToWord";
import { randomInt } from "crypto";

export default function Home() {
  const [number, setNumber] = useState(16)
  const [reveal, setReveal] = useState(false)
  return (
		<div className="flex flex-col align-center w-full h-full text-center border-4 border-green-500 rounded-lg">
			<div className="text-[10rem]">{number}</div>
			<div className="text-xl">{numberToWord(number)}</div>
			<div className="flex flex-row justify-center text-xl">
				<div className="whitespace-break-spaces">{"Click to Reveal: "}</div>
				<button
					onClick={() => {
						setReveal(!reveal);
					}}
					className={`${reveal ? "" : "bg-black"} `}
				>
					Uno
				</button>
			</div>
			<div className="flex justify-center mt-10">
				<button className="bg-blue-800 border-2 border-black text-white w-fit text-4xl px-4 py-2" onClick={
          () => {
            setNumber(Math.floor(Math.random() * 99 + 1));
          }
        }>
					Generate
				</button>
			</div>
		</div>
	);
}
