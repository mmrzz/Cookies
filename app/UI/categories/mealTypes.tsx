import pluralize from "pluralize";
import MealTypeIcon from "../mealtypeIcons";

function MealTypes({ mealType }: { mealType: string }) {
	return (
		<div className='flex items-end w-full sm:w-fit'>
			<MealTypeIcon
				mealType={mealType}
				inverted={false}
				className=' w-20 sm:w-24 h-auto z-2 opacity-80'
			/>
			<div className='-ml-16 pl-24 sm:pl-18 py-2 pr-2 bg-white/20 backdrop-blur-xs border-1 border-white rounded-2xl h-16 w-full flex items-center'>
				<h3 className='my-auto text-lg sm:text-xl'>
					{pluralize(mealType)}
				</h3>
			</div>
		</div>
	);
}

export default MealTypes;
