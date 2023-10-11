import type { Metadata } from "next";
import Component from "./component";

const title = "Cubic bézier";
const description = "Drag dots around to create a bézier curve and try out some easings."

export const metadata: Metadata = {
	metadataBase: new URL("https://tools.ppr.one"),
	openGraph: {
		title: `${title}.`,
		description: description,
        images: [
			{
				url: `https://tools.ppr.one/api/og?title=${title}`,
			},
		],
	},
    twitter: {
        title: title,
        description: description,
        images: [
			{
				url: `https://tools.ppr.one/api/og?title=${title}`,
			},
		],
    }
};

export default function CubicBezier() {
	return (
		<main className="animate-page-in">
			<section className="flex flex-col gap-3 mb-12">
				<h1 className="text-neutral-50 font-display font-medium text-3xl md:text-5xl">
					{title}<span className="text-blue">.</span>
				</h1>
				<p>
					Drag the dots around to create a bézier curve, and test your easing by hovering over the boxes below.
				</p>
			</section>
			<section>
				<Component />
			</section>
		</main>
	);
}
