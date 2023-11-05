'use client';
import { useEffect, useRef } from 'react';
import ShopDropDownItem from './shop-drop-down-item';

const categories = [
	{
		title: 'Trending',
		href: '/',
		hasBranches: false,
	},
	{
		title: 'T-shirts',
		hasBranches: true,
		branches: [
			{ title: 'Crew Neck T-shirts', href: '/crew-neck-t-shirts' },
			{ title: 'V-Neck T-shirts', href: '/v-neck-t-shirts' },
			{ title: 'Polo Shirts', href: '/polo-shirts' },
			{ title: 'Graphic Tees', href: '/graphic-tees' },
		],
	},
	{
		title: 'Pants',
		hasBranches: true,
		branches: [
			{ title: 'Jeans', href: '/jeans' },
			{ title: 'Chinos', href: '/chinos' },
			{ title: 'Joggers', href: '/joggers' },
		],
	},
	{
		title: 'Skirts',
		hasBranches: true,
		branches: [
			{ title: 'A-Line Skirts', href: '/a-line-skirts' },
			{ title: 'Maxi Skirts', href: '/maxi-skirts' },
			{ title: 'Mini Skirts', href: '/mini-skirts' },
		],
	},
	{
		title: 'Shoes',
		hasBranches: true,
		branches: [
			{ title: 'Sneakers', href: '/sneakers' },
			{ title: 'Boots', href: '/boots' },
			{ title: 'Sandals', href: '/sandals' },
		],
	},
	{
		title: 'Accessories',
		hasBranches: true,
		branches: [
			{ title: 'Hats', href: '/hats' },
			{ title: 'Scarves', href: '/scarves' },
			{ title: 'Belts', href: '/belts' },
		],
	},
];

export default function ShopDropDown({setOpen}: any) {

  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
		function handleOutsideClick(event: any) {
			if (
				dropDownRef.current &&
				!dropDownRef.current.contains(event.target)
			) {
				setOpen(false);
			}
		}

		document.addEventListener('mousedown', handleOutsideClick);

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
  }, [setOpen]);

	return (
		<div
			ref={dropDownRef}
			className="absolute py-1 rounded-sm -left-4 top-[62px] lg:top-[66px] bg-white border border-gray-200 shadow-md"
		>
			<ul>
				{categories.map((category) => {
					return (
						<ShopDropDownItem
							key={category.title}
							category={category}
						/>
					);
				})}
			</ul>
		</div>
	);
}
