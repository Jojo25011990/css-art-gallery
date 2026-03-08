import { useState } from "react";
import GalleryItem from "./GalleryItem";
import { cssArts } from "../data/CssArts";
import Lightbox from "./Lightbox";

const Gallery = () => {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	const openLightbox = (index: number) => setSelectedIndex(index);
	const closeLightbox = () => setSelectedIndex(null);

	const next = () =>
		selectedIndex !== null &&
		setSelectedIndex((selectedIndex + 1) % cssArts.length);
	const prev = () =>
		selectedIndex !== null &&
		setSelectedIndex((selectedIndex - 1 + cssArts.length) % cssArts.length);

	return (
		<div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
			{cssArts.map((cssart, index) => (
				<GalleryItem
					key={cssart.id}
					cssart={cssart}
					onClick={() => openLightbox(index)}
				/>
			))}

			{selectedIndex !== null && (
				<Lightbox
					cssart={cssArts[selectedIndex]}
					onClose={closeLightbox}
					onNext={next}
					onPrev={prev}
				/>
			)}
		</div>
	);
};

export default Gallery;
