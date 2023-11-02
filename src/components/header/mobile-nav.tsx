'use client';
import { useRef } from 'react';
import Logo from '../common/logo';

export default function MobileNav() {
	const mobileNavRef = useRef<HTMLDivElement>(null);
	const layerRef = useRef<HTMLDivElement>(null);

	function closeNav() {
		mobileNavRef.current?.classList.add('-translate-x-full');
		mobileNavRef.current?.classList.add('rounded-br-full');
		mobileNavRef.current?.classList.remove('text-white');
		layerRef.current?.classList.add('hidden');

		setTimeout(() => {
			mobileNavRef.current?.classList.add('hidden');
		}, 200);
	}

	return (
		<>
			<div
				ref={layerRef}
				id="layer"
				className="hidden absolute top-0 right-0 bottom-0 left-0 z-10 backdrop-blur-sm brightness-90"
				onClick={closeNav}
			>
				{/* Blur layer */}
			</div>
			<div
				ref={mobileNavRef}
				id="mobile-nav"
				className="hidden md:hidden text-base absolute z-20 top-0 left-0 right-0 bottom-0 max-w-sm overflow-hidden bg-black transition-all duration-200 -translate-x-full rounded-br-full"
			>
				<div className="h-full px-4 flex flex-col justify-between">
					<div className="py-5 flex justify-between items-center">
						<Logo color="white" />
						<button className="p-2 hover:bg-stone-900 rounded-full transition duration-75">
							<svg
								width="24"
								height="24"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="cursor-pointer"
								onClick={closeNav}
							>
								<path
									d="M16.2882 14.9617C16.4644 15.1378 16.5633 15.3767 16.5633 15.6258C16.5633 15.8749 16.4644 16.1137 16.2882 16.2898C16.1121 16.466 15.8733 16.5649 15.6242 16.5649C15.3751 16.5649 15.1362 16.466 14.9601 16.2898L9.99997 11.3281L5.03825 16.2883C4.86213 16.4644 4.62326 16.5633 4.37418 16.5633C4.12511 16.5633 3.88624 16.4644 3.71012 16.2883C3.534 16.1122 3.43506 15.8733 3.43506 15.6242C3.43506 15.3751 3.534 15.1363 3.71012 14.9602L8.67184 10L3.71168 5.03828C3.53556 4.86216 3.43662 4.62329 3.43662 4.37422C3.43662 4.12515 3.53556 3.88628 3.71168 3.71016C3.8878 3.53404 4.12668 3.43509 4.37575 3.43509C4.62482 3.43509 4.86369 3.53404 5.03981 3.71016L9.99997 8.67188L14.9617 3.70938C15.1378 3.53326 15.3767 3.43431 15.6257 3.43431C15.8748 3.43431 16.1137 3.53326 16.2898 3.70938C16.4659 3.8855 16.5649 4.12437 16.5649 4.37344C16.5649 4.62251 16.4659 4.86138 16.2898 5.0375L11.3281 10L16.2882 14.9617Z"
									fill="currentColor"
								/>
							</svg>
						</button>
					</div>
					<nav className="pb-12">
						<ul className="flex flex-col">
							<li>
								<a href="#" className="block text-2xl py-1">
									Shop
								</a>
							</li>
							<li>
								<a href="#" className="block text-2xl py-1">
									On Sale
								</a>
							</li>
							<li>
								<a href="#" className="block text-2xl py-1">
									New Arrivals
								</a>
							</li>
							<li>
								<a href="#" className="block text-2xl py-1">
									Brands
								</a>
							</li>
						</ul>
					</nav>
					<div className="flex flex-col gap-6 mb-10">
						<p className="font-medium text-stone-400 text-xl">
							Become a SHOP.CO Member for the best products,
							inspiration and stories in fashion.{' '}
							<a href="#" className="text-white">
								Learn more
							</a>
						</p>
						<div className="flex gap-2 font-medium">
							<button className="px-5 py-[6px] bg-white text-black rounded-full hover:brightness-75 transition">
								Join Us
							</button>
							<button className="px-5 py-[6px] border border-dark-gray rounded-full hover:border-white transition">
								Sign In
							</button>
						</div>
					</div>
					<div className="flex flex-col gap-4 mb-5">
						<div className="flex gap-3">
							<svg
								aria-hidden="true"
								focusable="false"
								viewBox="0 0 24 24"
								role="img"
								width="24px"
								height="24px"
								fill="none"
							>
								<path
									stroke="currentColor"
									stroke-miterlimit="10"
									stroke-width="1.5"
									d="M20.25 5.25V16.5c0 1.24-1.01 2.25-2.25 2.25H6c-1.24 0-2.25-1.01-2.25-2.25V5.25"
								></path>
								<path
									stroke="currentColor"
									stroke-miterlimit="10"
									stroke-width="1.5"
									d="M8.25 18.5v-7.25h7.5v7.25M12 11.25v7.25M1.5 5.25h21"
								></path>
							</svg>
							<a href="">Find a Store</a>
						</div>
						<div className="flex gap-3">
							<svg
								aria-hidden="true"
								focusable="false"
								viewBox="0 0 24 24"
								role="img"
								width="24px"
								height="24px"
								fill="none"
							>
								<path
									stroke="currentColor"
									stroke-miterlimit="10"
									stroke-width="1.5"
									d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zM11.99 18v-1.5"
								></path>
								<path
									stroke="currentColor"
									stroke-miterlimit="10"
									stroke-width="1.5"
									d="M9 9.75a3 3 0 114.29 2.71c-.78.37-1.29 1.16-1.29 2.03V15"
								></path>
							</svg>
							<a href="">Help</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
