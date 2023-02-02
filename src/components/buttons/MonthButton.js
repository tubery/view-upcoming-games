import React, { useContext } from "react";
import GamesContext from "../../context/GamesContext";
import Checkbox from "./Checkbox";

// Month button
// Static list of months

export default function MonthButton() {
	const { handleButtons } = useContext(GamesContext);

	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	return (
		<div>
			<label htmlFor="monthModal" className="btn btn-accent modal-button">
				Month
			</label>

			<input type="checkbox" id="monthModal" className="modal-toggle" />
			<div className="modal">
				<div className="max-w-screen-md modal-box">
					<h3 className="m-4 text-lg font-bold text-center">Month</h3>
					<div className="flex flex-col flex-wrap justify-between w-full gap-4 sm:flex-row justify-items-center">
						{months.map((month, index) => {
							return (
								<Checkbox
									key={index}
									value={month}
									id={index + 1}
									func={handleButtons}
								/>
							);
						})}
					</div>
					<div className="modal-action">
						<label
							htmlFor="monthModal"
							className="w-full btn btn-error btn-outline"
						>
							Close
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}
