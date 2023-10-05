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
			},
            animation: {
                "page-in": "pageIn .5s cubic-bezier(0.16, 1, 0.3, 1)"
            }
		},
	},
	plugins: [],
};
export default config;
