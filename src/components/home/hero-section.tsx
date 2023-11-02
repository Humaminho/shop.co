import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="bg-light-gray pt-10">
			<div className="px-4 lg:px-8 xl:px-24">
				<h1 className="font-display font-bold text-4xl mb-5">
					FIND CLOTHES THAT MATCHES YOUR STYLE
				</h1>
				<p className="text-dark-gray text-sm mb-6">
					Browse through our diverse range of meticulously crafted
					garments, designed to bring out your individuality and cater
					to your sense of style.
				</p>
				<button className="mb-5 py-4 px-14 w-full bg-black text-white rounded-full font-medium">
					Shop Now
				</button>
				<div className="grid grid-cols-2 grid-rows-2 gap-y-3">
					<div className="flex flex-col items-center w-full ">
						<p className="text-2xl font-bold">200+</p>
						<p className="text-xs text-dark-gray relative top-[-0.375rem]">
							International Brands
						</p>
					</div>
					<div className="flex flex-col items-center w-full border-l border-gray-300">
						<p className="text-2xl font-bold">2000+</p>
						<p className="text-xs text-dark-gray relative top-[-0.375rem]">
							High-Quality Products
						</p>
					</div>
					<div className=" col-start-1 col-span-2 flex flex-col items-center w-full ">
						<p className="text-2xl font-bold">30,000+</p>
						<p className="text-xs text-dark-gray relative top-[-0.375rem]">
							Happy Clients
						</p>
					</div>
				</div>
			</div>
			<div>
				<Image
					src={'/images/hero-image-phone.png'}
					width={1000}
					height={1000}
					alt="Two stylish individuals"
				/>
			</div>
		</section>
	);
}
