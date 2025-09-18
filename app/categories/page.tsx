import Cuisines from "../cuisines/page";
import { fetchAllCuisines } from "../lib/data";

async function Categories() {
	return (
		<main className='font-sans flex flex-col items-center min-h-400 p-8 pb-20 sm:p-20 bg-black'>
			{(await fetchAllCuisines()).map((Cuisine, id) => (
				<p key={id}>{Cuisine}</p>
			))}
		</main>
	);
}

export default Categories;
