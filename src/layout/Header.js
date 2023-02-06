import React from "react";

// To Do
// 1. Change a Link to Link component
// 2. Change updated to component which changes automatically
// 3. Center Nav

export default function Header() {
	return (
		<header>
			<div className="shadow-lg navbar">
				<div className="navbar-start"></div>
				<div className="navbar-center">
					<a href="/" className="text-xl normal-case btn btn-ghost">
						Logo
					</a>
				</div>
				<div className="divider divider-horizontal"></div>
				<p>Updated: 01/2023</p>
				<div className="divider divider-horizontal"></div>
				<p>Click game title or description</p>
				<div className="navbar-end"></div>
			</div>
		</header>
	);
}
