import React, { useContext } from "react";
import GamesContext from "../../context/GamesContext";
import Radio from "./Radio";

export default function MonthButton() {
	const { combineMonthFilters, updateList, months } =
		useContext(GamesContext);

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
								<Radio
									key={index + 1}
									value={index + 1}
									id={month}
									func={combineMonthFilters}
								/>
							);
						})}
					</div>
					<div className="modal-action">
						<label
							htmlFor="monthModal"
							className="w-full btn btn-error btn-outline"
							onClick={updateList}
						>
							Close
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}
