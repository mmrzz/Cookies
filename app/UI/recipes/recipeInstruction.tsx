import { ChefHat } from "lucide-react";

function RecipeInstructions({ instructions }: { instructions: string[] }) {
	return (
		<div className='flex-1 flex flex-col justify-strat bg-white/10 p-2  rounded-xl'>
			<div className='flex gap-2'>
				<ChefHat className='w-6 h-auto' />
				<h3 className='text-lg'>instructions:</h3>
			</div>
			<div className='flex-1 ml-4 py-2 pr-1'>
				{instructions.map((instruction, id) => (
					<p className='pb-1' key={id}>
						{instruction}
					</p>
				))}
			</div>
		</div>
	);
}

export default RecipeInstructions;
