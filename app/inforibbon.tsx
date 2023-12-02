"use client";
import { useEffect, useState } from "react";
import { useTransition, a, easings } from "@react-spring/web";

export default function InfoRibbon() {
	const [dismissedNewDomain, setDismissedNewDomain] = useState(false);
	useEffect(() => {
		let dismissedNewDomain = localStorage.getItem("dismissedNewDomain");
		if (dismissedNewDomain) {
			setDismissedNewDomain(true);
		}
	}, []);

	function handleDismiss() {
		localStorage.setItem("dismissedNewDomain", "true");
		setDismissedNewDomain(true);
	}

	const dismissTransition = useTransition(!dismissedNewDomain, {
		from: {
			y: "-100%",
		},
		enter: {
			y: "0%",
            delay: 500,
            config: {
                easing: easings.easeOutExpo,
                duration: 750,
            },
		},
		leave: {
            y: "-100%",
            config: {
                easing: easings.easeInCubic,
                duration: 300,
            },
		},
	});
	return dismissTransition((styles, item) =>
		item ? (
			<a.div style={styles} className="fixed flex z-[999] top-0 left-0 right-0 bg-blue text-neutral-950 text-sm">
				<div className="flex items-center gap-3 flex-grow px-3">
					<i className="ri-information-line py-2" />
					<p className="py-2">
						My obsession with buying domains hasn't stopped yet, so <b>ppr.tools</b> exists now. If you've bookmarked
						this janky site before, you should update its URL.
					</p>
				</div>
				<button className="px-3 bg-blue hover:bg-blue-600 active:bg-blue-700 duration-75" onClick={handleDismiss}>
					<i className="ri-close-line" />
				</button>
			</a.div>
		) : null
	);
}
