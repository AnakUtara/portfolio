/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState, useCallback } from "react";

/* eslint-disable react/prop-types */
export default function NavBar({ menu, scrollTo }) {
	const [location, setLocation] = useState(
		[...Array(menu.length)].map((item, i, self) =>
			i === 0 ? (self[i] = true) : (self[i] = false)
		)
	);

	const handleLocation = useCallback(
		(position) => {
			!location[position]
				? setLocation(
						location.map((isFound, find) => find === position && !isFound)
				  )
				: setLocation(location);
		},
		[location]
	);

	useEffect(() => {
		// console.log(scrollTo);
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry, i, self) => {
					handleLocation(self.findIndex((e) => e.isIntersecting));
				});
			},
			{
				threshold: 0.45,
			}
		);
		scrollTo.forEach((id) => observer.observe(document.querySelector(id)));
		return () => {
			scrollTo.forEach((id) => observer.unobserve(document.querySelector(id)));
		};
	}, [location, scrollTo, handleLocation]);

	return (
		<ul>
			{menu.map((item, i) => (
				<li
					className={`text-[13px] w-fit transition-all duration-200 ${
						location[i] &&
						"py-1 px-2 bg-white text-black rounded-e-md shadow-md border-l-4 border-zinc-500"
					} sm:text-sm md:text-base mb-2 2xl:text-3xl 2xl:mb-4`}
					key={i}
				>
					<a href={scrollTo[i]} onClick={() => handleLocation(i)}>
						{item}
					</a>
				</li>
			))}
		</ul>
	);
}
