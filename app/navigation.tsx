"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "public/logo.svg";

const Links = [
	{
		name: "Home",
		path: "/",
		icon: "ri-home-line",
	},
	{
		name: "Lorem ipsum",
		path: "/lorem-ipsum",
		icon: "ri-file-list-2-line",
	},
	{
		name: "CSS Filter Compare",
		path: "/filter-compare",
		icon: "ri-contrast-line",
	},
];

export default function Navigation() {
	const path = usePathname();
	return (
		<nav className="rounded-r-3xl bg-neutral-900 flex flex-col w-full p-6 md:p-9 gap-3">
			<div className="flex flex-col gap-3 flex-grow">
				<Image src={Logo} alt="tools logo" className="h-12 mb-6" />
				{Links.map((link) => (
					<Link
						key={link.path}
						href={link.path}
						className={`group flex gap-3 py-2 px-4 rounded-full ${
							path === link.path
								? "text-neutral-950 bg-blue"
								: "hover:text-neutral-50 hover:bg-neutral-700 active:bg-neutral-800"
						} duration-100`}
					>
						<i className={link.icon} />
						<span className={path === link.path ? "font-medium" : ""}>{link.name}</span>
					</Link>
				))}
			</div>
			<p>
				Made by <Link href="https://pprmint.art" target="_blank">pprmint.</Link>
			</p>
		</nav>
	);
}