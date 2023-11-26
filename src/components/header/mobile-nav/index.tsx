'use client';
import { useRef } from 'react';
import Logo from '../../common/logo';
import CloseMenuBtn from './close-menu-btn';
import BottomLinks from './bottom-links';
import MembershipSection from './membership-section';
import MobileNavLinks from './mobile-nav-links';
import BlurLayer from './blur-layer';

export default function MobileNav() {
	const mobileNavRef = useRef<HTMLDivElement>(null);
	const layerRef = useRef<HTMLDivElement>(null);

	function closeNav() {
		mobileNavRef.current?.classList.add('-translate-x-full');
		mobileNavRef.current?.classList.add('rounded-br-full');
		mobileNavRef.current?.classList.remove('text-white');
		layerRef.current?.classList.add('hidden');
		document.body.style.overflow = 'visible';
		document.body.style.height = 'auto';

		setTimeout(() => {
			mobileNavRef.current?.classList.add('hidden');
		}, 200);
	}

	return (
		<>
			<BlurLayer closeNav={closeNav} layerRef={layerRef} />
			<div
				ref={mobileNavRef}
				id="mobile-nav"
				className="hidden text-base absolute z-20 top-0 left-0 right-0 bottom-0 max-w-sm overflow-hidden bg-black transition-all duration-200 -translate-x-full rounded-br-full lg:hidden"
			>
				<div className="h-full px-4 flex flex-col justify-between">
					<div className="py-5 flex justify-between items-center">
						<Logo color="white" />
						<CloseMenuBtn closeNav={closeNav} />
					</div>
					<MobileNavLinks />
					<MembershipSection />
					<BottomLinks />
				</div>
			</div>
		</>
	);
}
