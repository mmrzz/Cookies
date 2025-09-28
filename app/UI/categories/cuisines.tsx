import CuisineIcons from "../cuisineIcons";

function Cuisines({ cuisine }: { cuisine: string }) {
	return (
		<div className='m-2 p-2 bg-white/20 backdrop-blur-xs border-1 border-white rounded-2xl h-16 w-full sm:w-fit flex items-center overflow-clip'>
			<CuisineIcons
				cuisine={cuisine}
				className=' h-14 w-auto p-1 z-2 opacity-80 rounded-lg bg-white/30'
			/>
			<h3 className='my-auto text-lg sm:text-xl ml-8 sm:mx-4'>
				{cuisine}
			</h3>
		</div>
	);
}

export default Cuisines;
