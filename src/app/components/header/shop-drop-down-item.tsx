'use client';
import Link from 'next/link';
import DropDownBranch from './drop-down-branch';

export default function ShopDropDownItem({ category }: any) {
	return (
		<>
			{category.hasBranches ? (
				<DropDownBranch category={category} />
			) : (
				<li className="group flex items-center justify-between px-4 py-2 w-48 cursor-pointer hover:bg-gray-100">
					<Link href={category.href} className="block">
						{category.title}
					</Link>
				</li>
			)}
		</>
	);
}
