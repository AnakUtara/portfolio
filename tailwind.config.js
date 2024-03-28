/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			},
			aspectRatio: {
				vertical: "9/16",
			},
			animation: {
				"spin-slow": "spin 3s linear infinite",
				"title-fade-left": "title-fade-left 2s ease 1",
				"fade-in-left": "fade-in-left 500ms ease 1",
				"fade-in-right": "fade-in-right 500ms ease 1",
				"fade-in": "fade-in 500ms ease-out 1",
			},
			keyframes: {
				"title-fade-left": {
					from: { opacity: "0", left: "30px", "font-weight": "300" },
					to: { opacity: "1", left: "0", "font-weight": "800" },
				},
				"fade-in-left": {
					from: { opacity: "0", left: "-20px" },
					to: { opacity: "1", left: "0" },
				},
				"fade-in-right": {
					from: { opacity: "0", right: "-20px" },
					to: { opacity: "1", right: "0" },
				},
				"fade-in": {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
			},
		},
	},
	plugins: [],
};
