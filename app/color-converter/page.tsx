import type { Metadata } from "next";
import HexComponent from "./hex/component";

const title = "Color converter";
const description = "Convert colors to and from HEX, RGB and HSL formats."

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

export default function FilterColor() {
	return (
		<main className="animate-page-in">
			<section className="flex flex-col gap-3 mb-12">
				<h1 className="text-neutral-50 font-display font-medium text-3xl md:text-5xl">
					{title}<span className="text-blue">.</span>
				</h1>
				<p>
					Enter color codes and convert them to different formats. Supports alpha channels too.
				</p>
			</section>
			<section>
				<HexComponent />
			</section>
		</main>
	);
}
