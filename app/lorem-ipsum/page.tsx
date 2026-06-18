import type { Metadata } from "next";

const title = "Lorem ipsum";
const description = "Lorem ipsum dolor sit amet."

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

export default function FilterCompare() {
	return (
		<main className="animate-page-in">
			<section className="flex flex-col gap-3">
				<h1 className="text-neutral-50 font-display font-medium text-3xl md:text-5xl">Lorem ipsum<span className="text-blue">.</span></h1>
				<p>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
					labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
					et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
				</p>
			</section>
		</main>
	);
}
