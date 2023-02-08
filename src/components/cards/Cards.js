import React, { useContext } from "react";
import GamesContext from "../../context/GamesContext";

export default function Cards() {
	const { games, handleCard, currentGames } = useContext(GamesContext);

	return (
		<div className="flex flex-col justify-center my-4 gap-y-4 gap-x-4 sm:flex-row sm:flex-wrap sm:justify-items-around">
			{currentGames.map((game) => {
				return (
					<div
						className="h-auto shadow-xl card sm:w-1/2 md:w-2/5 lg:w-1/4 bg-base-100 image-full card-compact"
						key={game.id}
					>
						<figure>
							<img
								src={
									game.hasOwnProperty("cover")
										? game.cover.url.replace(
												"t_thumb",
												"t_720p"
										  )
										: "https://via.placeholder.com/1280x720"
								}
								alt="Game cover"
							/>
						</figure>
						<div className="m-2 transition-opacity card-body">
							<div className="flex justify-around">
								<a
									href={
										game.hasOwnProperty("websites")
											? game.websites[0].url
											: ""
									}
									className="text-2xl font-bold text-gray-100 card-title link-hover"
									target="_blank"
									rel="noopener noreferrer"
								>
									{game.name}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
										/>
									</svg>
								</a>
							</div>
							<p
								className="mb-2 text-lg text-left text-gray-100 cursor-pointer line-clamp-1 hover:text-gray-300"
								onClick={(e) => handleCard(e)}
							>
								{game.hasOwnProperty("summary")
									? game.summary
									: "No description"}
							</p>
							{/* Platform */}
							<div className="flex flex-wrap gap-2 mb-2 justify-left align-center">
								{game.hasOwnProperty("platforms") ? (
									game.platforms.map((platform, index) => (
										<h3
											className="badge badge-primary"
											key={index}
										>
											{platform.abbreviation}
										</h3>
									))
								) : (
									<h3 className="badge badge-primary">
										No platform
									</h3>
								)}
							</div>
							{/* Genre */}
							<div className="flex flex-wrap gap-2 mb-2 justify-left align-center">
								{game.hasOwnProperty("genres") ? (
									game.genres.map((genre, index) => (
										<h3
											className="badge badge-secondary"
											key={index}
										>
											{genre.name}
										</h3>
									))
								) : (
									<h3 className="badge badge-secondary">
										No genre
									</h3>
								)}
							</div>
							<div className="p-3 text-xl badge badge-accent">
								{game.hasOwnProperty("release_dates")
									? game.release_dates.reduce(
											(prev, current) =>
												prev.date > current.date
													? prev
													: current
									  ).human
									: "TBD"}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
