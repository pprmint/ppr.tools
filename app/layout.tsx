import type { Metadata } from "next";

import Navigation from "./navigation";

import "./globals.css";
import "fonts/SilkaMono/silkamono.css";
import "fonts/BasierSquareMono/basiersquaremono.css";
import "remixicon/fonts/remixicon.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://tools.ppr.one"),
	title: "pprmint.tools.",
    description: "Small tools for niche use cases.",
    themeColor: "#4499ee",
	openGraph: {
		siteName: "tools.ppr.one",
	},
	twitter: {
		site: "tools.ppr.one",
        creator: "@npprmint",
        card: "summary_large_image",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="font-mono bg-neutral-950 text-neutral flex selection:bg-blue selection:text-neutral-950 md:overflow-hidden">
				<Navigation />
				<div className="flex w-full min-h-screen flex-col py-24 px-6 md:px-12 lg:px-24 gap-3 md:h-screen md:overflow-y-auto">
					{children}
				</div>
			</body>
		</html>
	);
}
