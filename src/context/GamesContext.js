import React, { createContext, useState, useEffect } from "react";

const GamesContext = createContext();

export const GameProvider = ({ children }) => {
	// Setting Base State
	const [games, setGames] = useState([]);
	const [genres, setGenres] = useState([]);
	const [platforms, setPlatforms] = useState([]);
	const [years, setYears] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const currentMonth = new Date().getMonth() + 1;
	const currentYear = new Date().getFullYear();
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	// Filter states
	const [genreFilters, setGenrefilters] = useState([]);
	const [platformFilters, setPlatformfilters] = useState([]);
	const [monthFilters, setMonthfilters] = useState([]);
	const [yearFilters, setYearfilters] = useState([]);
	// Save first fetch
	const [originalGamesList, setOriginalGamesList] = useState([]);
	// Pagination States
	// React Paginate - https://www.npmjs.com/package/react-paginate
	const [gamesPerPage, setGamesPerPage] = useState(10);
	const [itemOffSet, setItemOffset] = useState(0);
	const [currentPage, setCurrentPage] = useState(0);

	// Fetch Games
	useEffect(() => {
		// Get Data from API
		const fetchDb = async () => {
			const response = await fetch(process.env.REACT_APP_AWS_URL, {
				method: "POST",
				mode: "cors", // no-cors, *cors, same-origin
				cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
				headers: {
					"Content-Type": "application/json",
					"x-api-key": process.env.REACT_APP_AWS_KEY,
				},
				body: `fields name, summary, release_dates.m, release_dates.y, release_dates.date, release_dates.human, genres.name, platforms.abbreviation, websites.url, cover.url; sort date asc; where release_dates.y >= ${currentYear} & release_dates.m >= ${currentMonth}; limit 500;`,
			});
			let data = await response.json();
			sortByDates(data); // Sort games before setting state
			setGames(data); // Set games state
			setOriginalGamesList(data); // Backup of game state
			updateGenresList(data); // Update dynamic genre list
			updatePlatformList(data); // Update dynamic platform list
			updateYearList(data); // Update dynamic year list
			setIsLoading(false); // Change loading state
		};
		fetchDb();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	// Initial Page Load *****************************************
	// Sort games by dates
	const sortByDates = (data) => {
		data.sort((a, b) => comparison(a, b));
	};

	// Utility function
	// return item with highest
	// currently not general util
	// repurpose later
	const comparison = (prev, current) => {
		return prev.release_dates.reduce((prev, current) =>
			prev.date > current.date ? prev : current
		).date >
			current.release_dates.reduce((prev, current) =>
				prev.date > current.date ? prev : current
			).date
			? 1
			: -1;
	};

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

	// Update list to render year button
	// Repurpose into general function for genre and platforms ****
	// Dynamic list of years
	const updateYearList = (games) => {
		let tempSet = new Set();
		games.map((game) =>
			game.hasOwnProperty("release_dates")
				? game.release_dates.map((date) =>
						date.hasOwnProperty("y") ? tempSet.add(date.y) : null
				  )
				: null
		);
		let tempArr = Array.from(tempSet).sort();
		setYears(tempArr);
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

	// After Initial Page Load *****************************************

	// REPURPOSE ALL FILTER FUNCTIONS
	// Set Genre filters
	// combines user selection
	// removes selection if deselected
	const combineGenreFilters = (name) => {
		if (name.checked) {
			setGenrefilters([...genreFilters, name.id]);
		} else if (name.checked === false) {
			const updatedFilters = genreFilters.filter(
				(genreName) => genreName !== name.id
			);
			setGenrefilters(updatedFilters);
		}
	};

	// Set Platform filters
	const combinePlatformFilters = (name) => {
		if (name.checked) {
			setPlatformfilters([...platformFilters, name.id]);
		} else if (name.checked === false) {
			const updatedFilters = platformFilters.filter(
				(platformName) => platformName !== name.id
			);
			setPlatformfilters(updatedFilters);
		}
	};

	// Set Month filters
	const combineMonthFilters = (name) => {
		if (name.checked) {
			setMonthfilters([parseInt(name.value)]);
		}
	};

	// Set Year filters combination
	const combineYearFilters = (name) => {
		if (name.checked) {
			setYearfilters([parseInt(name.id)]);
		}
	};

	// Combine all filters on modal close
	// Check target array exists in games function, Utility function
	const checker = (arr, target) => target.every((item) => arr.includes(item));

	// Combine all filters on modal close
	const updateList = () => {
		// Current date in unix timestamp
		var unixTimestamp = Math.round(+new Date() / 1000);

		// Find games based on filters
		const allFilter = originalGamesList.filter(
			(game) =>
				checker(
					game.hasOwnProperty("genres")
						? game.genres.map((genre) => genre.name)
						: "undefined",
					genreFilters
				) &&
				checker(
					game.platforms.map((platform) => platform.abbreviation),
					platformFilters
				) &&
				checker(
					game.release_dates
						.filter((game) => game.date >= unixTimestamp)
						.map((date) => date.m),
					monthFilters
				) &&
				checker(
					game.release_dates.map((date) => date.y),
					yearFilters
				)
		);
		// Set games list to filtered games
		setGames(allFilter);
		handlePageClick({ selected: 0 });
	};

	// Pagination - https://www.npmjs.com/package/react-paginate
	const endOffset = itemOffSet + gamesPerPage;
	const currentItems = games.slice(itemOffSet, endOffset);
	const pageCount = Math.ceil(games.length / gamesPerPage);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * gamesPerPage) % games.length;
		setItemOffset(newOffset);
		setCurrentPage(event.selected);
		window.scrollTo({
			top: 100,
			left: 0,
			behavior: "smooth",
		});
	};

	// Handle games per page
	const handleGamesPerPage = (event) => {
		setGamesPerPage(parseInt(event.target.value));
	};

	// Pass down to components
	return (
		<GamesContext.Provider
			value={{
				games,
				genres,
				platforms,
				years,
				isLoading,
				currentMonth,
				currentYear,
				months,
				genreFilters,
				platformFilters,
				monthFilters,
				yearFilters,
				currentItems,
				currentPage,
				pageCount,
				gamesPerPage,
				handlePageClick,
				handleCard,
				handleGamesPerPage,
				combineGenreFilters,
				combinePlatformFilters,
				combineMonthFilters,
				combineYearFilters,
				updateList,
			}}
		>
			{children}
		</GamesContext.Provider>
	);
};

export default GamesContext;
