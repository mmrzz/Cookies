import { fetchAllMeals } from "@/app/lib/data";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import RecipeRender from "../recipe";

async function RecipesList({ currentPage }: { currentPage: number }) {
	const recipes = await fetchAllMeals(currentPage);

	const totalPages = Math.ceil(recipes.total / recipes.limit);
	const hasNextPage = currentPage < totalPages;
	const hasPrevPage = currentPage > 1;

	return (
		<div className='w-full'>
			<div className='grid grid-cols-1 md:grid-cols-2 w-full mt-8'>
				{recipes.recipes.map((recipe) => (
					<RecipeRender key={recipe.id} recipe={recipe} />
				))}
			</div>

			{/* Pagination Controls */}
			<div className='sticky bottom-0 left-0 w-full h-24 group'>
				<div className='flex justify-evenly items-center gap-2 mt-8 mb-4 px-4 mx-auto sticky bottom-4 bg-slate-200/40 backdrop-blur-xs w-fit rounded-4xl text-background border-1 border-foreground/50 drop-shadow-2xl lg:opacity-0 lg:transition-opacity lg:duration-500 lg:group-hover:opacity-100 has-[p]:opacity-100'>
					<Link
						href={`/?page=${currentPage - 1}#recipe-list`}
						className={`flex items-center justify-center gap-2 p-2 hover:opacity-70 ${
							!hasPrevPage ? "opacity-50" : ""
						}`}>
						<ChevronLeft className='w-6 h-6' />
					</Link>

					{/* <div className='flex items-center gap-2'>
					{Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
						const pageNum =
							Math.max(
								1,
								Math.min(totalPages - 4, currentPage - 2)
							) + i;
						if (pageNum > totalPages) return null;

						return (
							<Link
								key={pageNum}
								href={`/?page=${pageNum}#recipe-list`}
								className={`px-3 py-2 rounded-lg transition-colors hover:opacity-70 ${
									pageNum === currentPage
										? "underline text-lg"
										: ""
								}`}>
								{pageNum}
							</Link>
						);
					})}
				</div> */}
					<p className='text-xl underline'>{currentPage}</p>

					<Link
						href={`/?page=${currentPage + 1}#recipe-list`}
						className={`flex items-center justify-center gap-2 p-2 hover:opacity-70 ${
							!hasNextPage ? "opacity-50" : ""
						}`}>
						<ChevronRight className='w-6 h-6' />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default RecipesList;
