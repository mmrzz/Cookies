import Link from "next/link";

//I am not sure this is a good idea but it seems to work so i'm gonna let it be

type Props = {
	isDevided: boolean;
	direction: "row" | "column";
	size: "small" | "normal";
	ariaLabel: string;
};

function NavigationMenu({ isDevided, direction, size, ariaLabel }: Props) {
	const devider = isDevided
		? "after:w-0.5 after:content-[''] after:h-4 md:after:h-6 after:bg-background after:absolute after:translate-x-4 after:translate-y-1 after:opacity-30"
		: "";
	const dir = direction === "column" ? "flex-col gap-2" : "flex-row gap-8";
	const textSize = size === "normal" ? "text-xl" : "text-base";

	return (
		<nav aria-label={ariaLabel}>
			<ul
				className={`flex ${
					dir + " " + textSize
				} justify-center lg:items-center`}>
				<li
					className={`focus:underline focus:text-purple-500 active:underline active:text-purple-500 hover:underline hover:text-purple-500 ${devider}`}>
					<Link href={"/"}>Home</Link>
				</li>
				<li
					className={`focus:underline focus:text-green-500 active:underline active:text-green-500 hover:underline hover:text-green-500 ${devider}`}>
					<Link href={"/categories"}>Categories</Link>
				</li>
				<li
					className={`focus:underline focus:text-red-500 active:underline active:text-red-500 hover:underline hover:text-red-500 ${devider}`}>
					<Link href={"/cuisines"}>Cuisines</Link>
				</li>
				<li className='focus:underline focus:text-blue-500 active:underline active:text-blue-500 hover:underline hover:text-blue-500'>
					<Link href={"/custimize"}>Custimize</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavigationMenu;
