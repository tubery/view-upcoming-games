import React, { useState } from "react";

export default function Cards() {
	const [games, setGames] = useState([]);

	const handleClick = () => {
		setGames([1]);
	};

	return (
		<div className="flex flex-col justify-center gap-y-4 gap-x-4 sm:flex-row sm:flex-wrap sm:justify-items-around">
			<button className="btn" onClick={handleClick}>
				CALL API
			</button>
			<div className="w-full shadow-xl sm:w-1/4 md:w-2/5 lg:w-1/4 card bg-base-100 card-compact">
				<div className="card-body">
					<div className="flex justify-between">{games}</div>
				</div>
			</div>
		</div>
	);
}
