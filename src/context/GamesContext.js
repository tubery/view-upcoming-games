import React, { createContext, useState, useEffect } from "react";

const GamesContext = createContext();

export const GameProvider = ({ children }) => {
	// Setting State
	const [games, setGames] = useState([]);
	const [genres, setGenres] = useState([]);

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
					body: `fields name, summary, release_dates.m, release_dates.y, release_dates.date, release_dates.human, genres.name, platforms.abbreviation, websites.url, cover.url; where release_dates.y >= 2023 & release_dates.m >= 1; sort date asc;`,
				}
			);

			const data = await response.json();
			console.log(data);
			setGames(data);
			updateGenresList(data);
		};
		fetchDb();
	}, []);

	const updateGenresList = (games) => {
		let tempSet = new Set();
		games.map((game) =>
			game.hasOwnProperty("genres")
				? game.genres.map((genre) => tempSet.add(genre.name))
				: null
		);
		let tempArr = Array.from(tempSet);
		setGenres(tempArr);
	};

	return (
		<GamesContext.Provider value={{ games, genres }}>
			{children}
		</GamesContext.Provider>
	);
};

export default GamesContext;
