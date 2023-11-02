import React, { Children } from 'react'

type BtnProps = {
  color: string;
  text: string;
}

export default function Btn({ color, text }: BtnProps) {
  return (
		<button className="px-5 py-[6px] border border-dark-gray rounded-full hover:border-white transition">
			text
		</button>
  );
}
