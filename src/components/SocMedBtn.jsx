/* eslint-disable react/prop-types */
export default function SocMedBtn({ url, children }) {
	return (
		<a
			className="transition-transform duration-200 hover:scale-110 size-6 md:size-7 2xl:size-12"
			href={url}
			target="_blank"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
				{children}
			</svg>
		</a>
	);
}
