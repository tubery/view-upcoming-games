import React from "react";

export default function Backup() {
	return (
		<div>
			{games.map((game) => {
				return (
					<div
						className="w-full bg-contain shadow-xl sm:w-1/3 md:w-2/5 lg:w-1/4 card bg-base-100 card-compact"
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
