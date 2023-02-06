import React, { createContext, useState, useEffect } from "react";

const GamesContext = createContext();

export const GameProvider = ({ children }) => {
	// Setting State
	const [games, setGames] = useState([]);
	const [genres, setGenres] = useState([]);
	const [platforms, setPlatforms] = useState([]);

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
			updatePlatformList(data);
		};
		fetchDb();
	}, []);

	// Update list to render buttons
	// Dynamic as genre list may change with time
	const updateGenresList = (games) => {
		let tempSet = new Set();
		games.map((game) =>
			game.hasOwnProperty("genres")
				? game.genres.map((genre) => tempSet.add(genre.name))
				: null
		);
		let tempArr = Array.from(tempSet).sort();
		setGenres(tempArr);
	};

	// Update list to render platform button
	// Repurpose into general function for genre and platforms ****
	// Dynamic list of platforms
	const updatePlatformList = (games) => {
		let tempSet = new Set();
		games.map((game) =>
			game.hasOwnProperty("platforms")
				? game.platforms.map((platform) =>
						tempSet.add(platform.abbreviation)
				  )
				: null
		);
		let tempArr = Array.from(tempSet).sort();
		setPlatforms(tempArr);
	};

	// Hide card-body on click
	// and show iamge
	// .card.image-full:before backbground color
	const handleCard = (e) => {
		const item = e.target.parentElement;
		if (item.classList.contains("card-body")) {
			item.classList.toggle("opacity-0");
		}
	};

	// Placeholder function
	// Rename function
	const handleButtons = (e) => {
		console.log(e.value);
	};

	// Pass down to components
	return (
		<GamesContext.Provider
			value={{ games, genres, platforms, handleButtons, handleCard }}
		>
			{children}
		</GamesContext.Provider>
	);
};

export default GamesContext;
