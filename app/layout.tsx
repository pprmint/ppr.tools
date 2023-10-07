import type { Metadata } from "next";

import Navigation from "./navigation";

import "./globals.css";
import "fonts/SilkaMono/silkamono.css";
import "fonts/BasierSquareMono/basiersquaremono.css";
import "remixicon/fonts/remixicon.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://tools.ppr.one"),
	title: "Some tools.",
	description: "A small site with random small tools.",
	themeColor: "#1199ff",
	openGraph: {
		title: "pprmint.tools",
		description: "Small tools that may or may not help me with development.",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="font-mono bg-neutral-950 text-neutral md:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 selection:bg-blue selection:text-neutral-950 md:overflow-hidden">
				<Navigation />
				<div className="col-span-2 lg:col-span-3 xl:col-span-4 flex min-h-screen flex-col p-6 md:p-12 lg:p-24 gap-3 md:h-screen md:overflow-y-auto">
					{children}
				</div>
			</body>
		</html>
	);
}
