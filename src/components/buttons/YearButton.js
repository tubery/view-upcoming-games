import React, { useContext } from "react";
import GamesContext from "../../context/GamesContext";
import Checkbox from "./Checkbox";

export default function YearButton() {
	const { handleButtons } = useContext(GamesContext);

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
						{/* Make dynamic, currently hardocded */}
						<Checkbox value="2023" func={handleButtons} id="2023" />
						<Checkbox value="2024" func={handleButtons} id="2024" />
						<Checkbox value="2025" func={handleButtons} id="2025" />
						<Checkbox value="2026" func={handleButtons} id="2026" />
					</div>
					<div className="modal-action">
						<label
							htmlFor="yearModal"
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
