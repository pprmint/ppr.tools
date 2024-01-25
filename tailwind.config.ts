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
				red: {
					DEFAULT: "#ff4444",
					50: "#fde9ec",
					100: "#fec8ca",
					200: "#fea6a7",
					300: "#ff8585",
					400: "#ff6665",
					500: "#ff4444",
					600: "#d43838",
					700: "#ae2e2e",
					800: "#822222",
					900: "#591717",
					950: "#2e0b0b",
				},
				orange: {
					DEFAULT: "#ff7711",
					50: "#ffeee4",
					100: "#ffd7be",
					200: "#ffbf97",
					300: "#ffa871",
					400: "#ff8f4a",
					500: "#ff7711",
					600: "#e06100",
					700: "#b85000",
					800: "#8f3e00",
					900: "#662c00",
					950: "#3d1600",
				},
				yellow: {
					DEFAULT: "#ffbb00",
					50: "#fff4d6",
					100: "#ffe9ad",
					200: "#ffde85",
					300: "#ffd35c",
					400: "#ffc933",
					500: "#ffbb00",
					600: "#dfa000",
					700: "#c08600",
					800: "#a16d00",
					900: "#774900",
					950: "#371e00",
				},
				lime: {
					DEFAULT: "#99cc33",
					50: "#eff7de",
					100: "#deefbe",
					200: "#cee79d",
					300: "#bede7c",
					400: "#add65c",
					500: "#99cc33",
					600: "#87b42d",
					700: "#6e9325",
					800: "#56721d",
					900: "#3d5214",
					950: "#1f290b",
				},
				green: {
					DEFAULT: "#00cc66",
					50: "#d6ffe9",
					100: "#aef6d0",
					200: "#84ecb6",
					300: "#5ae39c",
					400: "#30d982",
					500: "#00cc66",
					600: "#00b85c",
					700: "#008f47",
					800: "#006633",
					900: "#005229",
					950: "#002914",
				},
				cyan: {
					DEFAULT: "#22ccff",
					50: "#def7ff",
					100: "#c2f1ff",
					200: "#adecff",
					300: "#85e2ff",
					400: "#5cd9ff",
					500: "#22ccff",
					600: "#00bcf5",
					700: "#009ccc",
					800: "#007da3",
					900: "#005e7a",
					950: "#002f3d",
				},
				blue: {
					DEFAULT: "#2299ff",
					50: "#def0ff",
					100: "#bde1ff",
					200: "#99d1ff",
					300: "#70bcff",
					400: "#47a9ff",
					500: "#2299ff",
					600: "#0083f5",
					700: "#006dcc",
					800: "#0057a3",
					900: "#00417a",
					950: "#00213d",
				},
				violet: {
					DEFAULT: "#9955ee",
					50: "#f4ecfd",
					100: "#e9dafb",
					200: "#d3b5f8",
					300: "#bd90f4",
					400: "#a76af0",
					500: "#9955ee",
					600: "#8844dc",
					700: "#7332c8",
					800: "#6520b4",
					900: "#4D158E",
					950: "#25074a",
				},
				pink: {
					DEFAULT: "#ee66bb",
					50: "#fdedf7",
					100: "#fbdaee",
					200: "#f9c8e6",
					300: "#f5a3d6",
					400: "#f17ec5",
					500: "#ee66bb",
					600: "#dc56ab",
					700: "#c74299",
					800: "#a42d7e",
					900: "#7f1b65",
					950: "#470034",
				},
				neutral: {
					DEFAULT: "#aaaaaa",
					50: "#eeeeee",
					100: "#dddddd",
					200: "#cccccc",
					300: "#bbbbbb",
					400: "#999999",
					500: "#777777",
					600: "#555555",
					700: "#444444",
					800: "#333333",
					900: "#222222",
					950: "#111111",
				},
			},
			fontFamily: {
				mono: [
					["Basier Square Mono", "SF Mono", "Iosevka", "JetBrains Mono", "Cascadia Code", "Consolas", "monospace"],
					{
						fontFeatureSettings: '"ss01"',
					},
				],
				display: ["Silka Mono", "Red Hat Mono", "SF Mono", "Iosevka", "JetBrains Mono", "Cascadia Code", "Consolas"],
			},
			screens: {
				"3xl": "1800px",
			},
			keyframes: {
				pageIn: {
					from: {
						opacity: "0%",
						transform: "translateY(50px)",
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
