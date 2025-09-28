// components/MealTypeIcon.tsx
import Image from "next/image";
import clsx from "clsx";

type MealTypeIconProps = {
	mealType: string;
	className?: string;
	inverted?: boolean;
};

const invertedIcons: Record<string, string> = {
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

const icons: Record<string, string> = {
	//unfortunatly these are all png because downloading the svg needed premium access
	Appetizer: "/mealtypes/appetizer.png",
	Beverage: "/mealtypes/beverage.png",
	Breakfast: "/mealtypes/breakfast.png",
	Dessert: "/mealtypes/dessert.png",
	Dinner: "/mealtypes/dinner.png",
	Lunch: "/mealtypes/lunch.png",
	Snack: "/mealtypes/snack.png",
	"Side Dish": "/mealtypes/side-dish.png",
};

export default function MealTypeIcon({
	mealType,
	className,
	inverted = true,
}: MealTypeIconProps) {
	const src = inverted
		? invertedIcons[mealType] ?? "/mealtypes/inverted/default.png"
		: icons[mealType] ?? "/mealtypes/default.png";

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
