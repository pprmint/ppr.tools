export default function Home() {
	return (
		<main className="animate-page-in">
			<section className="flex flex-col gap-3">
				<h1 className="text-neutral-50 font-display font-medium text-3xl md:text-5xl">
					Hello world<span className="text-blue">.</span>
				</h1>
				<p>
					This site is a collection of various tools that help me (and maybe you) with web development and
					other things.
				</p>
				<p className="hidden md:block">
					You can open the menu using the button in the bottom left corner.
				</p>
				<p>
					There may be other sites out there which do the same things as some of the tools here, sure, but
					this serves as a central place to access everything I need, while also having the ability to customize and change stuff as needed.
				</p>
			</section>
		</main>
	);
}
