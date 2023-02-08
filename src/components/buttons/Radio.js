import React from "react";

export default function Radio({ value, func, id }) {
	return (
		<div className="form-control">
			<label className="flex-grow cursor-pointer label">
				<span className="px-2 text-lg label-text ">{id}</span>
				<input
					type="radio"
					name="radio-10"
					className="radio"
					onChange={(e) => func(e.target)}
					value={value}
					id={id}
				/>
			</label>
		</div>
	);
}
