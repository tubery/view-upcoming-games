import React from "react";

export default function Footer() {
	return (
		<footer className="p-4 footer text-base-content footer-center bg-base-100">
			<div className="">
				<p>&copy; 2023 - Made by Peter Dinh</p>
				<a
					href="https://github.com/tubery/view-upcoming-games"
					target="_blank"
					rel="noreferrer"
					className="underline link-hover"
				>
					Github page
				</a>
			</div>
		</footer>
	);
}
