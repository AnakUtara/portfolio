/* eslint-disable react/prop-types */
export default function NavBar({ menu, pages }) {
	return (
		<ul>
			{menu.map((item, i) => (
				<li
					className="text-base mb-2 2xl:text-3xl 2xl:mb-4 visited:underline"
					key={i}
				>
					<a href={pages[i]}>{item}</a>
				</li>
			))}
		</ul>
	);
}
