import { fetchAllCuisines, fetchAllMealTypes } from "../lib/data";
import Cuisines from "../UI/categories/cuisines";
import MealTypes from "../UI/categories/mealTypes";

export const revalidate = 86400;

async function Categories() {
	const mealTypes = await fetchAllMealTypes();
	const cuisines = await fetchAllCuisines();
	return (
		<main className='font-sans flex flex-col items-center mt-6 lg:mt-14 mb-4 mx-4 lg:mx-20 min-h-[calc(100vh-200px)] lg:min-h-[calc(100vh-232px)]'>
			<div className='w-full max-w-7xl p-8 flex flex-col bg-white/60 backdrop-blur-xs rounded-4xl border-1 border-white/80'>
				<section
					id='mealType'
					className='w-full mt-4 text-background mb-4'>
					<h2 className='pl-2 text-xl sm:text-2xl font-bold'>
						Select a Meal Type:
					</h2>
					<div className='flex flex-wrap w-full gap-4 mt-4'>
						{mealTypes.map((mealType) => (
							<MealTypes mealType={mealType} key={mealType} />
						))}
					</div>
				</section>
				<section id='cuisine' className='w-full mt-4 text-background'>
					<h2 className='pl-2 text-xl sm:text-2xl font-bold'>
						Select a Cuisine:
					</h2>
					<div className='flex flex-wrap w-full gap-4 mt-4'>
						{cuisines.map((cuisine) => (
							<Cuisines cuisine={cuisine} key={cuisine} />
						))}
					</div>
				</section>
			</div>
		</main>
	);
}

export default Categories;
