import Link from 'next/link';
import ShopNav from './shop-nav';

export default function Navbar() {
	return (
		<nav className="hidden lg:block">
			<ul className="flex">
				<ShopNav />
				<li>
					<Link
						href="/shop"
						className="block px-3 py-5 border-b-2 border-transparent hover:border-black transition duration-100"
					>
						On Sale
					</Link>
				</li>
				<li>
					<a
						href="#"
						className="block px-3 py-5 border-b-2 border-transparent hover:border-black transition duration-100"
					>
						New Arrivals
					</a>
				</li>
				<li>
					<a
						href="#"
						className="block px-3 py-5 border-b-2 border-transparent hover:border-black transition duration-100"
					>
						Brands
					</a>
				</li>
			</ul>
		</nav>
	);
}
