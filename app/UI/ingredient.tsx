import React from "react";

function Ingredient({ ingredient }: { ingredient: string }) {
	return (
		<div className='px-2 py-1 h-8  bg-purple-300/30 text-sm lg:text-[16px] rounded-xl shadow-sm grid place-content-center'>
			<p className='text-nowrap'>{ingredient}</p>
		</div>
	);
}

export default Ingredient;
