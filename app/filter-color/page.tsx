import Component from "./component";

export default function FilterColor() {
	return (
		<main className="animate-page-in">
			<section className="flex flex-col gap-3 mb-12">
				<h1 className="text-neutral-50 font-display font-medium text-3xl md:text-5xl">
					CSS filter to color.
				</h1>
				<p>
					Enter source and target colors, then use the sliders below to match one to the other using CSS filters.
				</p>
			</section>
			<section>
				<Component />
			</section>
		</main>
	);
}
