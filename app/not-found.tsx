import Link from "next/link";

export default function NotFound() {
	return (
		<main className="animate-page-in">
			<section className="flex flex-col gap-3">
				<h1 className="text-neutral-50 font-display font-medium text-3xl md:text-5xl">
					<i className="ri-file-unknow-line" /> Page not found.
				</h1>
				<p>
					Check the URL for typos, or{" "}
					<Link href="/" className="underline decoration-dotted hover:decoration-solid">
						return to the home page
					</Link>
					.
				</p>
			</section>
		</main>
	);
}
