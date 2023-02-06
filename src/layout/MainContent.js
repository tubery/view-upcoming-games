import React from "react";
import AllButtons from "../components/buttons/AllButtons";
import Cards from "../components/cards/Cards";
import Information from "../components/information/Information";

export default function MainContent() {
	return (
		<div className="flex flex-col flex-grow p-4 bg-base-300">
			<Information />
			<AllButtons />
			<Cards />
		</div>
	);
}
