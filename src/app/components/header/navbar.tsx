import React from 'react';
import ShopNav from './shop-nav';

export default function Navbar() {
	return (
		<nav className="hidden sm:block">
			<ul className="flex gap-6">
        <ShopNav />
				<li>
					<a href="#">On Sale</a>
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
