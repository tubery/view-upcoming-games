import React, { useContext } from "react";
import AllButtons from "../components/buttons/AllButtons";
import Cards from "../components/cards/Cards";
import Information from "../components/information/Information";
import GamesContext from "../context/GamesContext";
import Loader from "./Loader";

export default function MainContent() {
	const { isLoading } = useContext(GamesContext);

	return (
		<div className="flex flex-col flex-grow gap-4 p-4 bg-base-300">
			<Information />
			<AllButtons />
			{isLoading ? <Loader /> : <Cards />}
		</div>
	);
}
