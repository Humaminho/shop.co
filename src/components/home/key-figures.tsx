export default function KeyFigures() {
	return (
		<div className="grid grid-cols-2 grid-rows-2 gap-y-3 sm:flex">
			<div className="flex flex-col items-center w-full sm:w-auto sm:pr-8 sm:items-start">
				<div className="flex flex-col items-start">
					<p className="text-2xl font-bold lg:text-4xl">200+</p>
					<p className="text-xs text-dark-gray relative top-[-0.375rem] lg:text-base">
						Brands
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center w-full sm:w-auto sm:px-8 border-l border-gray-300">
				<div className="flex flex-col items-start">
					<p className="text-2xl font-bold lg:text-4xl">2000+</p>
					<p className="text-xs text-dark-gray relative top-[-0.375rem] lg:text-base">
						Quality Products
					</p>
				</div>
			</div>
			<div className="col-start-1 col-span-2 flex flex-col items-center w-full sm:w-auto sm:pl-8 border-gray-300 sm:col-start-3 sm:col-span-1 sm:border-l sm:items-end">
				<div className="flex flex-col items-start">
					<p className="text-2xl font-bold lg:text-4xl">30,000+</p>
					<p className="text-xs text-dark-gray relative top-[-0.375rem] lg:text-base">
						Happy Clients
					</p>
				</div>
			</div>
		</div>
	);
}
