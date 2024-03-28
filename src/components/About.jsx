/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
export default function About({ id }) {
	return (
		<div
			id={id}
			className="flex flex-col items-center justify-center h-screen gap-3 2xl:gap-5"
		>
			<span className="material-symbols-outlined font-bold text-3xl animate-spin-slow lg:text-4xl 2xl:text-6xl">
				emergency
			</span>
			<h2 className=" w-2/4 font-bold text-2xl sm:text-3xl md:text-4xl text-center 2xl:text-6xl">
				10 years ago. My 🧠 couldn't understand all of these: 🔽
			</h2>
			<div className="w-2/4 flex justify-center gap-3 flex-wrap">
				{["HTML5", "CSS3", "Javascript", "React", "Tailwind CSS"].map(
					(item, i) => (
						<p
							key={i}
							className="text-[10px] sm:text-xs lg:text-sm xl:text-base px-4 py-2 rounded-full bg-black text-white text-center 2xl:text-2xl shadow-md transition-transform duration-200 hover:scale-110"
						>
							{item}
						</p>
					)
				)}
			</div>
			<p className="w-2/4 md:w-1/4 text-xs text-center md:text-sm lg:text-md xl:text-lg 2xl:text-3xl">
				Fast forward to now. I made this portfolio site with those tools. That
				sounds like enough proof to my current state for me.
			</p>
		</div>
	);
}
