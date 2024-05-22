"use client";
import { useEffect, useState } from "react";

interface ColorChannels {
	r: number;
	g: number;
	b: number;
	a: number;
}

export default function HexComponent() {
	const [sourceColor, setSourceColor] = useState("123456");
	const [colorChannels, setColorChannels] = useState<ColorChannels>({ r: 0, g: 0, b: 0, a: 1 });

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
		<div className="grid grid-cols-2 gap-9">
			<div className="flex flex-col gap-6">
				<div>
					<label htmlFor="source" className="text-xs">
						HEX
					</label>
					<div className="flex items-center text-neutral-50 font-display text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
						<span>#</span>
						<input
							type="text"
							name="source"
							id="source"
							placeholder="123456ff"
							maxLength={8}
							className="bg-transparent placeholder:text-neutral-600 w-full focus:outline-none"
							onChange={(e) => {
								if (
									e.target.value.length === 3 ||
									e.target.value.length === 4 ||
									e.target.value.length === 6 ||
									e.target.value.length === 8
								) {
									setSourceColor(e.target.value);
									setColorChannels(hexToRgba(e.target.value));
								}
							}}
						/>
					</div>
				</div>
				<div
					className="relative w-full h-12 lg:h-24 rounded-lg overflow-clip bg-repeat"
					style={{
						backgroundImage: `url('data:image/svg+xml,<svg width="8px" height="8px" viewBox="0 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect x="0" y="0" width="4" height="4" style="fill:rgb(34,34,34);"/><g transform="matrix(1,0,0,1,4,4)"><rect x="0" y="0" width="4" height="4" style="fill:rgb(34,34,34);"/></g></svg>')`,
					}}
				>
					<div
						style={{
							position: "absolute",
							width: "100%",
							height: "100%",
							backgroundColor: `#${sourceColor}`,
						}}
					/>
				</div>
			</div>
			<div className="flex flex-col gap-9">
				<div>
					<label htmlFor="target" className="text-xs">
						RGB
					</label>
					<div className="flex items-center text-neutral-50 font-display text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
						rgb{(sourceColor.length === 4 || sourceColor.length === 8) && "a"}({colorChannels.r},{colorChannels.g},
						{colorChannels.b}
						{colorChannels.a != 1 && `,${colorChannels.a.toFixed(3)}`})
					</div>
				</div>
				<div>
					<label htmlFor="target" className="text-xs">
						HSL
					</label>
					<div className="flex items-center text-neutral-50 font-display text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
						hsl{(sourceColor.length === 4 || sourceColor.length === 8) && "a"}()
					</div>
				</div>
			</div>
		</div>
	);
}
