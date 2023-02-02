import React from "react";

// Reusable componenet for modals

export default function Checkbox({ value, func, id }) {
	return (
		<div>
			<label className="flex-grow cursor-pointer label">
				<span className="px-2 text-lg label-text ">{value}</span>
				<input
					type="checkbox"
					className="checkbox"
					onChange={(e) => func(e.target)}
					value={value}
					id={id}
				/>
			</label>
		</div>
	);
}
