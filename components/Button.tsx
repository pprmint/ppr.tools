import { PropsWithChildren } from "react";

export default function Button(props: PropsWithChildren<{ onClick?: () => void; className?: string }>) {
	return <button onClick={props.onClick} className={`flex gap-3 px-4 py-1 w-max text-neutral-950 bg-blue hover:bg-blue-400 active:bg-blue-600 rounded-full ${props.className} duration-100`}>{props.children}</button>;
}
