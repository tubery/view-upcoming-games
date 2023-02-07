import React, { useContext } from "react";
import GamesContext from "../../context/GamesContext";
import Checkbox from "./Checkbox";

export default function PlatformButton() {
	const { platforms, combinePlatformFilters, updateList } =
		useContext(GamesContext);

	// Harcoded
	// Make dynamic
	const checkPopular = (name) => {
		if (
			name === "PC" ||
			name === "PS5" ||
			name === "Switch" ||
			name === "Series X" ||
			name === ""
		) {
			return false;
		} else {
			return true;
		}
	};

	return (
		<div>
			<label
				htmlFor="platformModal"
				className="btn btn-secondary modal-button"
			>
				Platform
			</label>

			<input
				type="checkbox"
				name=""
				id="platformModal"
				className="modal-toggle"
			/>
			<div className="modal">
				<div className="max-w screen-md modal-box">
					<h3 className="m-4 text-lg font-bold text-center">
						Platform
					</h3>
					<div className="flex flex-col flex-wrap justify-between w-full gap-4 sm:flex-row justify-items-center">
						{/* Make dynamic, currently hardocded */}
						<Checkbox
							value="Platform"
							func={combinePlatformFilters}
							id="PC"
						/>
						<Checkbox
							value="Platform"
							func={combinePlatformFilters}
							id="PS5"
						/>
						<Checkbox
							value="Platform"
							func={combinePlatformFilters}
							id="Switch"
						/>
						<Checkbox
							value="Platform"
							func={combinePlatformFilters}
							id="Series X"
						/>
					</div>
					<div className="divider"></div>
					<div className="flex flex-col flex-wrap justify-between w-full gap-4 sm:flex-row justify-items-center">
						{platforms.map((platform, index) => {
							return checkPopular(platform) ? (
								<Checkbox
									value="Platform"
									func={combinePlatformFilters}
									key={index}
									id={platform}
								/>
							) : null;
						})}
					</div>
					<div className="modal-action">
						<label
							htmlFor="platformModal"
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
