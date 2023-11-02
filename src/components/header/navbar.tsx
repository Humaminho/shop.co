import Link from 'next/link';
import ShopNav from './shop-nav';

export default function Navbar() {
	return (
		<nav className="hidden sm:block">
			<ul className="flex gap-6">
        <ShopNav />
				<li>
					<Link href="/shop">On Sale</Link>
				</li>
				<li>
					<a href="#">New Arrivals</a>
				</li>
				<li>
					<a href="#">Brands</a>
				</li>
			</ul>
		</nav>
	);
}
