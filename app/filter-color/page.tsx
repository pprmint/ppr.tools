import type { Metadata } from "next";
import Component from "./component";

const title = "CSS filter to color";
const description = "Define two colors and match one to the other using CSS filters."

export const metadata: Metadata = {
	metadataBase: new URL("https://tools.ppr.one"),
    title: `${title}.`,
    description: description,
	openGraph: {
        images: [
			{
				url: `https://tools.ppr.one/api/og?title=${title}`,
			},
		],
	},
    twitter: {
        images: [
			{
				url: `https://tools.ppr.one/api/og?title=${title}`,
			},
		],
    }
};

export default function FilterColor() {
	return (
		<main className="animate-page-in">
			<section className="flex flex-col gap-3 mb-12">
				<h1 className="text-neutral-50 font-display font-medium text-3xl md:text-5xl">
					{title}<span className="text-blue">.</span>
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
