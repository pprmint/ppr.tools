import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Some tools.",
	description: "A small site with random small tools.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="">{children}</body>
		</html>
	);
}
