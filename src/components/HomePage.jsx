/* eslint-disable react/prop-types */
export default function HomePage({ id, headings }) {
	return (
		<div id={id} className="flex justify-center items-center h-screen">
			<div className="relative ">
				<span className="material-symbols-outlined absolute font-bold text-5xl -left-12 -top-3 animate-spin-slow 2xl:text-7xl 2xl:-left-20">
					emergency
				</span>
				<p className="text-lg 2xl:text-3xl">Hi! My name is Riady.</p>
				{headings.map((head, i) => (
					<h2
						key={i}
						className={`head-${i} relative animate-title-fade-left text-5xl font-extrabold 2xl:text-7xl`}
						style={{
							animationDelay: `${i * 100}ms`,
							animationFillMode: "backwards",
						}}
					>
						{head}
					</h2>
				))}
			</div>
		</div>
	);
}
