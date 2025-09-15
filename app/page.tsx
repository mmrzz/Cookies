import RandomMealHero from "./UI/components/random-meal";
import { Suspense } from "react";

async function Home() {
	return (
		<main className='flex flex-col min-h-[500vh] m-6 lg:mt-14 lg:mx-20 items-center'>
			<Suspense fallback={<p>is Loading...</p>}>
				<RandomMealHero />
			</Suspense>
		</main>
	);
}

export default Home;
