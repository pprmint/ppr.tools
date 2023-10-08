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
		name: "CSS filter to color",
		path: "/filter-color",
		icon: "ri-contrast-line",
	},
	{
		name: "Cubic bézier",
		path: "/cubic-bezier",
		icon: "ri-pulse-line",
	},
];

export default function Navigation() {
	const path = usePathname();
	return (
		<nav className="fixed md:relative md:rounded-r-3xl bg-neutral-900 flex flex-col w-full md:max-w-sm px-6 py-3 md:py-6 lg:p-9 md:gap-3 overflow-x-auto">
			<div className="flex md:flex-col whitespace-nowrap md:whitespace-normal gap-3 md:flex-grow">
				<Image src={Logo} alt="tools logo" className="h-6 md:h-9 lg:h-12 w-auto mt-1.5 md:mt-0 md:mb-6" />
				{Links.map((link) => (
					<Link
						key={link.path}
						href={link.path}
						className={`group flex gap-3 rounded-[20px] ${
							path === link.path
								? "mx-0 my-0 px-3 md:px-4 py-2 text-neutral-950 bg-blue"
								: "mx-1 md:mx-2 hover:mx-0 my-1 hover:my-0 px-2 hover:px-3 md:hover:px-4 py-1 hover:py-2 hover:text-neutral-50 hover:bg-neutral-700 active:bg-neutral-800"
						} active:scale-[97%] duration-200 ease-out`}
					>
						<i className={link.icon} />
						<span className={`hidden md:block ${path === link.path ? "font-medium" : ""}`}>{link.name}</span>
					</Link>
				))}
			</div>
			<div className="hidden md:block">
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
				<p className="text-xs">
					[
					<Link
						href={
							Links.some((link) => path === link.path) && path != "/"
								? `https://github.com/pprmint/tools.ppr.one/tree/main/app${path}`
								: "https://github.com/pprmint/tools.ppr.one"
						}
						target="_blank"
						rel="noopener noreferrer"
						className="group hover:text-neutral-50 duration-200"
					>
						source
					</Link>
					]
				</p>
			</div>
		</nav>
	);
}
