import { fetchAllMealsParams, fetchMealById } from "@/app/lib/data";
import RecipeSoloRender from "../../UI/recipes/recipeSoloRender";
import ScrollToTop from "@/app/UI/scrollToUp";
import { Suspense } from "react";
import { SoloRecipeSkeleton } from "@/app/UI/skeletons";

export async function generateStaticParams() {
	const recipeIds = await fetchAllMealsParams();

	return recipeIds;
}

export const revalidate = 864000;

export async function generateMetadata({
	params,
}: {
	params: Promise<{ recipeId: string }>;
}): Promise<{
	title: string;
}> {
	const { recipeId } = await params;

	const recipe = await fetchMealById(recipeId);

	if (!recipe) {
		return {
			title: "recipe Not Found",
		};
	}

	return {
		title: recipe.name,
	};
}

async function RecipePage({
	params,
}: {
	params: Promise<{ recipeId: string }>;
}) {
	const { recipeId } = await params;

	const recipe = await fetchMealById(recipeId);

	//I don't know why but this page is always is scrolled to the bottom so the scrollToTop component takes care of it

	return (
		<main className='flex flex-col mt-6 lg:mt-14 mx-4 lg:mx-20 mb-4 items-center justify-center min-h-[calc(100vh-160px)]'>
			<ScrollToTop />
			<Suspense fallback={<SoloRecipeSkeleton bg='bg-gray-400' />}>
				<RecipeSoloRender
					title='Enjoy Cooking!'
					recipe={recipe}
					color='random'
				/>
			</Suspense>
		</main>
	);
}

export default RecipePage;
