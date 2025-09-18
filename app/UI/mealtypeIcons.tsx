// components/MealTypeIcon.tsx
import Image from "next/image";
import clsx from "clsx";

type MealTypeIconProps = {
	mealType: string;
	className?: string;
};

const icons: Record<string, string> = {
	//unfortunatly these are all png because downloading the svg needed premium access
	Appetizer: "/mealtypes/inverted/appetizer.png",
	Beverage: "/mealtypes/inverted/beverage.png",
	Breakfast: "/mealtypes/inverted/breakfast.png",
	Dessert: "/mealtypes/inverted/dessert.png",
	Dinner: "/mealtypes/inverted/dinner.png",
	Lunch: "/mealtypes/inverted/lunch.png",
	Snack: "/mealtypes/inverted/snack.png",
	"Side dish": "/mealtypes/inverted/side-dish.png",
};

export default function MealTypeIcon({
	mealType,
	className,
}: MealTypeIconProps) {
	console.log(mealType);

	const src = icons[mealType] ?? "/mealtypes/inverted/default.png";

	return (
		<Image
			src={src}
			alt={mealType}
			width={512}
			height={512}
			className={clsx("inline-block", className)}
		/>
	);
}
