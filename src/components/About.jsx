/* eslint-disable react/prop-types */
export default function About({ id, imgUrl }) {
	return (
		<div id={id} className="flex flex-col items-center justify-center h-screen">
			<img
				className="aspect-video w-64 lg:w-80 object-cover grayscale mb-2 2xl:w-[480px]"
				src={imgUrl}
				alt="pusing"
			/>
			<i className="text-[9px] lg:text-xs mb-5 2xl:text-xl">
				(Fig 1.0) - Representation of me in class, inhaling knowledge.
			</i>
			<span className="material-symbols-outlined font-bold text-4xl mr-0 animate-spin-slow lg:text-6xl lg:mr-1 2xl:text-8xl">
				emergency
			</span>
			<h2 className=" w-2/4 lg:w-3/4 font-bold text-4xl lg:text-6xl text-center 2xl:text-8xl 2xl:mb-5">
				I'm not here. This isn't happening...
			</h2>
			<i className="relative z-10 text-lg mb-3 2xl:text-4xl 2xl:mb-5">Yet!</i>
			<p className="w-2/4 text-sm md:text-base lg:w-1/4 text-justify 2xl:text-2xl">
				Currently in web development bootcamp class, somewhere around Central
				Jakarta, Sudirman. Pray for my smooth progress so that you can find my
				services useful in the near future. 🙏
			</p>
		</div>
	);
}
