"use client";
import { useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import Button from "components/Button";

export default function Component() {
	const [sourceColor, setSourceColor] = useState("eee");
	const [targetColor, setTargetColor] = useState("666"); // cry about it

	const [brightness, setBrightness] = useState([100]);
	const [contrast, setContrast] = useState([100]);
	const [hueRotate, setHueRotate] = useState([0]);
	const [invert, setInvert] = useState([0]);
	const [saturate, setSaturate] = useState([100]);
	const [sepia, setSepia] = useState([0]);

	const [focus, setFocus] = useState("");

	const allFilters = `brightness(${brightness}%) contrast(${contrast}%) hue-rotate(${hueRotate}deg) invert(${invert}%) saturate(${saturate}%) sepia(${sepia}%)`;

	return (
		<div className="grid grid-cols-2 gap-6">
			<div>
				<label htmlFor="source" className="text-xs">
					Source color
				</label>
				<div className="flex items-center text-neutral-50 font-display text-2xl md:text-3xl lg:text-6xl">
					#
					<input
						type="text"
						name="source"
						id="source"
						placeholder="123456"
						maxLength={6}
						className="bg-transparent placeholder:text-neutral-600 w-full focus:outline-none"
						onChange={(e) => {
							(e.target.value.length === 3 || e.target.value.length === 6) && setSourceColor(e.target.value);
						}}
					/>
				</div>
			</div>
			<div>
				<label htmlFor="target" className="text-xs">
					Target color
				</label>
				<div className="flex items-center text-neutral-50 font-display text-2xl md:text-3xl lg:text-6xl">
					#
					<input
						type="text"
						name="target"
						id="target"
						placeholder="ABCDEF"
						maxLength={6}
						className="bg-transparent placeholder:text-neutral-600 w-full focus:outline-none"
						onChange={(e) => {
							(e.target.value.length === 3 || e.target.value.length === 6) && setTargetColor(e.target.value);
						}}
					/>
				</div>
			</div>
			<div className="grid grid-cols-2 col-span-2">
				<div
					style={{
						backgroundColor: `#${sourceColor}`,
						filter: allFilters,
					}}
					className="w-full h-24 rounded-l-lg"
				/>
				<div style={{ backgroundColor: `#${targetColor}` }} className="w-full h-24 rounded-r-lg" />
			</div>
			<div className="flex gap-3 col-span-2 bg-neutral-900 rounded-lg px-4 py-3">
				<p className="flex-grow">
					filter:{" "}
					<span
						className={`${
							focus === "brightness" || focus === "" ? "text-neutral-50" : "text-neutral"
						} duration-100`}
					>
						brightness({brightness}%)
					</span>{" "}
					<span
						className={`${
							focus === "contrast" || focus === "" ? "text-neutral-50" : "text-neutral"
						} duration-100`}
					>
						contrast({contrast}%)
					</span>{" "}
					<span
						className={`${
							focus === "hueRotate" || focus === "" ? "text-neutral-50" : "text-neutral"
						} duration-100`}
					>
						hue-rotate({hueRotate}deg)
					</span>{" "}
					<span
						className={`${
							focus === "invert" || focus === "" ? "text-neutral-50" : "text-neutral"
						} duration-100`}
					>
						invert({invert}%)
					</span>{" "}
					<span
						className={`${
							focus === "saturate" || focus === "" ? "text-neutral-50" : "text-neutral"
						} duration-100`}
					>
						saturate({saturate}%)
					</span>{" "}
					<span
						className={`${
							focus === "sepia" || focus === "" ? "text-neutral-50" : "text-neutral"
						} duration-100`}
					>
						sepia({sepia}%)
					</span>{" "}
				</p>
				<i
					className="ri-clipboard-line cursor-pointer hover:text-neutral-50 duration-100"
					onClick={() => navigator.clipboard.writeText(`filter: ${allFilters}`)}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="brightness" className="text-xs">
					Brightness
				</label>
				<Slider.Root
					name="brightness"
					className="group relative flex items-center select-none touch-none w-full h-5 cursor-pointer"
					value={brightness}
					onValueChange={(newBrightness) => setBrightness(newBrightness)}
					defaultValue={brightness}
					max={500}
					step={1}
					onMouseEnter={() => setFocus("brightness")}
					onMouseLeave={() => setFocus("")}
				>
					<Slider.Track className="bg-blue-900 relative grow rounded-full h-1 group-hover:h-2 duration-100">
						<Slider.Range className="absolute bg-blue-600 rounded-full h-full" />
					</Slider.Track>
					<Slider.Thumb
						className="block bg-blue w-3 h-3 group-hover:scale-150 origin-center rounded-full focus:outline-none duration-100"
						aria-label="Brightness"
					/>
				</Slider.Root>
			</div>
			<div className="flex flex-col">
				<label htmlFor="contrast" className="text-xs">
					Contrast
				</label>
				<Slider.Root
					name="contrast"
					className="group relative flex items-center select-none touch-none w-full h-5 cursor-pointer"
					value={contrast}
					onValueChange={(newContrast) => setContrast(newContrast)}
					defaultValue={contrast}
					max={500}
					step={1}
					onMouseEnter={() => setFocus("contrast")}
					onMouseLeave={() => setFocus("")}
				>
					<Slider.Track className="bg-blue-900 relative grow rounded-full h-1 group-hover:h-2 duration-100">
						<Slider.Range className="absolute bg-blue-600 rounded-full h-full" />
					</Slider.Track>
					<Slider.Thumb
						className="block bg-blue w-3 h-3 group-hover:scale-150 origin-center rounded-full focus:outline-none duration-100"
						aria-label="Contrast"
					/>
				</Slider.Root>
			</div>
			<div className="flex flex-col">
				<label htmlFor="hueRotate" className="text-xs">
					Hue rotate
				</label>
				<Slider.Root
					name="hueRotate"
					className="group relative flex items-center select-none touch-none w-full h-5 cursor-pointer"
					value={hueRotate}
					onValueChange={(newHueRotate) => setHueRotate(newHueRotate)}
					defaultValue={hueRotate}
					min={-180}
					max={180}
					step={1}
					onMouseEnter={() => setFocus("hueRotate")}
					onMouseLeave={() => setFocus("")}
				>
					<Slider.Track className="bg-blue-900 relative grow rounded-full h-1 group-hover:h-2 duration-100">
						<Slider.Range className="absolute bg-blue-600 rounded-full h-full" />
					</Slider.Track>
					<Slider.Thumb
						className="block bg-blue w-3 h-3 group-hover:scale-150 origin-center rounded-full focus:outline-none duration-100"
						aria-label="Hue rotate"
					/>
				</Slider.Root>
			</div>
			<div className="flex flex-col">
				<label htmlFor="invert" className="text-xs">
					Invert
				</label>
				<Slider.Root
					name="invert"
					className="group relative flex items-center select-none touch-none w-full h-5 cursor-pointer"
					value={invert}
					onValueChange={(newInvert) => setInvert(newInvert)}
					defaultValue={invert}
					max={100}
					step={1}
					onMouseEnter={() => setFocus("invert")}
					onMouseLeave={() => setFocus("")}
				>
					<Slider.Track className="bg-blue-900 relative grow rounded-full h-1 group-hover:h-2 duration-100">
						<Slider.Range className="absolute bg-blue-600 rounded-full h-full" />
					</Slider.Track>
					<Slider.Thumb
						className="block bg-blue w-3 h-3 group-hover:scale-150 origin-center rounded-full focus:outline-none duration-100"
						aria-label="Invert"
					/>
				</Slider.Root>
			</div>
			<div className="flex flex-col">
				<label htmlFor="invert" className="text-xs">
					Saturate
				</label>
				<Slider.Root
					name="saturate"
					className="group relative flex items-center select-none touch-none w-full h-5 cursor-pointer"
					value={saturate}
					onValueChange={(newSaturate) => setSaturate(newSaturate)}
					defaultValue={saturate}
					max={500}
					step={1}
					onMouseEnter={() => setFocus("saturate")}
					onMouseLeave={() => setFocus("")}
				>
					<Slider.Track className="bg-blue-900 relative grow rounded-full h-1 group-hover:h-2 duration-100">
						<Slider.Range className="absolute bg-blue-600 rounded-full h-full" />
					</Slider.Track>
					<Slider.Thumb
						className="block bg-blue w-3 h-3 group-hover:scale-150 origin-center rounded-full focus:outline-none duration-100"
						aria-label="Saturate"
					/>
				</Slider.Root>
			</div>
			<div className="flex flex-col">
				<label htmlFor="invert" className="text-xs">
					Sepia
				</label>
				<Slider.Root
					name="sepia"
					className="group relative flex items-center select-none touch-none w-full h-5 cursor-pointer"
					value={sepia}
					onValueChange={(newSepia) => setSepia(newSepia)}
					defaultValue={sepia}
					max={100}
					step={1}
					onMouseEnter={() => setFocus("sepia")}
					onMouseLeave={() => setFocus("")}
				>
					<Slider.Track className="bg-blue-900 relative grow rounded-full h-1 group-hover:h-2 duration-100">
						<Slider.Range className="absolute bg-blue-600 rounded-full h-full" />
					</Slider.Track>
					<Slider.Thumb
						className="block bg-blue w-3 h-3 group-hover:scale-150 origin-center rounded-full focus:outline-none duration-100"
						aria-label="Sepia"
					/>
				</Slider.Root>
			</div>
			<div className="grid col-span-2 justify-end">
				<Button
					onClick={() => {
						setBrightness([100]);
						setContrast([100]);
						setHueRotate([0]);
						setInvert([0]);
						setSaturate([100]);
						setSepia([0]);
					}}
				>
					<i className="ri-loop-left-line" />
					Reset
				</Button>
			</div>
		</div>
	);
}
