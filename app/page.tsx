import Image from "next/image";

import RandomMealHero from "./UI/components/random-meal";
import Services from "./UI/components/services";
import RecipesList from "./UI/components/recipes-list";

import { Rochester } from "next/font/google";
const rochester = Rochester({
	subsets: ["latin"],
	weight: "400",
});

async function Home({ searchParams }: { searchParams: { page?: string } }) {
	const awaitedSearchParams = await searchParams;
	const page = Number(awaitedSearchParams?.page ?? 1); //vscode says you don't need to await it but next says you should

	return (
		<main className='flex flex-col min-h-[900vh] mt-6 lg:mt-14 lg:mx-20 items-center'>
			<RandomMealHero />
			<Services />
			<section
				id='recipe-list'
				className='w-full flex flex-col items-center scroll-mt-24 relative'>
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
						src={"./horizantal-rule/sm-left-horizantal-rule.svg"}
						alt='hoorizantal-rule'
						width={50}
						height={50}
						className='flex sm:hidden'
					/>
					<h2
						className={`${rochester.className} text-3xl px-4 text-nowrap`}>
						Feeling Lucky
					</h2>
					<Image
						src={"./horizantal-rule/right-horizantal-rule.svg"}
						alt='hoorizantal-rule'
						width={200}
						height={50}
						className='hidden sm:flex'
					/>
					<Image
						src={"./horizantal-rule/sm-right-horizantal-rule.svg"}
						alt='hoorizantal-rule'
						width={50}
						height={50}
						className='flex sm:hidden'
					/>
				</div>
				<RecipesList currentPage={page} />
			</section>
		</main>
	);
}

export default Home;
