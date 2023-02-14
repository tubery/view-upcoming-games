import React, { useContext } from "react";
import GamesContext from "../context/GamesContext";

export default function ActiveFilters() {
	const {
		genreFilters,
		platformFilters,
		monthFilters,
		yearFilters,
		months,
		gamesPerPage,
	} = useContext(GamesContext);

	return (
		<div className="flex flex-col items-center justify-center gap-2 my-4 sm:px-40">
			{/* Platform filters list */}
			{platformFilters.length > 0 && (
				<div className="flex flex-wrap items-center gap-2">
					<h2 className="text-lg">Platform filters: </h2>
					{platformFilters.map((selectedFilters, index) => (
						<div className="badge badge-primary" key={index}>
							{selectedFilters}
						</div>
					))}
				</div>
			)}
			{/* Genre filters list */}
			{genreFilters.length > 0 && (
				<div className="flex flex-wrap items-center gap-2">
					<h2 className="text-lg">Genre filters: </h2>
					{genreFilters.map((selectedFilters, index) => (
						<div className="badge badge-secondary" key={index}>
							{selectedFilters}
						</div>
					))}
				</div>
			)}
			{/* Month filters list */}
			{monthFilters.length > 0 && (
				<div className="flex flex-wrap items-center gap-2">
					<h2 className="text-lg">Month filters: </h2>
					{monthFilters.map((selectedFilters, index) => (
						<div className="badge badge-accent" key={index}>
							{months[selectedFilters - 1]}
						</div>
					))}
				</div>
			)}
			{/* Year filters list */}
			{yearFilters.length > 0 && (
				<div className="flex flex-wrap items-center gap-2">
					<h2 className="text-lg">Year filters: </h2>
					{yearFilters.map((selectedFilters, index) => (
						<div className="badge badge-accent" key={index}>
							{selectedFilters}
						</div>
					))}
				</div>
			)}
			<div className="flex flex-wrap items-center gap-2">
				<h2 className="text-lg">Items per page: </h2>
				<div className="badge">{gamesPerPage}</div>
			</div>
		</div>
	);
}
