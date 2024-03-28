import { gallery } from "../gallery.json";
import { useState } from "react";
import GalleryBtn from "./GalleryBtn";
import Gallery from "./Gallery";
import ThumbNav from "./ThumbNav";

/* eslint-disable react/prop-types */

export default function WorksPage({ id }) {
	const allFalse = { left: false, center: false, right: false };
	const [galleryIndex, setGalleryIndex] = useState(0);
	const [isPressed, setIsPressed] = useState(allFalse);
	let imgData = gallery[galleryIndex];

	function nextImg() {
		galleryIndex === gallery.length - 1
			? setGalleryIndex(0)
			: setGalleryIndex(galleryIndex + 1);
	}

	function prevImg() {
		galleryIndex === 0
			? setGalleryIndex(gallery.length - 1)
			: setGalleryIndex(galleryIndex - 1);
	}

	function handleTransition(pressedState) {
		setIsPressed(pressedState);
		setTimeout(() => setIsPressed(allFalse), 500);
	}

	function handleThumbnailsNav(item) {
		const position = gallery.findIndex(({ id }) => id === item["id"]);
		position !== -1 ? setGalleryIndex(position) : setGalleryIndex(0);
		handleTransition({ left: false, center: true, right: false });
	}

	return (
		<div id={id} className="flex flex-col justify-center items-center h-screen">
			<div className="hidden lg:flex lg:items-center lg:mb-3 2xl:mb-5">
				<span className="material-symbols-outlined font-bold text-xl animate-spin-slow mr-1 2xl:text-3xl">
					emergency
				</span>
				<span className="text-base 2xl:text-3xl">
					Hover on image to see details
				</span>
			</div>
			<div className="flex justify-evenly items-center w-full mb-5">
				<GalleryBtn
					onclick={() => {
						prevImg();
						handleTransition({ left: true, center: false, right: false });
					}}
				>
					chevron_left
				</GalleryBtn>
				<Gallery state={isPressed} data={imgData} />
				<GalleryBtn
					onclick={() => {
						nextImg();
						handleTransition({ left: false, center: false, right: true });
					}}
				>
					chevron_right
				</GalleryBtn>
			</div>
			<ThumbNav
				data={gallery}
				onclick={handleThumbnailsNav}
				state={galleryIndex}
			/>
		</div>
	);
}
