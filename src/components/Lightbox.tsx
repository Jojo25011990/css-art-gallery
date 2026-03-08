type LightboxProps = {
	cssart: { id: number; src: string; title: string; alt: string };
	onClose: () => void;
	onNext: () => void;
	onPrev: () => void;
};

const Lightbox = ({ cssart, onClose, onNext, onPrev }: LightboxProps) => {
	return (
		<div
			className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-14 lightbox-media-500"
			role="dialog"
			aria-modal="true"
			aria-label={`Viewing ${cssart.title}`}
		>
			<button
				className="absolute top-5 right-5 text-white text-3xl cursor-pointer"
				onClick={onClose}
				aria-label="Close gallery"
			>
				&times;
			</button>

			<button
				className="absolute left-5 text-white text-2xl cursor-pointer prev-button"
				onClick={onPrev}
				aria-label="Previous artwork"
			>
				&#10094;
			</button>

			<img
				src={cssart.src}
				alt={cssart.alt}
				className="max-h-[80vh] rounded-lg"
			/>

			<button
				className="absolute right-5 text-white text-2xl cursor-pointer next-button"
				onClick={onNext}
				aria-label="Next artwork"
			>
				&#10095;
			</button>
		</div>
	);
};

export default Lightbox;
