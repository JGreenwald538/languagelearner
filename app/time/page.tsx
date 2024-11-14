"use client";
import { useState } from "react";

function timeIdentifer(number: number) {
	if(number < 5) {
		return "το νυχτα"
	} else if (number <= 12) {
		return "το πρωί";
	} else if( number <= 13 ) {
		return "το πρωί or μεσημέρι";
	} else if (number <= 16) {
		return "τo μεσημέρι";
	} else if (number <=17) {
		return "τo μεσημέρι or απογευμα";
	} else if (number <= 19) {
		return "το απογευμα";
	} else if (number <= 20) {
		return "το απογευμα or βραδυ";
	} else if (number <= 22) {
		return "τo βραδυ";
	} else if (number <= 24) {
		return "το νυχτα";
	}
}

export default function Home() {
	const [reveal, setReveal] = useState(false)
	const [onlyFifteenOrThirty, setOnly] = useState(false)
	const hours = Math.floor(Math.random() * 23);
	let minutes = Math.floor(Math.random() * 59 + 1);
	const [time, setTime] = useState(
		(hours < 10 ? "0" + hours : hours) +
			":" +
			(minutes < 10 ? "0" + minutes : minutes)
	);
	const hourWords = [
		"δωδεκα",
		"μια",
		"διο",
		"τρια",
		"τεσσερα",
		"πεντε",
		"εξι",
		"εφτα",
		"οχτώ",
		"ενια",
		"δεκα",
		"ενδεκα",
	];
	const minuteWords = [
		"μια",
		"διο",
		"τρια",
		"τεσσερα",
		"πεντε",
		"εξι",
		"εφτα",
		"οχτώ",
		"ενια",
		"δεκα",
		"ενδεκα",
		"δωδεκα",
		"δεκατρια",
		"δεκατεσσερα",
		"τεταρτο",
		"δεκαεξι",
		"δεκαεφτα",
		"δεκαοχτα",
		"δεκαενια",
		"εικοσι",
		"εικοσιενα",
		"εικοσιδιο",
		"εικοσιτρια",
		"εικοσιτεσσερα", "εικοσιπεντε", "εικοσιεξι", "εικοσιεφτα", "εικοσιοχτώ", "εικοσιενα", "μιση"
	];
	return (
		<div className="flex flex-col align-center w-full h-full text-center border-4 border-orange-500 rounded-lg">
			<button
				onClick={() => {
					setReveal(!reveal);
				}}
				className={`${reveal ? "" : "bg-black"} `}
			>
				<div className="text-[10rem]">{time}</div>
			</button>
			<div className="text-3xl">
				{hourWords[
					(parseInt(time.substring(0, 2)) % 12) +
						(parseInt(time.substring(3, 5)) > 30 ? 1 : 0)
				] +
					" " +
					(parseInt(time.substring(3, 5)) > 30 ? "παρά" : "και") +
					" " +
					minuteWords[
						parseInt(time.substring(3, 5)) > 30
							? 60 - parseInt(time.substring(3, 5)) - 1
							: parseInt(time.substring(3, 5)) - 1
					] +
					" " +
					timeIdentifer(parseInt(time.substring(0, 2)))}
			</div>

			<div className="flex justify-center mt-10">
				<button
					className="bg-blue-800 border-2 border-black text-white w-fit text-4xl px-4 py-2"
					onClick={() => {
						let minutes = Math.floor(Math.random() * 59 + 1);
						if(onlyFifteenOrThirty) {
							minutes = Math.floor(Math.random() * 3 + 1) * 15;
						}
						const hours = Math.floor(Math.random() * 23);
						setTime(
							(hours < 10 ? "0" + hours : hours) +
								":" +
								(minutes < 10 ? "0" + minutes : minutes)
						);
						setReveal(false);
					}}
				>
					Generate
				</button>
			</div>
			<div className="flex flex-row justify-center space-x-12">
				<button onClick={() => {
					setOnly(!onlyFifteenOrThirty)
				}}>Make it only 15 or 30?</button>
				{onlyFifteenOrThirty ? <div className="bg-green-400">On</div> : <div className="bg-red-400">Off</div>}
			</div>
		</div>
	);
}
