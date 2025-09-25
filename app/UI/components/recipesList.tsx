import { Suspense } from "react";

import { fetchAllMeals } from "@/app/lib/data";
import Pagination from "../pagination";

import RecipeListRender from "../recipes/recipeListRender";

import { Rochester } from "next/font/google";
import HorizantalRule from "../horizantalRule";
import { RecipesListSkeleton } from "../skeletons";
const rochester = Rochester({
	subsets: ["latin"],
	weight: "400",
});

async function RecipesList({
	currentPage,
	query,
}: {
	currentPage: number;
	query: string;
}) {
	const recipes = await fetchAllMeals(currentPage, query);

	const totalPages = Math.ceil(recipes.total / 10);
	const isEmpty = !recipes.recipes.length;

	const bgColors = [
		"bg-linear-to-b from-purple-700 from-0% to-purple-500 to-70%",

		"bg-linear-to-b from-green-700 from-0% to-green-500 to-70%",

		"bg-linear-to-b from-red-700 from-0% to-red-500 to-70%",

		"bg-linear-to-b from-blue-700 from-0% to-blue-500 to-70%",
	];

	return (
		<Suspense fallback={<RecipesListSkeleton />}>
			<section
				id='recipeList'
				className='w-full flex flex-col items-center scroll-mt-48 lg:scroll-mt-24 relative -mx-4'>
				{isEmpty ? (
					<div className='flex mb-96 my-auto flex-col w-2/3 border-t-2 border-b-2 border-white bg-black/80 backdrop-blur-[2px] items-center justify-center py-4 mt-24'>
						<h2 className='text-2xl font-bold text-center'>
							No recipes found for {query}
						</h2>
						<p className='text-center text-gray-600 mt-2'>
							Try adjusting your search query
						</p>
					</div>
				) : (
					<>
						{/*a horizantal rule*/}
						<HorizantalRule>
							{query ? (
								<h2 className='text-3xl px-4 text-center text-wrap'>
									Results for{" "}
									<span className='text-nowrap opacity-60'>
										{query}
									</span>
								</h2>
							) : (
								<h2
									className={`${rochester.className} text-3xl px-4 text-nowrap`}>
									Feeling Lucky
								</h2>
							)}
						</HorizantalRule>
						{/* recipe list */}
						<div className='grid grid-cols-1 md:grid-cols-2 w-full mt-8'>
							{recipes.recipes.map((recipe, i) => (
								<RecipeListRender
									key={recipe.id}
									recipe={recipe}
									color={bgColors[i % 4]}
								/>
							))}
						</div>

						{/* Pagination Controls */}
						{totalPages > 1 && (
							<Pagination
								currentPage={currentPage}
								totalPages={totalPages}
								query={query}
							/>
						)}
					</>
				)}
			</section>
		</Suspense>
	);
}

export default RecipesList;
