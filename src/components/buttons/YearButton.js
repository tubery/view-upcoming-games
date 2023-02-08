import React, { useContext } from "react";
import GamesContext from "../../context/GamesContext";
import Radio from "./Radio";

export default function YearButton() {
	const { years, combineYearFilters, updateList, currentYear } =
		useContext(GamesContext);

	return (
		<div>
			<label htmlFor="yearModal" className="btn btn-accent modal-button">
				Year
			</label>

			<input
				type="checkbox"
				name=""
				id="yearModal"
				className="modal-toggle"
			/>
			<div className="modal">
				<div className="max-w screen-md modal-box">
					<h3 className="m-4 text-lg font-bold text-center">Year</h3>
					<div className="flex flex-col flex-wrap justify-between w-full gap-4 sm:flex-row justify-items-center">
						{years.map((year, index) =>
							year >= currentYear ? (
								<Radio
									key={index + 1}
									value="Year"
									id={year}
									func={combineYearFilters}
								/>
							) : null
						)}
					</div>
					<div className="modal-action">
						<label
							htmlFor="yearModal"
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
