"use client";
import { useState } from "react";
import Draggable from "react-draggable";
import * as Slider from "@radix-ui/react-slider";

export default function Component() {
	const [positionA, setPositionA] = useState({ x: 200, y: 560 });
	const [positionB, setPositionB] = useState({ x: 200, y: 240 });

	const cubicBezier = `${positionA.x / 400}, ${parseFloat((1 - (positionA.y - 200) / 400).toFixed(2))}, ${
		positionB.x / 400
	}, ${parseFloat((1 - (positionB.y - 200) / 400).toFixed(2))}`;

	const [duration, setDuration] = useState([0.5]);
	const [transitionDisabled, setTransitionDisabled] = useState(true);

	const Examples = [
		{
			name: "ease-in sine",
			positionA: { x: 48, y: 600 },
			positionB: { x: 156, y: 600 },
		},
		{
			name: "ease-out sine",
			positionA: { x: 244, y: 200 },
			positionB: { x: 352, y: 200 },
		},
		{
			name: "ease-in-out sine",
			positionA: { x: 148, y: 600 },
			positionB: { x: 248, y: 200 },
		},
	];

	async function handleEasingClickA(newPosition: { x: number; y: number }) {
		setTransitionDisabled(false);
		setPositionA({ x: newPosition.x, y: newPosition.y });
		setTimeout(() => {
			setTransitionDisabled(true);
		}, 300);
	}
	async function handleEasingClickB(newPosition: { x: number; y: number }) {
		setTransitionDisabled(false);
		setPositionB({ x: newPosition.x, y: newPosition.y });
		setTimeout(() => {
			setTransitionDisabled(true);
		}, 300);
	}

	return (
		<div className="flex flex-col 2xl:flex-row gap-9">
			<div className="flex w-max">
				<div className="relative w-[424px] h-[824px]">
					<svg width={400} height={800} xmlns="http://www.w3.org/2000/svg" className="group absolute left-0">
						<g id="backdrop">
							<rect x={1} y={201} width={398} height={398} fill="transparent" strokeWidth={2} stroke="#222" />
							<rect
								x={0.5}
								y={0.5}
								width={399}
								height={799}
								fill="transparent"
								strokeWidth={1}
								stroke="#222"
							/>
							<g id="vertical">
								<path
									d="M40.5,200 40.5,600"
									fill="transparent"
									stroke="#222"
									strokeWidth={1}
									strokeDasharray={4}
									strokeDashoffset={1.5}
								/>
								<path
									d="M80.5,200 80.5,600"
									fill="transparent"
									stroke="#222"
									strokeWidth={1}
									strokeDasharray={4}
									strokeDashoffset={1.5}
								/>
								<path
									d="M120.5,200 120.5,600"
									fill="transparent"
									stroke="#222"
									strokeWidth={1}
									strokeDasharray={4}
									strokeDashoffset={1.5}
								/>
								<path
									d="M160.5,200 160.5,600"
									fill="transparent"
									stroke="#222"
									strokeWidth={1}
									strokeDasharray={4}
									strokeDashoffset={1.5}
								/>
								<path
									d="M200.5,200 200.5,600"
									fill="transparent"
									stroke="#222"
									strokeWidth={1}
									strokeDasharray={4}
									strokeDashoffset={1.5}
								/>
								<path
									d="M240.5,200 240.5,600"
									fill="transparent"
									stroke="#222"
									strokeWidth={1}
									strokeDasharray={4}
									strokeDashoffset={1.5}
								/>
								<path
									d="M280.5,200 280.5,600"
									fill="transparent"
									stroke="#222"
									strokeWidth={1}
									strokeDasharray={4}
									strokeDashoffset={1.5}
								/>
								<path
									d="M320.5,200 320.5,600"
									fill="transparent"
									stroke="#222"
									strokeWidth={1}
									strokeDasharray={4}
									strokeDashoffset={1.5}
								/>
								<path
									d="M360.5,200 360.5,600"
									fill="transparent"
									stroke="#222"
									strokeWidth={1}
									strokeDasharray={4}
									strokeDashoffset={1.5}
								/>
							</g>
							<g id="horizontal">
								<path
									d="M0,240.5 400,240.5"
									fill="transparent"
									stroke="#222"
									strokeWidth={1}
									strokeDasharray={4}
									strokeDashoffset={1.5}
								/>
								<path
									d="M0,280.5 400,280.5"
									fill="transparent"
									stroke="#222"
									strokeWidth={1}
									strokeDasharray={4}
									strokeDashoffset={1.5}
								/>
								<path
									d="M0,320.5 400,320.5"
									fill="transparent"
									stroke="#222"
									strokeWidth={1}
									strokeDasharray={4}
									strokeDashoffset={1.5}
								/>
								<path
									d="M0,360.5 400,360.5"
									fill="transparent"
									stroke="#222"
									strokeWidth={1}
									strokeDasharray={4}
									strokeDashoffset={1.5}
								/>
								<path
									d="M0,400.5 400,400.5"
									fill="transparent"
									stroke="#222"
									strokeWidth={1}
									strokeDasharray={4}
									strokeDashoffset={1.5}
								/>
								<path
									d="M0,440.5 400,440.5"
									fill="transparent"
									stroke="#222"
									strokeWidth={1}
									strokeDasharray={4}
									strokeDashoffset={1.5}
								/>
								<path
									d="M0,480.5 400,480.5"
									fill="transparent"
									stroke="#222"
									strokeWidth={1}
									strokeDasharray={4}
									strokeDashoffset={1.5}
								/>
								<path
									d="M0,520.5 400,520.5"
									fill="transparent"
									stroke="#222"
									strokeWidth={1}
									strokeDasharray={4}
									strokeDashoffset={1.5}
								/>
								<path
									d="M0,560.5 400,560.5"
									fill="transparent"
									stroke="#222"
									strokeWidth={1}
									strokeDasharray={4}
									strokeDashoffset={1.5}
								/>
							</g>
						</g>
						<g id="draw">
							<path
								d={`M0,600 C${positionA.x},${positionA.y} ${positionB.x},${positionB.y} 400,200`}
								stroke="#eee"
								strokeWidth={2}
								strokeLinecap="round"
								fill="transparent"
								className={`${
									transitionDisabled ? "duration-0" : "duration-300"
								} ease-[cubic-bezier(0.65,0,0.35,1)]`}
							/>
							<path
								d={`M0,600 ${positionA.x + 0.5},${positionA.y + 0.5}`}
								stroke="#1181d6"
								strokeWidth={4}
								strokeLinecap="round"
								fill="transparent"
								className={`${
									transitionDisabled ? "duration-0" : "duration-300"
								} ease-[cubic-bezier(0.65,0,0.35,1)]`}
							/>
							<path
								d={`M400,200 ${positionB.x + 0.5},${positionB.y + 0.5}`}
								stroke="#115180"
								strokeWidth={4}
								strokeLinecap="round"
								fill="transparent"
								className={`${
									transitionDisabled ? "duration-0" : "duration-300"
								} ease-[cubic-bezier(0.65,0,0.35,1)]`}
							/>
						</g>
					</svg>
					<Draggable
						bounds="parent"
						grid={[4, 4]}
						position={positionA}
						defaultPosition={positionA}
						onDrag={(e, position) => {
							const { x, y } = position;
							setPositionA(position);
						}}
						positionOffset={{ x: "-11.5px", y: "-11.5px" }}
					>
						<div
							className={`absolute w-[24px] h-[24px] rounded-full bg-blue cursor-grab active:cursor-grabbing ${
								transitionDisabled ? "duration-0" : "duration-300"
							} ease-[cubic-bezier(0.65,0,0.35,1)]`}
						/>
					</Draggable>
					<Draggable
						bounds="parent"
						grid={[4, 4]}
						position={positionB}
						defaultPosition={positionB}
						onDrag={(e, position) => {
							const { x, y } = position;
							setPositionB(position);
						}}
						positionOffset={{ x: "-11.5px", y: "-11.5px" }}
					>
						<div
							className={`absolute w-[24px] h-[24px] rounded-full bg-blue-700 cursor-grab active:cursor-grabbing ${
								transitionDisabled ? "duration-0" : "duration-300"
							} ease-[cubic-bezier(0.65,0,0.35,1)]`}
						/>
					</Draggable>
				</div>
			</div>
			<div className="w-full flex flex-col gap-6">
				<div className="flex gap-3 col-span-2 bg-neutral-900 rounded-lg px-4 py-3 w-full">
					<p className="flex-grow">
						cubic-bezier(<span className="text-neutral-50">{cubicBezier}</span>);
					</p>
					<i
						className="ri-clipboard-line cursor-pointer hover:text-neutral-50 duration-100"
						onClick={() => navigator.clipboard.writeText(`cubic-bezier(${cubicBezier})`)}
					/>
				</div>
				<div>
					<div className="flex justify-between text-xs">
						<label htmlFor="duration">Transition duration</label>
						<p>{duration}s</p>
					</div>
					<Slider.Root
						name="duration"
						className="group relative flex items-center select-none touch-none w-full h-5 cursor-pointer"
						value={duration}
						onValueChange={(newDuration) => setDuration(newDuration)}
						defaultValue={duration}
						max={2}
						step={0.01}
					>
						<Slider.Track className="bg-blue-900 relative grow rounded-full h-1 group-hover:h-2 duration-100">
							<Slider.Range className="absolute bg-blue-600 rounded-full h-full" />
						</Slider.Track>
						<Slider.Thumb
							className="block bg-blue w-3 h-3 focus-visible:scale-150 group-hover:scale-150 origin-center rounded-full focus:outline-none duration-100"
							aria-label="transition duration"
						/>
					</Slider.Root>
				</div>
				<div className="grid grid-cols-3 gap-6">
					<div className="group relative w-full h-32 col-span-3 bg-neutral-900 rounded-lg">
						<div
							className="absolute left-0 group-hover:left-full group-hover:-translate-x-full w-[calc(33%-15px)] h-full bg-blue rounded-lg"
							style={{ transition: `all ${duration}s cubic-bezier(${cubicBezier})` }}
						/>
					</div>
					<div className="group w-full h-32 bg-neutral-900 rounded-lg">
						<div
							className="w-full h-full opacity-0 group-hover:opacity-100 bg-blue rounded-lg"
							style={{ transition: `all ${duration}s cubic-bezier(${cubicBezier})` }}
						/>
					</div>
					<div className="group w-full h-32 bg-neutral-900 rounded-lg">
						<div
							className="w-full h-full rotate-0 group-hover:rotate-180 bg-blue rounded-lg"
							style={{ transition: `all ${duration}s cubic-bezier(${cubicBezier})` }}
						/>
					</div>
					<div className="group w-full h-32 bg-neutral-900 rounded-lg">
						<div
							className="w-full h-full scale-0 group-hover:scale-100 bg-blue rounded-lg"
							style={{ transition: `all ${duration}s cubic-bezier(${cubicBezier})` }}
						/>
					</div>
				</div>
				<p>
					x: {positionA.x}, y: {positionA.y}
				</p>
				<p>
					x: {positionB.x}, y: {positionB.y}
				</p>
				<p>{transitionDisabled}</p>
				<div className="grid grid-cols-3 xl:grid-cols-6 2xl:grid-cols-3 3xl:grid-cols-6 gap-6">
					{Examples.map((easing) => (
						<button
							key={easing.name}
							onClick={() => {
								handleEasingClickA(easing.positionA);
								handleEasingClickB(easing.positionB);
							}}
						>
							<div className="w-full flex items-center justify-center aspect-square p-3 mb-3 rounded-full overflow-hidden bg-neutral-900">
								<svg viewBox="0 0 400 800" xmlns="http://www.w3.org/2000/svg" className="w-2/3 h-auto">
									<path
										d="M4,200 V600 H400"
										fill="transparent"
										stroke="#444"
										strokeWidth={8}
										strokeDasharray={17}
									/>
									<path
										d={`M4,600 C${easing.positionA.x},${easing.positionA.y} ${easing.positionB.x},${easing.positionB.y} 396,200`}
										stroke="#19f"
										strokeWidth={8}
										strokeLinecap="round"
										fill="transparent"
									/>
								</svg>
							</div>
							<p className="text-xs">{easing.name}</p>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
