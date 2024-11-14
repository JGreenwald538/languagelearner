export default function word({
	knownWord,
	targetWord,
}: {
	knownWord: string,
    targetWord: string
}) {
	return (
		<div className="group">
			<div className="group-hover:block hidden text-blue-400">{knownWord}</div>
			<div className="group-hover:hidden block ">{targetWord}</div>
		</div>
	);
}
