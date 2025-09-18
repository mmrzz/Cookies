import Image from "next/image";

import { fetchAllMeals } from "@/app/lib/data";
import Pagination from "../pagination";

import RecipeRender from "../recipe";

import { Rochester } from "next/font/google";
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
		<section
			id='recipeList'
			className='w-full flex flex-col items-center scroll-mt-24 relative -mx-4'>
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
					<div className='flex items-center mt-4 px-8 py-4 border-t-2 border-b-2 border-white bg-black/80 backdrop-blur-[2px]'>
						<Image
							src={"./horizantal-rule/left-horizantal-rule.svg"}
							alt='hoorizantal-rule'
							width={200}
							height={50}
							className='hidden sm:flex'
						/>
						<Image
							src={
								"./horizantal-rule/sm-left-horizantal-rule.svg"
							}
							alt='hoorizantal-rule'
							width={50}
							height={50}
							className='flex sm:hidden'
						/>
						{query ? (
							<h2 className='text-3xl px-4 text-nowrap'>
								Results for {query}
							</h2>
						) : (
							<h2
								className={`${rochester.className} text-3xl px-4 text-nowrap`}>
								Feeling Lucky
							</h2>
						)}
						<Image
							src={"./horizantal-rule/right-horizantal-rule.svg"}
							alt='hoorizantal-rule'
							width={200}
							height={50}
							className='hidden sm:flex'
						/>
						<Image
							src={
								"./horizantal-rule/sm-right-horizantal-rule.svg"
							}
							alt='hoorizantal-rule'
							width={50}
							height={50}
							className='flex sm:hidden'
						/>
					</div>
					{/* recipe list */}
					<div className='grid grid-cols-1 md:grid-cols-2 w-full mt-8'>
						{recipes.recipes.map((recipe, i) => (
							<RecipeRender
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
	);
}

export default RecipesList;
