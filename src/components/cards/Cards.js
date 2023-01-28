import React, { useContext } from "react";
import GamesContext from "../../context/GamesContext";

export default function Cards() {
	const { games } = useContext(GamesContext);

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

	return (
		<div className="flex flex-col justify-center my-4 gap-y-4 gap-x-4 sm:flex-row sm:flex-wrap sm:justify-items-around">
			{games.map((game) => {
				return (
					<div className="card sm:w-full md:w-1/4 h-auto bg-base-100 shadow-xl image-full">
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
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title font-bold text-2xl">
								Shoes!
							</h2>
							<p className="text-xl font-bold prose">
								If a dog chews shoes whose shoes does he choose?
							</p>
						</div>
					</div>
				);
			})}

			{games.map((game) => {
				return (
					<div
						className="w-full shadow-xl sm:w-1/3 md:w-2/5 lg:w-1/4 card bg-base-100 card-compact bg-contain"
						key={game.id}
					>
						<div className="card-body">
							<div className="flex justify-around">
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
									<div className="w-24 rounded-lg">
										<img
											src={
												game.hasOwnProperty("cover")
													? game.cover.url.replace(
															"t_thumb",
															"t_cover_big"
													  )
													: "https://via.placeholder.com/264x374"
											}
											alt=""
										/>
									</div>
								</div>
							</div>
							<p className="mb-2 text-lg text-left line-clamp-3">
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
									<h3 className="badge badge-outline badge-primary">
										No platform
									</h3>
								)}
							</div>
							{/* Genre */}
							<div className="flex flex-wrap gap-2 mb-2 justify-left align-center">
								{game.hasOwnProperty("genres") ? (
									game.genres.map((genre, index) => (
										<h3
											className="badge badge-outline"
											key={index}
										>
											{genre.name}
										</h3>
									))
								) : (
									<h3 className="badge badge-outline">
										No genre
									</h3>
								)}
							</div>
							<div className="p-3 text-xl badge badge-outline badge-secondary">
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
