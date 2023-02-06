import React from "react";

export default function Information() {
	return (
		<div className="flex flex-col justify-center gap-2 my-2 text-center align-middle">
			<p>
				All information obtained from{" "}
				<a
					className="font-bold text-white underline hover:text-purple-300"
					href="https://www.igdb.com/"
				>
					IGDB API
				</a>
			</p>
			<p>Click game title to find out more information</p>
			<p>Click on game description to view cover</p>
		</div>
	);
}
