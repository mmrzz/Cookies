import HorizantalRule from "./horizantalRule";

const shimmer =
	"before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function NavbarSkeleton() {
	return (
		<div
			className={`${shimmer} sticky top-0 lg:top-8 lg:mx-16 z-10 h-16 text-background flex flex-row bg-slate-200/40 backdrop-blur-xs lg:bg-transparent lg:backdrop-blur-none border-b-1 border-white/50 lg:border-0 justify-between lg:gap-2`}>
			<div className='hidden lg:flex w-[150px] bg-slate-200/40 backdrop-blur-xs rounded-3xl'></div>
			<div className='hidden lg:flex flex-1 bg-slate-200/40 backdrop-blur-xs rounded-3xl'></div>
			;
		</div>
	);
}

export function SoloRecipeSkeleton({ bg }: { bg: string }) {
	return (
		<section
			className={` animate-pulse w-full h-[calc(100vh-160px)] flex flex-col overflow-clip items-center sm:flex-row sm:items-stretch max-w-6xl text-foreground ${bg} rounded-4xl`}>
			<div className='flex justify-center flex-shrink-1 bg-gray-500 items-center w-full h-1/4 sm:h-full sm:w-2/5 overflow-clip'></div>

			<div className='w-full sm:h-full flex-grow-1 flex-shrink-1 flex flex-col gap-2 p-4 lg:p-8 min-w-0'></div>
		</section>
	);
}

export function ListRecipeSkeleton({ bg }: { bg: string }) {
	return (
		<div className='flex flex-col justify-center w-full items-center'>
			<div className='relative w-full h-[80vw] md:h-[40vw] lg:h-[35vw] -mt-[11vw] md:-mt-[6vw] lg:-mt-[5vw] '>
				<div className='animate-pulse mask-[url("/mask-recipe-image.svg")] mask-no-repeat mask-center flex-1 mask-contain w-full h-full drop-shadow-xl bg-gray-500 z-2'></div>
			</div>
			<div
				className={`flex flex-col gap-2 -mt-[24vw] md:-mt-[14vw] lg:-mt-[10vw] pt-[24vw] md:pt-[14vw] lg:pt-[10vw] mb-6 px-8 pb-4 ${bg} h-96 w-[80vw] md:w-[40vw] lg:w-[35vw] rounded-b-4xl`}></div>
		</div>
	);
}

export function RecipesListSkeleton() {
	return (
		<>
			<HorizantalRule>
				<p>Loading ...</p>
			</HorizantalRule>
			<div className='grid grid-cols-1 md:grid-cols-2 w-full mt-8'>
				<ListRecipeSkeleton bg='bg-linear-to-b from-purple-700 from-0% to-purple-500 to-70%' />
				<ListRecipeSkeleton bg='bg-linear-to-b from-green-700 from-0% to-green-500 to-70%' />
				<ListRecipeSkeleton bg='bg-linear-to-b from-red-700 from-0% to-red-500 to-70%' />
				<ListRecipeSkeleton bg='bg-linear-to-b from-blue-700 from-0% to-blue-500 to-70%' />
			</div>
		</>
	);
}
