import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				blue: {
					DEFAULT: "#1199ff",
					50: "#d4e4f0",
					100: "#aed5f3",
					200: "#87c7f6",
					300: "#60b8f9",
					400: "#38a8fc",
					500: "#1199ff",
					600: "#1181d6",
					700: "#1169ab",
					800: "#115180",
					900: "#113958",
					950: "#11222e",
				},
				neutral: {
					DEFAULT: "#aaaaaa",
					50: "#eeeeee",
					100: "#dddddd",
					200: "#cccccc",
					300: "#bbbbbb",
					400: "#aaaaaa",
					500: "#939393",
					600: "#666666",
					700: "#474747",
					800: "#333333",
					900: "#222222",
					950: "#111111",
				},
			},
			fontFamily: {
				mono: [
					[
						"Basier Square Mono",
						"SF Mono",
						"Iosevka",
						"JetBrains Mono",
						"Cascadia Code",
						"Consolas",
						"monospace",
					],
					{
						fontFeatureSettings: '"ss01"',
					},
				],
				display: [
					"Silka Mono",
					"Red Hat Mono",
					"SF Mono",
					"Iosevka",
					"JetBrains Mono",
					"Cascadia Code",
					"Consolas",
				],
			},
			screens: {
				"3xl": "1800px",
			},
			keyframes: {
				pageIn: {
					from: {
						opacity: "0%",
						form: "translateY(50px)",
					},
					to: {
						opacity: "100%",
						transform: "translateY(0px)",
					},
				},
				collapsibleDown: {
					from: {
						height: "0px",
						paddingTop: "0",
						opacity: "0%",
					},
					to: {
						height: "var(--radix-collapsible-content-height)",
						paddingTop: "24px",
						opacity: "100%",
					},
				},
				collapsibleUp: {
					from: {
						height: "var(--radix-collapsible-content-height)",
						paddingTop: "24px",
						opacity: "100%",
					},
					to: {
						height: "0px",
						paddingTop: "0px",
						opacity: "0%",
					},
				},
			},
			animation: {
				"page-in": "pageIn .5s cubic-bezier(0.16, 1, 0.3, 1)",
				"collapsible-down": "collapsibleDown .5s cubic-bezier(0.16, 1, 0.3, 1)",
				"collapsible-up": "collapsibleUp .5s cubic-bezier(0.16, 1, 0.3, 1)",
			},
            transitionTimingFunction: {
                "in-out-custom": "cubic-bezier(0.5, 0, 0.1, 1);",
				"in-sine": "cubic-bezier(0.12, 0, 0.39, 0)",
				"in-quad": "cubic-bezier(0.11, 0, 0.5, 0)",
				"in-cubic": "cubic-bezier(0.32, 0, 0.67, 0)",
				"in-quart": "cubic-bezier(0.5, 0, 0.75, 0)",
				"in-quint": "cubic-bezier(0.64, 0, 0.78, 0)",
				"in-expo": "cubic-bezier(0.7, 0, 0.84, 0)",
				"in-circ": "cubic-bezier(0.55, 0, 1, 0.45)",
				"out-sine": "cubic-bezier(0.61, 1, 0.88, 1)",
				"out-quad": "cubic-bezier(0.5, 1, 0.89, 1)",
				"out-cubic": "cubic-bezier(0.33, 1, 0.68, 1)",
				"out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
				"out-quint": "cubic-bezier(0.22, 1, 0.36, 1)",
				"out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
				"out-circ": "cubic-bezier(0, 0.55, 0.45, 1)",
				"in-out-sine": "cubic-bezier(0.37, 0, 0.63, 1)",
				"in-out-quad": "cubic-bezier(0.45, 0, 0.55, 1)",
				"in-out-cubic": "cubic-bezier(0.65, 0, 0.35, 1)",
				"in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
				"in-out-quint": "cubic-bezier(0.83, 0, 0.17, 1)",
				"in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
				"in-out-circ": "cubic-bezier(0.85, 0, 0.15, 1)",
			},
			transitionDuration: {
				400: "400ms",
			},
		},
	},
	plugins: [],
};
export default config;
