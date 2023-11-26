export default function BottomLinks() {
  return (
		<div className="flex flex-col gap-4 mb-5">
			<div className="flex gap-3">
				<svg
					aria-hidden="true"
					focusable="false"
					viewBox="0 0 24 24"
					role="img"
					width="24px"
					height="24px"
					fill="none"
				>
					<path
						stroke="currentColor"
						strokeMiterlimit="10"
						strokeWidth="1.5"
						d="M20.25 5.25V16.5c0 1.24-1.01 2.25-2.25 2.25H6c-1.24 0-2.25-1.01-2.25-2.25V5.25"
					></path>
					<path
						stroke="currentColor"
						strokeMiterlimit="10"
						strokeWidth="1.5"
						d="M8.25 18.5v-7.25h7.5v7.25M12 11.25v7.25M1.5 5.25h21"
					></path>
				</svg>
				<a href="">Find a Store</a>
			</div>
			<div className="flex gap-3">
				<svg
					aria-hidden="true"
					focusable="false"
					viewBox="0 0 24 24"
					role="img"
					width="24px"
					height="24px"
					fill="none"
				>
					<path
						stroke="currentColor"
						strokeMiterlimit="10"
						strokeWidth="1.5"
						d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zM11.99 18v-1.5"
					></path>
					<path
						stroke="currentColor"
						strokeMiterlimit="10"
						strokeWidth="1.5"
						d="M9 9.75a3 3 0 114.29 2.71c-.78.37-1.29 1.16-1.29 2.03V15"
					></path>
				</svg>
				<a href="">Help</a>
			</div>
		</div>
  );
}