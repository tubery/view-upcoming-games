import React, { useContext } from "react";
import GamesContext from "../../context/GamesContext";

export default function ItemsPerPage() {
	const { handleGamesPerPage } = useContext(GamesContext);

	return (
		<div>
			<select
				className="max-w-xs select select-bordered"
				onChange={(e) => handleGamesPerPage(e)}
				defaultValue={"DEFAULT"}
			>
				<option value="DEFAULT" disabled>
					Items per page
				</option>
				<option value="10">10</option>
				<option value="20">20</option>
				<option value="30">30</option>
				<option value="40">40</option>
				<option value="50">50</option>
			</select>
		</div>
	);
}
