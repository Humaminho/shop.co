'use client';
import Menu from './menu-btn';
import Logo from '../common/logo';
import RightHeader from './right-header';
import Navbar from './navbar';
import Searchbar from './searchbar';

export default function Header() {
	return (
		<header>
			<div className="px-4 py-2 lg:py-0 flex justify-between items-center lg:gap-10 lg:px-8 xl:px-24 max-w-[80rem] mx-auto">
				<div className="flex gap-4 items-center">
					<Menu />
					<Logo color="black" />
				</div>
				<Navbar />
				<Searchbar />
				<RightHeader />
			</div>
		</header>
	);
}
