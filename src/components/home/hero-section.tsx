import Image from 'next/image';
import Paragraph from '../common/paragraph';
import KeyFigures from './key-figures';
import HeroImage from './hero-image';

export default function HeroSection() {
	return (
		<section className="bg-light-gray pt-10 sm:pt-14 md:pt-0 md:flex items-center max-w-[80rem] mx-auto">
			<div className="px-4 max-w-2xl md:pr-2 md:pl-6 lg:pl-8 xl:pl-24 lg:py-12">
				<h1 className="font-display font-bold text-4xl mb-5 sm-text-[44px] md:text-[50px] lg:text-6xl lg:mb-8">
					FIND CLOTHES THAT MATCHES YOUR STYLE
				</h1>
				<Paragraph
					content="Browse through our diverse range of meticulously crafted
					garments, designed to bring out your individuality and cater
					to your sense of style."
				/>
				<button className="mb-5 py-4 px-14 w-full sm:w-auto bg-black text-white rounded-full font-medium hover:opacity-75 transition lg:mb-12">
					Shop Now
				</button>
				<KeyFigures />
			</div>
			<HeroImage />
		</section>
	);
}
