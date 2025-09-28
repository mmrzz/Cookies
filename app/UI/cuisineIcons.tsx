// components/MealTypeIcon.tsx
import Image from "next/image";
import clsx from "clsx";

type MealTypeIconProps = {
	cuisine: string;
	className?: string;
};

const icons: Record<string, string> = {
	American: "/cuisines/american.svg",
	Asian: "/cuisines/asian.svg",
	Brazilian: "/cuisines/brazilian.svg",
	Cocktail: "/cuisines/cocktail.svg",
	Greek: "/cuisines/greek.svg",
	Hawaiian: "/cuisines/hawaiian.svg",
	Indian: "/cuisines/indian.svg",
	Italian: "/cuisines/italian.svg",
	Japanese: "/cuisines/japanese.svg",
	Korean: "/cuisines/korean.svg",
	Lebanese: "/cuisines/lebanese.svg",
	Mediterranean: "/cuisines/mediterranean.svg",
	Mexican: "/cuisines/mexican.svg",
	Moroccan: "/cuisines/moroccan.svg",
	Pakistani: "/cuisines/pakistani.svg",
	Russian: "/cuisines/russian.svg",
	Smoothie: "/cuisines/smoothie.svg",
	Spanish: "/cuisines/spanish.svg",
	Thai: "/cuisines/thai.svg",
	Turkish: "/cuisines/turkish.svg",
	Vietnamese: "/cuisines/vietnamese.svg",
};

export default function CuisineIcon({ cuisine, className }: MealTypeIconProps) {
	const src = icons[cuisine] ?? "/mealtypes/default.png";

	return (
		<Image
			src={src}
			alt={cuisine}
			width={512}
			height={512}
			className={clsx("inline-block", className)}
		/>
	);
}
