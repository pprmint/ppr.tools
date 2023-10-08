import Component from "./component";

export default function CubicBezier() {
	return (
		<main className="animate-page-in">
			<section className="flex flex-col gap-3 mb-12">
				<h1 className="text-neutral-50 font-display font-medium text-3xl md:text-5xl">
					Cubic bézier.
				</h1>
				<p>
					Drag the dots around to create a bézier curve, and test some transitions by hovering over the boxes.
				</p>
			</section>
			<section>
				<Component />
			</section>
		</main>
	);
}
