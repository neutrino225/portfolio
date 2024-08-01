/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			backgroundColor: {
				card: "#111315",
			},
			boxShadow: {
				card: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
			},
			keyframes: {
				scroll: {
					to: { transform: "translateX(calc(-50% - 0.75rem))" },
				},
			},
			animation: {
				scroll: "scroll 15s linear infinite",
			},
		},
	},
	plugins: [],
};
export default config;
