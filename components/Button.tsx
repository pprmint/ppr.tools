import { PropsWithChildren } from "react";

export default function Button(props: PropsWithChildren<{ onClick?: () => void; className?: string }>) {
	return <button onClick={props.onClick} className={`flex gap-3 ${props.className}`}>{props.children}</button>;
}
