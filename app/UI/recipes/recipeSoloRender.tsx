import Image from "next/image";
import RecipeDetails from "./recipeDetails";
import RecipeIngrediants from "./recipeIngrediants";
import RecipeInstructions from "./recipeInstruction";
import MealTypeIcon from "./mealtypeIcons";
import { Rochester } from "next/font/google";
import { Recipe } from "../../lib/types";
import { Suspense } from "react";
import { SoloRecipeSkeleton } from "../skeletons";
const rochester = Rochester({
	subsets: ["latin"],
	weight: "400",
});

type Props = { title: string; recipe: Recipe; color: "home" | "random" };

function RecipeSoloRender({ title, recipe, color }: Props) {
	const colors = ["purple", "green", "blue", "red"];

	const selectColorScheme = () => {
		if (color === "home") return "purple";
		const index = Math.floor(Math.random() * 4);
		return colors[index];
	};
	const colorScheme = selectColorScheme();
	const bg = `bg-linear-to-l from-${colorScheme}-700 to-${colorScheme}-500 from-10% to-66%`;

	return (
		<Suspense fallback={<SoloRecipeSkeleton bg={bg} />}>
			<section
				id='hero'
				className={`w-full h-screen max-h-fit min-h-fit p-0 flex flex-col overflow-clip items-center sm:flex-row sm:items-stretch max-w-6xl text-foreground ${bg} rounded-4xl`}>
				<div className='flex justify-center flex-shrink-1 items-center w-full h-1/4 sm:h-full sm:w-2/5 overflow-clip'>
					<Image
						src={recipe.image}
						alt={recipe.name}
						width={300}
						height={300}
						className='w-full sm:h-full object-cover'
					/>
				</div>

				<div className='w-full sm:h-full flex-grow-1 flex-shrink-1 flex flex-col gap-2 p-4 lg:p-8 min-w-0'>
					{/* main title */}
					<h1
						className={`${rochester.className} text-5xl sm:text-6xl text-nowrap mx-auto my-2 sm:my-4 rounded-b-sm border-b-2 border-white`}>
						{title}
					</h1>
					{/* food title */}
					<div className='flex gap-2 items-center my-2 sm:my-4'>
						<abbr
							title={recipe.mealType[0]}
							className='no-underline cursor-default'>
							<MealTypeIcon
								mealType={recipe.mealType[0]}
								className='w-8 sm:w-10 h-auto'
							/>
						</abbr>
						<h2 className='text-2xl'>{recipe.name}</h2>
					</div>
					{/* details about the food */}
					<RecipeDetails recipe={recipe} view='solo' />
					{/* ingredients */}
					<RecipeIngrediants ingredients={recipe.ingredients} />
					{/*instructions*/}
					<RecipeInstructions instructions={recipe.instructions} />
					{/*reviews*/}
					<div className='h-4 mx-auto flex items-center mt-2'>
						<p className='text-xs border-r-1 pr-2'>
							{recipe.reviewCount} reviews
						</p>
						<p className='text-xs px-2'>{recipe.rating}</p>
					</div>
				</div>
			</section>
		</Suspense>
	);
}

export default RecipeSoloRender;
