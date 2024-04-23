'use client';
import { useEffect } from 'react';
import HeroSection from '@/components/home/hero-section';
import BrandSection from '@/components/home/brand-section';
import Image from 'next/image';
import apiKey from '@/utils/test';

export default function Home() {

  useEffect(() => {
    console.log(apiKey);
  })
	return (
		<main className="bg-light-gray">
			<div>
				<HeroSection />
				<BrandSection />
				<Image
					className="hidden"
					src="https://images.thenorthface.com/is/image/TheNorthFace/NF0A831M_O3X_hero?hei=1175&wid=1005&qlt=50&resMode=sharp2&op_sum=0.9,1.0,8,0"
					alt="hero"
					width={1000}
					height={1000}
				/>
			</div>
		</main>
	);
}
