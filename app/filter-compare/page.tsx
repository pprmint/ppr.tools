import Component from "./component";

export default function FilterCompare() {
	return (
		<main className="animate-page-in">
			<section className="flex flex-col gap-3 mb-12">
				<h1 className="text-neutral-50 font-display font-medium text-3xl md:text-5xl">CSS Filter Compare.</h1>
				<p>Define a source and target color, then use the sliders to match the two colors using filters.</p>
			</section>
			<section>
				<Component />
			</section>
		</main>
	);
}
