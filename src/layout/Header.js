import React, { useContext } from "react";
import GamesContext from "../context/GamesContext";

// To Do
// 1. Change a Link to Link component
// 2. Change updated to component which changes automatically
// 3. Center Nav

export default function Header() {
	const { currentMonth, currentYear } = useContext(GamesContext);

	return (
		<header>
			<div className="shadow-lg navbar">
				<div className="navbar-start"></div>
				<div className="navbar-center">
					<a href="/" className="text-xl normal-case btn btn-ghost">
						Upcoming Games
					</a>
				</div>
				<div className="divider divider-horizontal"></div>
				<p className="text-lg">
					Updated: <br /> {currentMonth} / {currentYear}
				</p>
				<div className="navbar-end"></div>
			</div>
		</header>
	);
}
