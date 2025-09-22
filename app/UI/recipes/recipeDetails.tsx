import { type Recipe } from "@/app/lib/types";
import { Timer, Users, Factory } from "lucide-react";

function RecipeDetails({
	recipe,
	view,
}: {
	recipe: Recipe;
	view: "list" | "solo";
}) {
	let mainDir;
	let individualDir;
	if (view === "list") {
		mainDir = "flex-col";
		individualDir = "flex-row items-center gap-4";
	} else if (view === "solo") {
		mainDir = "flex-row flex wrap";
		individualDir = "flex-col";
	}
	return (
		<div className={`flex ${mainDir} gap-2 min-h-24`}>
			<div className='flex-1 flex gap-2 bg-white/10 shadow-xs px-2 py-4 rounded-2xl'>
				<Timer className='w-6 h-auto' />
				<div className={`flex-1 flex ${individualDir}`}>
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
			<div className='flex-1 flex gap-2 bg-white/10 shadow-xs px-2 py-4 rounded-2xl'>
				<Users className='w-6 h-auto' />
				<div className={`flex-shrink flex ${individualDir}`}>
					<h3 className='text-sm sm:text-[16px]'>servings:</h3>
					<p className='text-xs sm:text-sm text-foreground opacity-70'>
						{recipe.servings}{" "}
						{recipe.servings === 1 ? "person" : "people"}
					</p>
				</div>
			</div>
			<div className='flex-2 flex gap-2 bg-white/10 shadow-xs px-2 py-4 rounded-2xl'>
				<Factory className='w-6 h-auto' />
				<div className={`flex-1 flex ${individualDir}`}>
					<h3>calories per serving:</h3>
					<p className='text-xs sm:text-sm text-foreground opacity-70'>
						{recipe.caloriesPerServing} calories
					</p>
				</div>
			</div>
		</div>
	);
}

export default RecipeDetails;
