"use client";
import { useState } from "react";
import Draggable from "react-draggable";

export default function Component() {
	const [positionA, setPositionA] = useState({ x: 200, y: 360 });
	const [positionB, setPositionB] = useState({ x: 200, y: 40 });

	return (
		<div className="flex gap-9">
			<div className="flex items-center justify-center w-max">
				<div className="relative w-[424px] h-[824px]">
					<svg
						width={400}
						height={400}
						xmlns="http://www.w3.org/2000/svg"
						className="absolute top-0 left-0 bg-neutral-900"
					>
						<path d={`M0,400 C${positionA.x},${positionA.y} ${positionB.x},${positionB.y} 400,0`} stroke="#eee" strokeWidth={3} fill="transparent" />
						<path d={`M0,400 ${positionA.x},${positionA.y}`} stroke="#1181d6" strokeWidth={3} fill="transparent" />
						<path d={`M400,0 ${positionB.x},${positionB.y}`} stroke="#115180" strokeWidth={3} fill="transparent" />
					</svg>
					<Draggable
						bounds="parent"
						grid={[4, 4]}
						defaultPosition={positionA}
						onDrag={(e, position) => {
							const { x, y } = position;
							setPositionA(position);
						}}
                        positionOffset={{x: "-12px", y: "-12px"}}
					>
						<div className="absolute w-6 h-6 rounded-full bg-blue cursor-grab active:cursor-grabbing" />
					</Draggable>
					<Draggable
						bounds="parent"
						grid={[4, 4]}
						defaultPosition={positionB}
						onDrag={(e, position) => {
							const { x, y } = position;
							setPositionB(position);
						}}
                        positionOffset={{x: "-12px", y: "-12px"}}
					>
						<div className="absolute w-6 h-6 rounded-full bg-blue-700 cursor-grab active:cursor-grabbing" />
					</Draggable>
				</div>
			</div>
			<div className="w-full">
				<div className="flex gap-3 col-span-2 bg-neutral-900 rounded-lg px-4 py-3 w-full">
					<p className="flex-grow">
						cubic-bezier(<span className="text-neutral-50"></span>);
					</p>
					<i
						className="ri-clipboard-line cursor-pointer hover:text-neutral-50 duration-100"
						onClick={() => navigator.clipboard.writeText(`filter: ${null};`)}
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
