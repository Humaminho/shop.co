'use client';
import { ReactNode } from 'react';

type ButtonProps = {
	children: ReactNode;
	type: 'full' | 'outlined';
	color?: 'black' | 'white';
};

export default function Button({
	children,
	type,
	color = 'black',
}: ButtonProps) {
	return type === 'full' ? (
		<button
			className={
				'px-5 py-[6px] rounded-full transition ' +
				(color === 'black'
					? 'bg-black text-white hover:opacity-50'
					: 'bg-white text-black hover:brightness-75')
			}
		>
			{children}
		</button>
	) : (
		<button className="px-5 py-[6px] border border-dark-gray rounded-full hover:border-white transition">
			{children}
		</button>
	);
}
