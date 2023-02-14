import React from "react";
import GenreButton from "./GenreButton";
import MonthButton from "./MonthButton";
import ClearButton from "./ClearButton";
import PlatformButton from "./PlatformButton";
import YearButton from "./YearButton";
import ItemsPerPage from "./ItemsPerPage";

// Re construct buttons into reusable componenent containing checkbox

export default function AllButtons() {
	return (
		<div className="flex flex-wrap justify-center gap-4 my-2">
			<PlatformButton />
			<GenreButton />
			<MonthButton />
			<YearButton />
			<ItemsPerPage />
			<ClearButton />
		</div>
	);
}
