/* eslint-disable react/prop-types */

export default function Gallery({ state, data }) {
	return (
		<div
			className={`w-2/4 rounded-lg drop-shadow-lg overflow-hidden relative 2xl:w-3/6 ${
				state["left"] ? "animate-fade-in-right" : ""
			} ${state["right"] ? "animate-fade-in-left" : ""} ${
				state["center"] ? "animate-fade-in" : ""
			}`}
		>
			<div className="w-full h-full p-5 text-center text-white flex flex-col justify-end gap-2 bg-gradient-to-t from-black/80 to-transparent lg:gap-0 lg:justify-between lg:flex-row lg:items-end lg:text-left lg:transition-all lg:duration-500 absolute lg:opacity-0 lg:hover:opacity-100">
				<div>
					<h2 className="font-bold text-lg md:text-xl lg:text-2xl 2xl:text-4xl 2xl:mb-1">
						{data["title"]}
					</h2>
					<p className="text-xs md:text-sm lg:text-base 2xl:text-xl">
						{data["desc"]}
					</p>
				</div>
				<a
					className="align-middle p-1 text-sm md:p-2 md:text-base bg-zinc-300 text-black rounded-md transition-all duration-300 hover:text-white hover:bg-black 2xl:text-2xl"
					href={data["url"]}
					target="_blank"
				>
					<span className="material-symbols-outlined align-middle">link</span>
					<span className="ml-1 font-bold">Visit</span>
				</a>
			</div>
			<img
				className="w-full object-cover aspect-vertical md:aspect-square lg:aspect-video"
				src={data["img_url"]}
				alt={`screenshot of ${data["title"]}`}
			/>
		</div>
	);
}
