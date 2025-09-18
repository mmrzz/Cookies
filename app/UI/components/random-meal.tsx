import Image from "next/image";
import { GetStaticProps } from "next";
import Ingredient from "../ingredient";
import { fetchRandomMeal } from "@/app/lib/data";

import { Timer, Users, CookingPot, Factory, ChefHat } from "lucide-react";
import MealTypeIcon from "../mealtypeIcons";

import { Rochester } from "next/font/google";
const rochester = Rochester({
	subsets: ["latin"],
	weight: "400",
});

async function RandomMealHero() {
	const recipe = await fetchRandomMeal();

	return (
		<section
			id='hero'
			className='w-full h-screen max-h-fit min-h-fit p-0 flex flex-col overflow-clip items-center sm:flex-row sm:items-stretch max-w-6xl text-foreground bg-linear-to-l from-purple-700 to-purple-500 from-10% to-66% rounded-4xl'>
			<div className='flex justify-center flex-shrink-1 items-center w-full h-1/4 sm:h-full sm:w-2/5 overflow-clip'>
				<Image
					src={recipe.image}
					alt={recipe.name}
					width={300}
					height={300}
					className='w-full sm:h-full object-cover'
				/>
			</div>

			<div className='w-full sm:h-full flex-grow-1 flex-shrink-1 flex flex-col p-4 min-w-0'>
				{/* main title */}
				<h1
					className={`${rochester.className} text-5xl sm:text-6xl text-nowrap mx-auto my-2 sm:my-4 rounded-b-sm border-b-2 border-white`}>
					Recipe Of The Day
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
				<div className='mx-2 sm:mx-8 lg:mr-16 flex gap-2 min-h-24 flex-wrap'>
					<div className='flex-1 flex gap-2 bg-purple-300/10 shadow-xs px-2 py-4 rounded-2xl'>
						<Timer className='w-6 h-auto' />
						<div className='flex-1 flex flex-col'>
							<h3>time:</h3>
							<p className='text-xs sm:text-sm text-foreground opacity-70 text-wrap'>
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
					</div>
					<div className='flex-1 flex gap-2 bg-purple-300/10 shadow-xs px-2 py-4 rounded-2xl'>
						<Users className='w-6 h-auto' />
						<div className='flex-shrink flex flex-col'>
							<h3 className='text-sm sm:text-[16px]'>
								servings:
							</h3>
							<p className='text-xs sm:text-sm text-foreground opacity-70'>
								{recipe.servings}{" "}
								{recipe.servings === 1 ? "person" : "people"}
							</p>
						</div>
					</div>
					<div className='flex-2 flex gap-2 bg-purple-300/10 shadow-xs px-2 py-4 rounded-2xl'>
						<Factory className='w-6 h-auto' />
						<div className='flex-1 flex flex-col'>
							<h3>calories per serving:</h3>
							<p className='text-xs sm:text-sm text-foreground opacity-70'>
								{recipe.caloriesPerServing} calories
							</p>
						</div>
					</div>
				</div>
				{/* ingredients */}
				<div className='mx-2 sm:mx-8 lg:mr-16 my-4 flex flex-col justify-strat bg-purple-300/20 p-2  rounded-xl'>
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
				{/*instructions*/}
				<div className='flex-1 mx-2 sm:mx-8 lg:mr-16 flex flex-col justify-strat bg-purple-300/20 p-2  rounded-xl'>
					<div className='flex gap-2'>
						<ChefHat className='w-6 h-auto' />
						<h3 className='text-lg'>instructions:</h3>
					</div>
					<div className='flex-1 ml-4 py-2 pr-1'>
						{recipe.instructions.map((instruction, id) => (
							<p className='pb-1' key={id}>
								{instruction}
							</p>
						))}
					</div>
				</div>
				{/*reviews*/}
				<div className='h-4 mx-auto flex items-center mt-2 mb-2 lg:mb-10'>
					<p className='text-xs border-r-1 pr-2'>
						{recipe.reviewCount} reviews
					</p>
					<p className='text-xs px-2'>{recipe.rating}</p>
				</div>
			</div>
		</section>
	);
}

export default RandomMealHero;
