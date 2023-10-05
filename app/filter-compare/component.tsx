"use client";

import { useState } from "react";

export default function Component() {
	const [sourceColor, setSourceColor] = useState("eee");
	const [targetColor, setTargetColor] = useState("aaa");

	return (
		<div>
			<div className="flex gap-3">
				<div className="flex flex-col">
					<label htmlFor="source" className="text-xs">Source color</label>
					<input
						type="text"
						name="source"
						id="source"
						placeholder="123456"
						maxLength={6}
						className="bg-transparent hover:bg-neutral-900 border border-neutral-700 text-neutral-50 placeholder:text-neutral"
						onChange={(e) => {
							(e.target.value.length === 3 || e.target.value.length === 6) && setSourceColor(e.target.value);
						}}
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="target" className="text-xs">Target color</label>
					<input
						type="text"
						name="target"
						id="target"
						placeholder="ABCDEF"
						maxLength={6}
						className="bg-transparent hover:bg-neutral-900 border border-neutral-700 text-neutral-50 placeholder:text-neutral"
						onChange={(e) => {
							(e.target.value.length === 3 || e.target.value.length === 6) && setTargetColor(e.target.value);
						}}
					/>
				</div>
			</div>
			<div className="flex">
				<div style={{ backgroundColor: `#${sourceColor}` }} className="w-14 h-14" />
				<div style={{ backgroundColor: `#${targetColor}` }} className="w-14 h-14" />
			</div>
		</div>
	);
}
