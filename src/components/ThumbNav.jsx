/* eslint-disable react/prop-types */
export default function ThumbNav({ data, onclick, state }) {
	return (
		<div className="hidden md:flex md:justify-around md:items-center md:gap-3">
			{data.map((item, i) => (
				<>
					<div
						className={`w-12 h-12 relative cursor-pointer 2xl:w-20 2xl:h-20`}
					>
						<img
							className={`w-full aspect-square object-cover relative z-10 rounded-full border-zinc-500 border-solid border-2`}
							key={item.id}
							src={item.img_url}
							alt="thumbnails"
							onClick={() => onclick(item)}
						/>
						{state === i && (
							<span className="rounded-full absolute -z-0 bottom-[8px] left-2 w-8 h-8 motion-safe:animate-ping bg-black 2xl:w-16 2xl:h-16"></span>
						)}
					</div>
				</>
			))}
		</div>
	);
}
