import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({
	currentPage,
	totalPages,
	query,
}: {
	currentPage: number;
	totalPages: number;
	query: string;
}) {
	const hasNextPage = currentPage < totalPages;
	const hasPrevPage = currentPage > 1;

	const createPageURL = (pageNumber: number | string) => {
		return `/?page=${pageNumber}&query=${query}#recipe-list`;
	};

	return (
		<div className='flex justify-evenly items-center gap-2 mt-8 mb-4 px-4 mx-auto sticky bottom-2 lg:bottom-4 bg-slate-200/40 backdrop-blur-xs w-fit rounded-4xl text-background border-1 border-foreground/50 drop-shadow-2x'>
			{hasPrevPage ? (
				<Link
					href={createPageURL(currentPage - 1)}
					className='flex items-center justify-center gap-2 p-2 hover:opacity-70'>
					<ChevronLeft className='w-6 h-6' />
				</Link>
			) : (
				<span className='flex items-center justify-center gap-2 p-2 opacity-25'>
					<ChevronLeft className='w-6 h-6' />
				</span>
			)}
			{/* 
                this part was for showing page numbers in pagination which I decided to delete so it stays minimal as possible. */}

			{/* <div className='flex items-center gap-2'>
					{Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
						const pageNum =
							Math.max(
								1,
								Math.min(totalPages - 4, currentPage - 2)
							) + i;
						if (pageNum > totalPages) return null;

						return (
							<Link
								key={pageNum}
								href={`/?page=${pageNum}#recipe-list`}
								className={`px-3 py-2 rounded-lg transition-colors hover:opacity-70 ${
									pageNum === currentPage
										? "underline text-lg"
										: ""
								}`}>
								{pageNum}
							</Link>
						);
					})}
				</div> */}

			<p className='text-xl underline'>{currentPage}</p>

			{hasNextPage ? (
				<Link
					href={createPageURL(currentPage + 1)}
					className='flex items-center justify-center gap-2 p-2 hover:opacity-70'>
					<ChevronRight className='w-6 h-6' />
				</Link>
			) : (
				<span className='flex items-center justify-center gap-2 p-2 opacity-25'>
					<ChevronRight className='w-6 h-6' />
				</span>
			)}
		</div>
	);
}

export default Pagination;
