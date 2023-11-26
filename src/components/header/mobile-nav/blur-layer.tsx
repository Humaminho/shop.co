'use client';

type BlurLayerProps = {
	closeNav: () => void;
	layerRef: React.RefObject<HTMLDivElement>;
};

export default function BlurLayer({ closeNav, layerRef }: BlurLayerProps) {
	return (
		<div
			ref={layerRef}
			id="layer"
			className="hidden absolute top-0 right-0 bottom-0 left-0 z-10 backdrop-blur-sm brightness-90 lg:hidden"
			onClick={closeNav}
		></div>
	);
}
