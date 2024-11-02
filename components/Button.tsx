import { PropsWithChildren } from "react";

export default function Button(props: PropsWithChildren<{ onClick?: () => void; className?: string, disabled?: boolean }>) {
	return <button onClick={props.onClick} disabled={props.disabled} className={`group flex gap-3 px-4 py-2 w-max text-neutral-950 disabled:bg-transparent disabled:text-neutral-600 disabled:outline-2 disabled:outline-dotted disabled:pointer-events-none bg-cyan hover:bg-cyan-400 active:bg-cyan-600 rounded-full box-border ${props.className} duration-100`}>{props.children}</button>;
}
