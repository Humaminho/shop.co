import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'light-gray': '#F2F0F1',
				'dark-gray': '#606160',
			},
			fontFamily: {
				display: ['Integral CF', 'sans-serif'],
			},
			screens: {
				large: '1180px',
			},
		},
	},
	plugins: [],
};
export default config;
