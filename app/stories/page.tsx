"use client";
import Image from "next/image";
import { useState } from "react";
import Word from "../components/word";

export default function Stories() {
	const [sentenceClicked, setSentenceClicked] = useState(false)
	return (
		<div className="border-4 border-pink-500 rounded-lg w-full h-full">
			<button className={`flex flex-row space-x-1 text-xl ${sentenceClicked ? "group cursor-grab" : ""}`} onMouseDown={() => {
				setSentenceClicked(true)
			}} onMouseUp={() => {
				setSentenceClicked(false)
			}}>
				<Word knownWord="My" targetWord="Mi" />
				<Word knownWord="name" targetWord="nombre" />
				<Word knownWord="is" targetWord="es" />
				<Word knownWord="Jack" targetWord="Jack" />
			</button>
		</div>
	);
}
