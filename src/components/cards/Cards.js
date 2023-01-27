import React, { useContext } from "react";
import GamesContext from "../../context/GamesContext";

export default function Cards() {
	const { games } = useContext(GamesContext);

	return (
		<div className="flex flex-col justify-center gap-y-4 gap-x-4 sm:flex-row sm:flex-wrap sm:justify-items-around">
			{games.map((game) => {
				return (
					<div
						className="w-full shadow-xl sm:w-1/3 md:w-2/5 lg:w-1/4 card bg-base-100 card-compact"
						key={game.id}
					>
						<div className="card-body">
							<div className="flex justify-between">
								<a
									href={
										game.hasOwnProperty("websites")
											? game.websites[0].url
											: ""
									}
									className="text-2xl card-title link-hover"
									target="_blank"
									rel="noopener noreferrer"
								>
									{game.name}
								</a>
								<div className="p-2 avatar">
									<div className="rounded bg-slate-400">
										<img
											src={
												game.hasOwnProperty("cover")
													? game.cover.url
													: "http://via.placeholder.com/90x90"
											}
											alt=""
										/>
									</div>
								</div>
							</div>
							<p className="mb-2 text-lg text-left truncate ...">
								{game.hasOwnProperty("summary")
									? game.summary
									: "No description"}
							</p>
							{/* Platform */}
							<div className="flex flex-wrap gap-2 mb-2 justify-left align-center">
								{game.hasOwnProperty("platforms") ? (
									game.platforms.map((platform, index) => (
										<h3
											className="badge badge-outline badge-primary"
											key={index}
										>
											{platform.abbreviation}
										</h3>
									))
								) : (
									<h3>No platform</h3>
								)}
							</div>
							{/* Genre */}
							<div className="flex flex-wrap gap-2 mb-2 justify-left align-center">
								{game.hasOwnProperty("genres")
									? game.genres.map((genre, index) => (
											<h3
												className="badge badge-outline"
												key={index}
											>
												{genre.name}
											</h3>
									  ))
									: "No genre"}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}