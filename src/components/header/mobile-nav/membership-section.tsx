import Button from '@/components/common/button';

export default function MembershipSection() {
	return (
		<div className="flex flex-col gap-6 mb-10">
			<p className="font-medium text-stone-400 text-xl">
				Become a SHOP.CO Member for the best products, inspiration and
				stories in fashion.{' '}
				<a href="#" className="text-white">
					Learn more
				</a>
			</p>
			<div className="flex gap-2 font-medium">
				<Button type="full" color="white">
					<a href="">Join Us</a>
				</Button>
				<Button type="outlined">
					<a href="">Sign Up</a>
				</Button>
			</div>
		</div>
	);
}
