import Image from "next/image";

export default function HeroImage() {
	return (
		<div className="sm:px-24 md:px-0 self-end">
			<Image
				src={'/images/hero.jpg'}
				width={727}
				height={958}
				alt="Two stylish individuals"
				className="mx-auto h-[400px] object-top object-cover sm:h-[500px] md:h-[400px] lg:h-[500px] large:h-[600px]"
			/>
		</div>
	);
}
