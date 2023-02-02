import React, { useContext } from "react";
import GamesContext from "../../context/GamesContext";

export default function Cards() {
	const { games } = useContext(GamesContext);

	return (
		<div className="flex flex-col justify-center my-4 gap-y-4 gap-x-4 sm:flex-row sm:flex-wrap sm:justify-items-around">
			{games.map((game) => {
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
										: "https://via.placeholder.com/264x374"
								}
								alt="Game cover"
							/>
						</figure>
						<div className="card-body">
							{/* <h2 className="text-2xl font-bold text-white card-title">
								Shoes!
							</h2>
							<p className="text-white">
								If a dog chews shoes whose shoes does he choose?
							</p> */}
							<div className="flex justify-around">
								<a
									href={
										game.hasOwnProperty("websites")
											? game.websites[0].url
											: ""
									}
									className="text-2xl font-bold text-white card-title link-hover"
									target="_blank"
									rel="noopener noreferrer"
								>
									{game.name}
								</a>
							</div>
							<p className="mb-2 text-lg text-left line-clamp-1">
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
