import HeroSection from '@/components/home/hero-section';
import BrandSection from '@/components/home/brand-section';

export default function Home() {
	return (
		<main className="bg-light-gray">
			<div>
				<HeroSection />
				<BrandSection />
			</div>
		</main>
	);
}
