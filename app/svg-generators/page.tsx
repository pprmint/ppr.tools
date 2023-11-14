import type { Metadata } from "next";
import Link from "next/link";

const title = "SVG generators";
const description = "Generate abstract SVG shapes for all your vector needs.";

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
	},
};

const Generators = [
	{
		name: "Blob",
		path: "/blob",
		bg: (
			<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
				<rect width={100} height={100} className="fill-blue-950 group-hover:fill-blue-900 duration-200 ease-out" />
				<path
					d="M 36.247171,9.6765064 C 61.640686,2.1189134 70.271419,31.21007 80.697141,43.383526 91.629447,56.14849 55.164026,94.217269 31.42586,87.095819 6.920754,79.744286 29.209657,59.754158 19.904248,50.448746 9.148367,39.692868 17.685538,14.65008 36.247171,9.6765064 Z"
					className="fill-blue-800 group-hover:fill-blue-700 duration-200 ease-out"
				/>
			</svg>
		),
	},
	{
		name: "Wave",
		path: "/wave",
		bg: (
			<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
				<rect width={100} height={100} className="fill-red-950 group-hover:fill-red-900 duration-200 ease-out" />
				<circle cx="50" cy="50" r="40" className="fill-red-800 group-hover:fill-red-700 duration-200 ease-out" />
			</svg>
		),
	},
];

export default function SvgGenerators() {
	return (
		<main className="animate-page-in">
			<section className="flex flex-col gap-3 mb-12">
				<h1 className="text-neutral-50 font-display font-medium text-3xl md:text-5xl">
					{title}
					<span className="text-blue">.</span> [PLANNED]
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
