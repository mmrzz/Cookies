import RandomMealHero from "./UI/components/random-meal";
import Services from "./UI/components/services";

async function Home() {
	return (
		<main className='flex flex-col min-h-[500vh] m-6 lg:mt-14 lg:mx-20 items-center'>
			<RandomMealHero />
			<Services />
		</main>
	);
}

export default Home;
