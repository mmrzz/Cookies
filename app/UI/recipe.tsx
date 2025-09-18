import Image from "next/image";
import Link from "next/link";

import { Recipe } from "../lib/types";
import Ingredient from "./ingredient";

import { categories } from "./mealtypeIcons";
import { Factory, Users, Timer, CookingPot } from "lucide-react";

function RecipeRender({ recipe, color }: { recipe: Recipe; color: string }) {
	const mealType = categories.find((cat) => cat.name === recipe.mealType[0]);

	return (
		<div className='flex flex-col justify-center w-full items-center'>
			<abbr
				title={recipe.mealType[0]}
				className='no-underline cursor-default bg-black rounded-full'>
				{mealType?.icon && (
					<mealType.icon className='w-[21vw] md:w-[11vw] lg:w-[9vw] h-auto' />
				)}
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
				className={`flex flex-col -mt-[24vw] md:-mt-[14vw] lg:-mt-[10vw] pt-[24vw] md:pt-[14vw] lg:pt-[10vw] mb-6 px-4 ${color} h-fit w-[80vw] md:w-[40vw] lg:w-[35vw] rounded-b-4xl`}>
				{/* food title */}
				<div className='w-full mb-4 pt-2'>
					<h2 className='text-xl text-center lg:text-2xl'>
						{recipe.name}
					</h2>
				</div>
				{/* details about the food */}
				<div className='mx-2 sm:mx-8 mb-2 flex flex-col gap-2'>
					<div className='flex gap-2 items-center  bg-white/10 shadow-xs px-2 py-4 rounded-2xl'>
						<Timer className='w-6 h-auto' />
						<h3>time:</h3>
						<p className='text-xs sm:text-sm opacity-70 text-wrap'>
							<abbr
								title='prepration time'
								className='no-underline cursor-default'>
								{recipe.prepTimeMinutes}
							</abbr>{" "}
							+{" "}
							<abbr
								title='cooking time'
								className='no-underline cursor-default'>
								{recipe.cookTimeMinutes}
							</abbr>{" "}
							minutes
						</p>
					</div>
					<div className='flex items-center gap-2 bg-white/10 shadow-xs px-2 py-4 rounded-2xl'>
						<Users className='w-6 h-auto' />

						<h3 className='text-sm sm:text-[16px]'>servings:</h3>
						<p className='text-xs sm:text-sm opacity-70'>
							{recipe.servings}{" "}
							{recipe.servings === 1 ? "person" : "people"}
						</p>
					</div>
					<div className='flex items-center gap-2 bg-white/10 shadow-xs px-2 py-4 rounded-2xl'>
						<Factory className='w-6 h-auto' />
						<h3>calories per serving:</h3>
						<p className='text-xs sm:text-sm opacity-70'>
							{recipe.caloriesPerServing} calories
						</p>
					</div>
				</div>
				{/* ingredients */}
				<div className='mx-2 sm:mx-8 mb-2 flex flex-col justify-strat bg-white/10 p-2  rounded-xl'>
					<div className='flex-1 flex gap-2'>
						<CookingPot className='w-6 h-auto' />
						<h3 className='text-lg'>ingredients:</h3>
					</div>
					<div className='ml-2 px-[5%] pb-1 flex gap-2 overflow-x-auto mask-r-from-95% mask-l-from-95% [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-foreground/50'>
						{recipe.ingredients.map((ingredient, id) => (
							<Ingredient ingredient={ingredient} key={id} />
						))}
					</div>
				</div>
				{/* read more */}
				<div className='mx-auto text-sm underline text-foreground/75 mb-2 sm:mb-8'>
					<Link href={`/recipes/${recipe.id}`}>read more</Link>
				</div>
			</div>
		</div>
	);
}

export default RecipeRender;
