import { Suspense } from "react";

import RandomMealHero from "./UI/components/random-meal";
import Services from "./UI/components/services";
import RecipesList from "./UI/components/recipes-list";

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
			<RandomMealHero />
			<Services />
			<Suspense
				fallback={
					<div className='flex flex-col w-2/3 border-t-2 border-b-2 border-white bg-black/80 backdrop-blur-[2px] items-center justify-center py-4 mt-24'>
						<h2 className='text-2xl font-bold text-center'>
							please wait ...
						</h2>
					</div>
				}>
				<RecipesList currentPage={page} query={query} />
			</Suspense>
		</main>
	);
}

export default Home;
