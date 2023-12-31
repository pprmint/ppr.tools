import type { Metadata } from "next";
import Component from "./component";

const title = "Cubic bézier";
const description = "Drag dots around to create a bézier curve and try out some easings."

export const metadata: Metadata = {
	metadataBase: new URL("https://ppr.tools"),
    title: `${title}.`,
    description: description,
	openGraph: {
        images: [
			{
				url: `https://ppr.tools/api/og?title=${title}`,
			},
		],
	},
    twitter: {
        images: [
			{
				url: `https://ppr.tools/api/og?title=${title}`,
			},
		],
    }
};

export default function CubicBezier() {
	return (
		<main className="animate-page-in">
			<section>
				<Component />
			</section>
		</main>
	);
}
