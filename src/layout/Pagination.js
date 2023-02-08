import React, { useContext } from "react";
import GamesContext from "../context/GamesContext";

export default function Pagination() {
	const { currentPage, nPages, setCurrentPage, prevPage, nextPage } =
		useContext(GamesContext);
	const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
	const pageSiblings = pageNumbers.slice(0, 5); // Fix pagination
	// Too many pages show up
	// Make compact
	return (
		<div className="flex flex-col justify-center pt-8 pb-4 pl-8 pr-8 mx-auto">
			<div className="btn-group">
				<button className="btn" onClick={() => prevPage()}>
					Prev
				</button>
				{pageSiblings.map((pageNum, index) => (
					<button
						className={`btn ${
							pageNum === currentPage ? "btn-active" : ""
						}`}
						onClick={() => setCurrentPage(pageNum)}
						key={index}
					>
						{pageNum}
					</button>
				))}
				<button className="btn" onClick={() => nextPage()}>
					Next
				</button>
			</div>
		</div>
	);
}
