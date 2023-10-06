import { PropsWithChildren } from "react";

export default function Button(props: PropsWithChildren<{ onClick?: () => void; className?: string, disabled?: boolean }>) {
	return <button onClick={props.onClick} disabled={props.disabled} className={`group flex gap-3 px-4 py-2 w-max text-neutral-950 disabled:bg-neutral-600 disabled:pointer-events-none bg-blue hover:bg-blue-400 active:bg-blue-600 rounded-full ${props.className} duration-100`}>{props.children}</button>;
}
