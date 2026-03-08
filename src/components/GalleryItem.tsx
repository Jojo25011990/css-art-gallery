type GalleryItemProps = {
	cssart: { id: number; src: string; title: string; alt: string };
	onClick: () => void;
};

const GalleryItem = ({ cssart, onClick }: GalleryItemProps) => {
	return (
		<figure
			className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform"
			onClick={onClick}
		>
			<img
				src={cssart.src}
				alt={cssart.alt}
				className="rounded-lg w-full h-auto"
			/>
			<figcaption className="mt-2 text-center text-sm text-white">
				{cssart.title}
			</figcaption>
		</figure>
	);
};

export default GalleryItem;
