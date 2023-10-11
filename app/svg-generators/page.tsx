import type { Metadata } from "next";
import Link from "next/link";

const title = "SVG generator";
const description = "Generate abstract SVG shapes for all your vector needs."

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

const Generators = [
	{
		name: "Blob",
		path: "/blob",
		bg: (
			<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <rect width={100} height={100} fill="#11222e" />
				<circle cx="50" cy="50" r="40" fill="#113958" />
			</svg>
		),
	},
	{
		name: "Wave",
		path: "/wave",
		bg: (
			<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <rect width={100} height={100} fill="#2d1517" />
				<circle cx="50" cy="50" r="40" fill="#561b20" />
			</svg>
		),
	},
];

export default function SvgGenerators() {
	return (
		<main className="animate-page-in">
			<section className="flex flex-col gap-3 mb-12">
				<h1 className="text-neutral-50 font-display font-medium text-3xl md:text-5xl">
					{title}<span className="text-blue">.</span> [PLANNED]
				</h1>
				<p>Generate abstract SVG shapes for all your vector needs.</p>
			</section>
			<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{Generators.map((gen) => (
					<Link key={gen.name} href={`/svg-generators${gen.path}`}>
						<button className="group relative flex items-center justify-center bg-neutral-900 w-full aspect-video overflow-hidden rounded-lg">
							<div className="absolute w-full h-auto z-0 group-hover:scale-110 duration-200 ease-out">
								{gen.bg}
							</div>
							<span className="absolute z-10 text-neutral-50 font-display font-medium text-2xl lg:text-3xl">
								{gen.name}
							</span>
						</button>
					</Link>
				))}
			</section>
		</main>
	);
}
