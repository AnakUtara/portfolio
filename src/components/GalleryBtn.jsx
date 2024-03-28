/* eslint-disable react/prop-types */

export default function GalleryBtn({ onclick, children }) {
	return (
		<span
			className={`material-symbols-outlined chevron cursor-pointer rounded-full p-2 transition-all duration-300 hover:bg-zinc-500 hover:text-white 2xl:text-7xl`}
			onClick={onclick}
		>
			{children}
		</span>
	);
}
