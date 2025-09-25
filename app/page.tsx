import { Suspense } from "react";
import { fetchAllMealsParams } from "./lib/data";

import DailyMealHero from "./UI/components/recipeDaily";
import Services from "./UI/components/services";
import RecipesList from "./UI/components/recipesList";

async function Home({
	searchParams,
}: {
	searchParams: { page?: string; query?: string };
}) {
	const awaitedSearchParams = await searchParams; //vscode says you don't need to await it but next says you should
	const query = awaitedSearchParams?.query ?? "";
	const page = Number(awaitedSearchParams?.page ?? 1);

	return (
		<main className='flex flex-col mt-6 lg:mt-14 mx-4 lg:mx-20 items-center'>
			{page === 1 && (
				<>
					<DailyMealHero />
					<Services />
				</>
			)}

			<RecipesList currentPage={page} query={query} />
		</main>
	);
}

export default Home;
