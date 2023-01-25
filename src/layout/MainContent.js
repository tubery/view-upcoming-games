import React from "react";
import AllButtons from "../components/buttons/AllButtons";
import Cards from "../components/cards/Cards";

export default function MainContent() {
	return (
		<div className="flex flex-col flex-grow p-4 bg-base-300">
			<AllButtons />
			<Cards />
		</div>
	);
}
