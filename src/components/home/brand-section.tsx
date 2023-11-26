import logos from '../../utils/logos';

export default function BrandSection() {
	return (
		<section className="bg-black text-white">
			<div className="py-10 max-w-[80rem] mx-auto flex flex-wrap justify-center gap-y-5 md:px-4 md:justify-between lg:px-8 xl:px-24">
				{logos.map((logo) => {
					return (
						<div
							key={logo.id}
							className="px-4 md:px-0 hover:brightness-75"
						>
							{logo.html}
						</div>
					);
				})}
			</div>
		</section>
	);
}
