import Ingredient from "./ingredient";
import { CookingPot } from "lucide-react";

function RecipeIngrediants({ ingredients }: { ingredients: string[] }) {
	return (
		<div className='flex flex-col justify-strat bg-white/10 p-2 rounded-2xl'>
			<div className='flex-1 flex gap-2'>
				<CookingPot className='w-6 h-auto' />
				<h3 className='text-lg'>ingredients:</h3>
			</div>
			<div className='ml-2 px-[5%] pb-1 flex gap-2 overflow-x-auto mask-r-from-95% mask-l-from-95% [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-foreground/50'>
				{ingredients.map((ingredient, id) => (
					<Ingredient ingredient={ingredient} key={id} />
				))}
			</div>
		</div>
	);
}

export default RecipeIngrediants;
