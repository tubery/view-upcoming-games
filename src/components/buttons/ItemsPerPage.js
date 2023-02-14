import React, { useContext } from "react";
import GamesContext from "../../context/GamesContext";

export default function ItemsPerPage() {
	const { gamesPerPage, handleGamesPerPage } = useContext(GamesContext);

	const amount = [10, 20, 30, 40, 50];

	return (
		<div className="dropdown">
			<label tabIndex={0} className="p-4 btn btn-outline">
				Items per page
			</label>
			<ul
				tabIndex={0}
				className="p-2 m-1 shadow dropdown-content menu bg-base-100 rounded-box w-52"
			>
				{amount.map((item, index) => {
					return (
						<li key={index}>
							<button
								id={amount[index]}
								className={
									amount[index] === gamesPerPage
										? "btn-active"
										: " "
								}
								onClick={(e) => handleGamesPerPage(e)}
							>
								{item}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
