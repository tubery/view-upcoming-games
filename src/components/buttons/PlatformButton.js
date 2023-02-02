import React, { useContext } from "react";
import GamesContext from "../../context/GamesContext";
import Checkbox from "./Checkbox";

export default function PlatformButton() {
	const { platforms, handleButtons } = useContext(GamesContext);

	// Harcoded
	// Make dynamic
	const checkPopular = (name) => {
		if (
			name === "PC" ||
			name === "PS5" ||
			name === "Switch" ||
			name === "Series X"
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
						<Checkbox value="PC" func={handleButtons} />
						<Checkbox value="PS5" func={handleButtons} />
						<Checkbox value="Switch" func={handleButtons} />
						<Checkbox value="Series X" func={handleButtons} />
					</div>
					<div className="divider"></div>
					<div className="flex flex-col flex-wrap justify-between w-full gap-4 sm:flex-row justify-items-center">
						{platforms.map((platform, index) => {
							return checkPopular(platform) ? (
								<Checkbox
									value={platform}
									func={handleButtons}
									key={index}
									id={platform}
								/>
							) : (
								""
							);
						})}
					</div>
					<div className="modal-action">
						<label
							htmlFor="platformModal"
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
