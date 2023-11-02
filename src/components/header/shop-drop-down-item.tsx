'use client';
import Link from 'next/link';
import DropDownBranch from './drop-down-branch';

export default function ShopDropDownItem({ category }: any) {
	return (
		<>
			{category.hasBranches ? (
				<DropDownBranch category={category} />
			) : (
				<li className="flex items-center justify-between px-1 cursor-pointer">
					<Link
						href={category.href}
						className="block px-5 py-2 w-48 rounded-full hover:bg-gray-100"
					>
						{category.title}
					</Link>
				</li>
			)}
		</>
	);
}
