import { fetchDailyMeal } from "@/app/lib/data";
import RecipeSoloRender from "../recipes/recipeSoloRender";
import { Suspense } from "react";
import { SoloRecipeSkeleton } from "../skeletons";

async function DailyMealHero() {
	const recipe = await fetchDailyMeal();

	return (
		<Suspense
			fallback={
				<SoloRecipeSkeleton bg='bg-linear-to-l from-purple-700 to-purple-500 from-10% to-66%' />
			}>
			<RecipeSoloRender
				title='Recipe Of The Day'
				recipe={recipe}
				color='home'
			/>
		</Suspense>
	);
}

export default DailyMealHero;
