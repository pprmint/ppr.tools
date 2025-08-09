"use client";
import { useState } from "react";

interface ColorChannels {
	r: number;
	g: number;
	b: number;
	a: number;
}

export default function RgbComponent() {
	const [sourceColor, setSourceColor] = useState<ColorChannels>({ r: 0, g: 0, b: 0, a: 1 });
	const [error, setError] = useState(false);
	const [hexHovered, setHexHovered] = useState(false);

	const rgbaToHex = `${("00" + sourceColor.r.toString(16)).slice(-2)}${("00" + sourceColor.g.toString(16)).slice(-2)}${(
		"00" + sourceColor.b.toString(16)
	).slice(-2)}${sourceColor.a != 1 ? ("00" + Math.round(sourceColor.a * 255).toString(16)).slice(-2) : ""}`;

	return (
		<section>
			<div className="flex gap-6 mb-9">
				<div className="w-full">
					<label htmlFor="source" className="text-xs">
						RGB
					</label>
					<div
						className={`flex items-center ${
							error ? "text-red" : "text-neutral-50"
						} font-display text-2xl md:text-3xl lg:text-4xl xl:text-6xl duration-100`}
					>
						<span>rgba(</span>
						<input
							type="number"
							min={0}
							max={255}
							step={1}
							name="source"
							id="source"
							placeholder="255"
							size={2}
							className="bg-transparent placeholder:text-neutral-600 focus:outline-none invalid:text-red border-b-2 border-b-neutral-900 focus:border-b-blue invalid:border-b-red"
							style={{ appearance: "textfield" }}
							onChange={(e) => {
								const value = parseFloat(e.target.value);
								if (value >= 0 && value <= 255) {
									setError(false);
									setSourceColor({ r: value, g: sourceColor.g, b: sourceColor.b, a: sourceColor.a });
								} else {
									setError(true);
								}
							}}
						/>
						,
						<input
							type="number"
							min={0}
							max={255}
							step={1}
							name="source"
							id="source"
							placeholder="255"
							size={2}
							className="bg-transparent placeholder:text-neutral-600 focus:outline-none invalid:text-red border-b-2 border-b-neutral-900 focus:border-b-blue invalid:border-b-red"
							style={{ appearance: "textfield" }}
							onChange={(e) => {
								const value = parseFloat(e.target.value);
								if (value >= 0 && value <= 255) {
									setError(false);
									setSourceColor({ r: sourceColor.r, g: value, b: sourceColor.b, a: sourceColor.a });
								} else {
									setError(true);
								}
							}}
						/>
						,
						<input
							type="number"
							min={0}
							max={255}
							step={1}
							name="source"
							id="source"
							placeholder="255"
							size={2}
							className="bg-transparent placeholder:text-neutral-600 focus:outline-none invalid:text-red border-b-2 border-b-neutral-900 focus:border-b-blue invalid:border-b-red"
							style={{ appearance: "textfield" }}
							onChange={(e) => {
								const value = parseFloat(e.target.value);
								if (value >= 0 && value <= 255) {
									setError(false);
									setSourceColor({ r: sourceColor.r, g: sourceColor.g, b: value, a: sourceColor.a });
								} else {
									setError(true);
								}
							}}
						/>
						,
						<input
							type="number"
							min={0}
							max={1}
							step={0.001}
							name="source"
							id="source"
							placeholder="0.123"
							size={4}
							className="bg-transparent placeholder:text-neutral-600 focus:outline-none invalid:text-red border-b-2 border-b-neutral-900 focus:border-b-blue invalid:border-b-red"
							style={{ appearance: "textfield" }}
							onChange={(e) => {
								const value = parseFloat(e.target.value);
								if (value >= 0 && value <= 255) {
									setError(false);
									setSourceColor({ r: sourceColor.r, g: sourceColor.g, b: sourceColor.b, a: value });
								} else {
									setError(true);
								}
							}}
						/>
						)
					</div>
				</div>
				<div
					className={`relative w-full h-12 lg:h-24 rounded-lg overflow-clip bg-repeat ${
						error && "opacity-50 pointer-events-none"
					}`}
					style={{
						backgroundImage: `url('data:image/svg+xml,<svg width="8px" height="8px" viewBox="0 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect x="0" y="0" width="4" height="4" style="fill:rgb(34,34,34);"/><g transform="matrix(1,0,0,1,4,4)"><rect x="0" y="0" width="4" height="4" style="fill:rgb(34,34,34);"/></g></svg>')`,
					}}
				>
					<div
						className="absolute inset-0 duration-100"
						style={{
							backgroundColor: `rgba(${sourceColor.r},${sourceColor.g},${sourceColor.b},${sourceColor.a})`,
						}}
					/>
				</div>
			</div>
			<div className="mb-6">
				<label htmlFor="target" className="text-xs">
					HEX
				</label>
				<div
					className={`flex items-center font-display text-2xl md:text-3xl lg:text-4xl xl:text-6xl ${
						error && "opacity-50 pointer-events-none"
					} duration-100`}
				>
					<span
						className={`${
							hexHovered
								? "text-neutral-50 bg-neutral-800 active:opacity-75 active:duration-75 cursor-pointer"
								: "bg-neutral-900"
						} rounded-lg px-4 py-3 duration-100`}
					>
						<span
							onMouseEnter={() => setHexHovered(true)}
							onMouseLeave={() => setHexHovered(false)}
							onClick={() => navigator.clipboard.writeText(`#${rgbaToHex}`)}
						>
							#
						</span>
						<span
							onClick={() => navigator.clipboard.writeText(rgbaToHex)}
							className="text-neutral-50 hover:text-blue hover:bg-neutral-800 rounded-md cursor-pointer active:opacity-75 duration-100 active:duration-75"
						>
							{rgbaToHex}
						</span>
					</span>
				</div>
			</div>
		</section>
	);
}
