import { fetchDailyMeal } from "@/app/lib/data";
import RecipeSoloRender from "../recipes/recipeSoloRender";

async function DailyMealHero() {
	const recipe = await fetchDailyMeal();

	return (
		<RecipeSoloRender
			title='Recipe Of The Day'
			recipe={recipe}
			color='home'
		/>
	);
}

export default DailyMealHero;
