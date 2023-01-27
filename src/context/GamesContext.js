import React, { createContext, useState, useEffect } from "react";

const GamesContext = createContext();

export const GameProvider = ({ children }) => {
	// Setting State
	const [games, setGames] = useState([]);
	const [localGames, setLocalGames] = useState([]);

	// Fetch Games
	useEffect(() => {
		// Get Data from API
		const fetchDb = async () => {
			const response = await fetch(
				"https://hg3xf9f66l.execute-api.us-west-2.amazonaws.com/production/v4/games",
				{
					method: "POST",
					mode: "cors", // no-cors, *cors, same-origin
					cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
					headers: {
						"Content-Type": "application/json",
						"x-api-key": "HS0Fvb4VSm7VLGTLFlDzN55pdZGS0sFE5HtOiuej",
					},
					body: `fields name, summary, release_dates.m, release_dates.y, release_dates.date, release_dates.human, genres.name, platforms.abbreviation, websites.url, cover.url; limit 10;`,
				}
			);
			// where release_dates.date > 1651154312;
			const data = await response.json();
			console.log(data);
			setGames(data);
		};
		fetchDb();
	}, []);

	return (
		<GamesContext.Provider value={{ games, localGames }}>
			{children}
		</GamesContext.Provider>
	);
};

export default GamesContext;
