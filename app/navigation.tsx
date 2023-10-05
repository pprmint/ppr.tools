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
						className={`group flex gap-3 rounded-full ${
							path === link.path
								? "mx-0 my-0 px-4 py-2 text-neutral-950 bg-blue"
								: "mx-2 hover:mx-0 my-1 hover:my-0 px-2 hover:px-4 py-1 hover:py-2 hover:text-neutral-50 hover:bg-neutral-700 active:bg-neutral-800"
						} duration-200 ease-out`}
					>
						<i className={link.icon} />
						<span className={path === link.path ? "font-medium" : ""}>{link.name}</span>
					</Link>
				))}
			</div>
			<p>
				Made by{" "}
				<Link
					href="https://pprmint.art"
					target="_blank"
					rel="noopener noreferrer"
					className="group hover:text-neutral-50 duration-200"
				>
					pprmint<span className="group-hover:text-[#0c6] duration-200">.</span>
					<span className="opacity-0 group-hover:opacity-100 duration-200">art</span>
				</Link>
			</p>
			<div className="text-xs">
				[
				<Link
					href={path === "/" ? "https://github.com/pprmint/tools.ppr.one" : `https://github.com/pprmint/tools.ppr.one/tree/main/app${path}`}
					target="_blank"
					rel="noopener noreferrer"
					className="group hover:text-neutral-50 duration-200"
				>
					source
				</Link>
				]
			</div>
		</nav>
	);
}
