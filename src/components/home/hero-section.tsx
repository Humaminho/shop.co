import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="bg-light-gray pt-10 sm:pt-14 md:pt-0 md:flex items-center max-w-[80rem] mx-auto">
			<div className="px-4 max-w-2xl md:pr-2 md:pl-6 lg:pl-8 xl:pl-24 lg:py-12">
				<h1 className="font-display font-bold text-4xl mb-5 sm-text-[44px] md:text-[50px] lg:text-6xl lg:mb-8">
					FIND CLOTHES THAT MATCHES YOUR STYLE
				</h1>
				<p className="text-dark-gray text-sm mb-6 lg:text-base lg:mb-8">
					Browse through our diverse range of meticulously crafted
					garments, designed to bring out your individuality and cater
					to your sense of style.
				</p>
				<button className="mb-5 py-4 px-14 w-full sm:w-auto bg-black text-white rounded-full font-medium hover:opacity-75 transition lg:mb-12">
					Shop Now
				</button>
				<div className="grid grid-cols-2 grid-rows-2 gap-y-3 sm:flex">
					<div className="flex flex-col items-center w-full sm:w-auto sm:pr-8 sm:items-start">
						<div className="flex flex-col items-start">
							<p className="text-2xl font-bold lg:text-4xl">
								200+
							</p>
							<p className="text-xs text-dark-gray relative top-[-0.375rem] lg:text-base">
								Brands
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center w-full sm:w-auto sm:px-8 border-l border-gray-300">
						<div className="flex flex-col items-start">
							<p className="text-2xl font-bold lg:text-4xl">
								2000+
							</p>
							<p className="text-xs text-dark-gray relative top-[-0.375rem] lg:text-base">
								Quality Products
							</p>
						</div>
					</div>
					<div className="col-start-1 col-span-2 flex flex-col items-center w-full sm:w-auto sm:pl-8 border-gray-300 sm:col-start-3 sm:col-span-1 sm:border-l sm:items-end">
						<div className="flex flex-col items-start">
							<p className="text-2xl font-bold lg:text-4xl">
								30,000+
							</p>
							<p className="text-xs text-dark-gray relative top-[-0.375rem] lg:text-base">
								Happy Clients
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="sm:px-24 md:px-0 self-end">
				<Image
					src={'/images/hero.jpg'}
					width={727}
					height={958}
					alt="Two stylish individuals"
					className="mx-auto h-[400px] object-top object-cover sm:h-[500px] md:h-[400px] lg:h-[500px] large:h-[600px]"
				/>
			</div>
		</section>
	);
}
