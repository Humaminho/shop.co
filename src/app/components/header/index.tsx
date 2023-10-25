import Menu from './menu';
import Logo from './logo';
import RightHeader from './right-header';
import Navbar from './navbar';
import Searchbar from './searchbar';

function Header() {
	return (
		<header>
			<div className="px-4 flex justify-between items-center py-5 gap-10 lg:py-6 lg:px-8 xl:px-24 max-w-[80rem] mx-auto">
				<div className="flex gap-4 items-center">
					<Menu />
					<Logo />
				</div>
				<Navbar />
				<Searchbar />
				<RightHeader />
			</div>
		</header>
	);
}

export default Header;
