import { fetchMealById } from "../lib/data";
import RecipeRender from "../UI/recipe";

async function Custimize() {
	const recipe = await fetchMealById("8");
	return (
		<main className='font-sans flex flex-col items-center min-h-400 p-8 pb-20 sm:p-20'>
			<RecipeRender recipe={recipe} />
		</main>
	);
}

export default Custimize;
