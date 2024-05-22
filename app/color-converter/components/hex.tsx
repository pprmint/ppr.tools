"use client";
import { useState } from "react";

interface ColorChannels {
	r: number;
	g: number;
	b: number;
	a: number;
}

export default function HexComponent() {
	const [sourceColor, setSourceColor] = useState("00000000");
	const [colorChannels, setColorChannels] = useState<ColorChannels>({ r: 0, g: 0, b: 0, a: 1 });
	const [rgbaHovered, setRgbaHovered] = useState(false);
	const [error, setError] = useState(false);

	const hexToRgba = (hex: string): ColorChannels => {
		let r = 0,
			g = 0,
			b = 0,
			a = 1;

		if (hex.length === 3) {
			r = parseInt(hex[0] + hex[0], 16);
			g = parseInt(hex[1] + hex[1], 16);
			b = parseInt(hex[2] + hex[2], 16);
		} else if (hex.length === 4) {
			r = parseInt(hex[0] + hex[0], 16);
			g = parseInt(hex[1] + hex[1], 16);
			b = parseInt(hex[2] + hex[2], 16);
			a = parseInt(hex[3] + hex[3], 16) / 255;
		} else if (hex.length === 6) {
			r = parseInt(hex.substring(0, 2), 16);
			g = parseInt(hex.substring(2, 4), 16);
			b = parseInt(hex.substring(4, 6), 16);
		} else if (hex.length === 8) {
			r = parseInt(hex.substring(0, 2), 16);
			g = parseInt(hex.substring(2, 4), 16);
			b = parseInt(hex.substring(4, 6), 16);
			a = parseInt(hex.substring(6, 8), 16) / 255;
		}

		return { r, g, b, a };
	};

	return (
		<section>
			<div className="flex gap-6 mb-9">
				<div className="w-full">
					<label htmlFor="source" className="text-xs">
						HEX
					</label>
					<div className={`flex items-center ${error ? "text-red" : "text-neutral-50"} font-display text-2xl md:text-3xl lg:text-4xl xl:text-6xl duration-100`}>
						<span>#</span>
						<input
							type="text"
							name="source"
							id="source"
							placeholder="123456ff"
							maxLength={8}
							className="bg-transparent placeholder:text-neutral-600 w-full focus:outline-none"
							onChange={(e) => {
								const value = e.target.value;
								const hexRegex = /^[0-9A-Fa-f]*$/;
								if (hexRegex.test(value)) {
									setError(false);
									if (
										value.length === 3 ||
										value.length === 4 ||
										value.length === 6 ||
										value.length === 8
									) {
										setSourceColor(e.target.value);
										setColorChannels(hexToRgba(e.target.value));
									}
								} else {
									setError(true);
								}
							}}
						/>
					</div>
				</div>
				<div
					className={`relative w-full h-12 lg:h-24 rounded-lg overflow-clip bg-repeat ${error && "opacity-50 pointer-events-none"}`}
					style={{
						backgroundImage: `url('data:image/svg+xml,<svg width="8px" height="8px" viewBox="0 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect x="0" y="0" width="4" height="4" style="fill:rgb(34,34,34);"/><g transform="matrix(1,0,0,1,4,4)"><rect x="0" y="0" width="4" height="4" style="fill:rgb(34,34,34);"/></g></svg>')`,
					}}
				>
					<div
						className="absolute inset-0 duration-100"
						style={{
							backgroundColor: `#${sourceColor}`,
						}}
					/>
				</div>
			</div>
			<div className="mb-6">
				<label htmlFor="target" className="text-xs">
					RGB
				</label>
				<div className={`flex items-center font-display text-2xl md:text-3xl lg:text-4xl xl:text-6xl ${error && "opacity-50 pointer-events-none"} duration-100`}>
					<span
						className={`${
							rgbaHovered
								? "text-neutral-50 bg-neutral-800 active:opacity-75 active:duration-75 cursor-pointer"
								: "bg-neutral-900"
						} rounded-lg px-4 py-3 duration-100`}
					>
						<span
							onMouseEnter={() => setRgbaHovered(true)}
							onMouseLeave={() => setRgbaHovered(false)}
							onClick={() =>
								navigator.clipboard.writeText(
									`rgb${colorChannels.a != 1 ? "a" : ""}(${colorChannels.r},${colorChannels.g},${
										colorChannels.b
									}${colorChannels.a != 1 ? `,${parseFloat(colorChannels.a.toFixed(3))}` : ""})`
								)
							}
						>
							rgb{colorChannels.a != 1 && "a"}
						</span>
						(
						<span
							onClick={() => navigator.clipboard.writeText(String(colorChannels.r))}
							className="text-neutral-50 hover:text-red hover:bg-neutral-800 rounded-md cursor-pointer active:opacity-75 duration-100 active:duration-75"
						>
							{colorChannels.r}
						</span>
						,
						<span
							onClick={() => navigator.clipboard.writeText(String(colorChannels.g))}
							className="text-neutral-50 hover:text-green hover:bg-neutral-800 rounded-md cursor-pointer active:opacity-75 duration-100 active:duration-75"
						>
							{colorChannels.g}
						</span>
						,
						<span
							onClick={() => navigator.clipboard.writeText(String(colorChannels.b))}
							className="text-neutral-50 hover:text-blue hover:bg-neutral-800 rounded-md cursor-pointer active:opacity-75 duration-100 active:duration-75"
						>
							{colorChannels.b}
						</span>
						{colorChannels.a != 1 && (
							<>
								,
								<span
									onClick={() =>
										navigator.clipboard.writeText(String(parseFloat(colorChannels.a.toFixed(3))))
									}
									className="text-neutral-50 hover:text-neutral-400 hover:bg-neutral-800 rounded-md cursor-pointer active:opacity-75 duration-100 active:duration-75"
								>
									{parseFloat(colorChannels.a.toFixed(3))}
								</span>
							</>
						)}
						)
					</span>
				</div>
			</div>
		</section>
	);
}
