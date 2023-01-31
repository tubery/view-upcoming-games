import React, { useContext } from "react";
import GamesContext from "../../context/GamesContext";
import Checkbox from "./Checkbox";

export default function GenreButton() {
	const { genres } = useContext(GamesContext);

	return (
		<div>
			<label
				htmlFor="genreModal"
				className="btn btn-primary modal-button focus:btn-accent"
			>
				Genre
			</label>
			<input type="checkbox" id="genreModal" className="modal-toggle" />
			<div className="modal">
				<div className="max-w-screen-md modal-box">
					<h3 className="m-4 text-lg font-bold text-center">Genre</h3>
					<div className="flex flex-row flex-wrap justify-around w-full gap-4 justify-items-center">
						{genres.map((genre, index) => {
							return <Checkbox value={genre} key={index} />;
						})}
					</div>
					<div className="modal-action">
						<label
							htmlFor="genreModal"
							className="w-full btn-error btn"
						>
							Close
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}
