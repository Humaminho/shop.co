'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function DropDownBranch({ category }: any) {
	const [open, setOpen] = useState(false);

	return (
		<li
			className="group/branch relative cursor-pointer px-1"
			onMouseOver={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			<div className="flex items-center justify-between w-48 px-5 py-2 hover:bg-gray-100 rounded-full transition">
				<p>{category.title}</p>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 20 20"
					className="group-hover/branch:translate-x-1 transition"
				>
					<path
						fill="currentColor"
						fillRule="evenodd"
						d="m7.053 2.158l7.243 7.256a.66.66 0 0 1 .204.483a.705.705 0 0 1-.204.497c-2.62 2.556-5.145 5.023-7.575 7.401c-.125.117-.625.408-1.011-.024c-.386-.433-.152-.81 0-.966l7.068-6.908l-6.747-6.759c-.246-.339-.226-.652.06-.939c.286-.287.607-.3.962-.04Z"
					/>
				</svg>
			</div>
			{open && (
				<div className="absolute rounded-sm p-1 -top-1 left-[200px] bg-white border border-gray-200 shadow-md">
					<ul>
						{category.branches.map((branch: any) => {
							return (
								<li
									key={branch.title}
									className="flex items-center justify-between px-5 py-2 rounded-full w-48 cursor-pointer hover:bg-gray-100 transition"
								>
									<Link href={branch.href} className="block">
										{branch.title}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</li>
	);
}
