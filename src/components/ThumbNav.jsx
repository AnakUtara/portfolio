/* eslint-disable react/prop-types */
export default function ThumbNav({ data, onclick, state }) {
	return (
		<div className="hidden md:flex md:justify-around md:items-center md:gap-3">
			{data.map((item, i) => (
				<div
					key={item.id}
					className={`size-11 relative cursor-pointer 2xl:w-20 2xl:h-20`}
				>
					<img
						className={`w-full aspect-square object-cover relative z-10 rounded-full transition-transform duration-300 border-white border-solid border-2 hover:scale-110`}
						src={item.img_url}
						alt="thumbnails"
						onClick={() => onclick(item)}
					/>
					{state === i && (
						<span className="rounded-full absolute -z-0 bottom-[6px] left-[6px] size-8 motion-safe:animate-ping bg-white 2xl:w-16 2xl:h-16"></span>
					)}
				</div>
			))}
		</div>
	);
}
