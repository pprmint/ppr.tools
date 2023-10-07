"use client";
import { useState } from "react";
import Draggable from "react-draggable";

export default function Component() {
	const [positionA, setPositionA] = useState({ x: 200, y: 560 });
	const [positionB, setPositionB] = useState({ x: 200, y: 240 });

	const cubicBezier = ``;
	return (
		<div className="flex gap-9">
			<div className="flex w-max">
				<div className="relative w-[424px] h-[824px]">
					<svg width={400} height={800} xmlns="http://www.w3.org/2000/svg" className="absolute left-0">
						<g id="backdrop">
							<rect x={0.5} y={200.5} width={399} height={399} fill="transparent" strokeWidth={1} stroke="#222" />
							<g id="vertical">
                                <path d="M40.5,200 40.5,600" fill="transparent" stroke="#222" strokeWidth={1} strokeDasharray={4} strokeDashoffset={1.5} />
                                <path d="M80.5,200 80.5,600" fill="transparent" stroke="#222" strokeWidth={1} strokeDasharray={4} strokeDashoffset={1.5} />
                                <path d="M120.5,200 120.5,600" fill="transparent" stroke="#222" strokeWidth={1} strokeDasharray={4} strokeDashoffset={1.5} />
                                <path d="M160.5,200 160.5,600" fill="transparent" stroke="#222" strokeWidth={1} strokeDasharray={4} strokeDashoffset={1.5} />
                                <path d="M200.5,200 200.5,600" fill="transparent" stroke="#222" strokeWidth={1} strokeDasharray={4} strokeDashoffset={1.5} />
                                <path d="M240.5,200 240.5,600" fill="transparent" stroke="#222" strokeWidth={1} strokeDasharray={4} strokeDashoffset={1.5} />
                                <path d="M280.5,200 280.5,600" fill="transparent" stroke="#222" strokeWidth={1} strokeDasharray={4} strokeDashoffset={1.5} />
                                <path d="M320.5,200 320.5,600" fill="transparent" stroke="#222" strokeWidth={1} strokeDasharray={4} strokeDashoffset={1.5} />
                                <path d="M360.5,200 360.5,600" fill="transparent" stroke="#222" strokeWidth={1} strokeDasharray={4} strokeDashoffset={1.5} />
							</g>
							<g id="horizontal">
                                <path d="M0,240.5 400,240.5" fill="transparent" stroke="#222" strokeWidth={1} strokeDasharray={4} strokeDashoffset={1.5} />
                                <path d="M0,280.5 400,280.5" fill="transparent" stroke="#222" strokeWidth={1} strokeDasharray={4} strokeDashoffset={1.5} />
                                <path d="M0,320.5 400,320.5" fill="transparent" stroke="#222" strokeWidth={1} strokeDasharray={4} strokeDashoffset={1.5} />
                                <path d="M0,360.5 400,360.5" fill="transparent" stroke="#222" strokeWidth={1} strokeDasharray={4} strokeDashoffset={1.5} />
                                <path d="M0,400.5 400,400.5" fill="transparent" stroke="#222" strokeWidth={1} strokeDasharray={4} strokeDashoffset={1.5} />
                                <path d="M0,440.5 400,440.5" fill="transparent" stroke="#222" strokeWidth={1} strokeDasharray={4} strokeDashoffset={1.5} />
                                <path d="M0,480.5 400,480.5" fill="transparent" stroke="#222" strokeWidth={1} strokeDasharray={4} strokeDashoffset={1.5} />
                                <path d="M0,520.5 400,520.5" fill="transparent" stroke="#222" strokeWidth={1} strokeDasharray={4} strokeDashoffset={1.5} />
                                <path d="M0,560.5 400,560.5" fill="transparent" stroke="#222" strokeWidth={1} strokeDasharray={4} strokeDashoffset={1.5} />
							</g>
						</g>
						<g id="draw">
							<path
								d={`M0,600 C${positionA.x},${positionA.y} ${positionB.x},${positionB.y} 400,200`}
								stroke="#eee"
								strokeWidth={2}
								fill="transparent"
							/>
							<path
								d={`M0,600 ${positionA.x},${positionA.y}`}
								stroke="#1181d6"
								strokeWidth={2}
								fill="transparent"
							/>
							<path
								d={`M400,200 ${positionB.x},${positionB.y}`}
								stroke="#115180"
								strokeWidth={2}
								fill="transparent"
							/>
						</g>
					</svg>
					<Draggable
						bounds="parent"
						grid={[4, 4]}
						defaultPosition={positionA}
						onDrag={(e, position) => {
							const { x, y } = position;
							setPositionA(position);
						}}
						positionOffset={{ x: "-12px", y: "-12px" }}
					>
						<div className="absolute w-[25px] h-[25px] rounded-full bg-blue cursor-grab active:cursor-grabbing" />
					</Draggable>
					<Draggable
						bounds="parent"
						grid={[4, 4]}
						defaultPosition={positionB}
						onDrag={(e, position) => {
							const { x, y } = position;
							setPositionB(position);
						}}
						positionOffset={{ x: "-12px", y: "-12px" }}
					>
						<div className="absolute w-[25px] h-[25px] rounded-full bg-blue-700 cursor-grab active:cursor-grabbing" />
					</Draggable>
				</div>
			</div>
			<div className="w-full">
				<div className="flex gap-3 col-span-2 bg-neutral-900 rounded-lg px-4 py-3 w-full">
					<p className="flex-grow">
						cubic-bezier(<span className="text-neutral-50">{cubicBezier}</span>);
					</p>
					<i
						className="ri-clipboard-line cursor-pointer hover:text-neutral-50 duration-100"
						onClick={() => navigator.clipboard.writeText(`cubic-bezier(${cubicBezier});`)}
					/>
				</div>
				<p>
					A x{positionA.x} y{positionA.y}
				</p>
				<p>
					B x{positionB.x} y{positionB.y}
				</p>
			</div>
		</div>
	);
}
