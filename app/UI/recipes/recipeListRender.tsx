import Image from "next/image";
import Link from "next/link";

import { Recipe } from "../../lib/types";

import MealTypeIcon from "./mealtypeIcons";
import RecipeDetails from "./recipeDetails";
import RecipeIngrediants from "./recipeIngrediants";
import { Suspense } from "react";
import { ListRecipeSkeleton } from "../skeletons";

function RecipeListRender({
	recipe,
	color,
}: {
	recipe: Recipe;
	color: string;
}) {
	return (
		<Suspense fallback={<ListRecipeSkeleton bg={color} />}>
			<div className='flex flex-col justify-center w-full items-center'>
				<abbr
					title={recipe.mealType[0]}
					className='no-underline cursor-default bg-black rounded-full'>
					<MealTypeIcon
						mealType={recipe.mealType[0]}
						className='w-[20vw] md:w-[10vw] lg:w-[8vw] h-auto'
					/>
				</abbr>
				<div className='relative w-full h-[80vw] md:h-[40vw] lg:h-[35vw] -mt-[11vw] md:-mt-[6vw] lg:-mt-[5vw]'>
					<div className='mask-[url("/mask-recipe-image.svg")] mask-no-repeat mask-center flex-1 mask-contain w-full h-full drop-shadow-xl'>
						<Image
							src={recipe.image}
							alt={recipe.name}
							fill
							className='object-cover'
						/>
					</div>
				</div>
				<div
					className={`flex flex-col gap-2 -mt-[24vw] md:-mt-[14vw] lg:-mt-[10vw] pt-[24vw] md:pt-[14vw] lg:pt-[10vw] mb-6 px-8 pb-4 ${color} h-fit w-[80vw] md:w-[40vw] lg:w-[35vw] rounded-b-4xl`}>
					{/* food title */}
					<div className='w-full mb-4 pt-2'>
						<h2 className='text-xl text-center lg:text-2xl'>
							{recipe.name}
						</h2>
					</div>
					{/* details about the food */}
					<RecipeDetails recipe={recipe} view='list' />
					{/* ingredients */}
					<RecipeIngrediants ingredients={recipe.ingredients} />
					{/* read more */}
					<div className='mx-auto text-sm underline text-foreground/75 mb-2'>
						<Link href={`/recipes/${recipe.id}`}>read more</Link>
					</div>
				</div>
			</div>
		</Suspense>
	);
}

export default RecipeListRender;
