/* eslint-disable react/prop-types */
export default function SocMedBtn({ url, children }) {
	return (
		<a
			className="transition-transform duration-200 hover:scale-110 w-7 h-7 2xl:w-12 2xl:h-12"
			href={url}
			target="_blank"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				// width="30"
				// height="30"
				viewBox="0 0 24 24"
			>
				{children}
			</svg>
		</a>
	);
}
