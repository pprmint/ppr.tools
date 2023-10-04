import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Some tools.",
	description: "A small site with random small tools.",
    themeColor: "#1199ff",
    openGraph: {
        title: "pprmint.tools",
        description: "Small tools that may or may not help me with development."
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="">{children}</body>
		</html>
	);
}
