"use client";
import { Suspense, useState } from "react";
import { Search } from "lucide-react";
import SearchBar from "./search";

function SearchButton() {
	const [isSearching, setIsSearching] = useState<boolean>(false);
	return (
		<Suspense fallback={<Search className=' x-6 h-auto' />}>
			<button
				className='xl:hidden focus:border-none cursor-pointer'
				onClick={() => setIsSearching(!isSearching)}>
				<Search className=' x-6 h-auto' />
			</button>
			{/* search bar outside of navbar */}
			{isSearching && (
				<div className='flex w-[100vw] items-center flex-col fixed top-20 -right-16'>
					<SearchBar className='hidden px-2 py-1 lg:max-xl:flex rounded-3xl bg-slate-100/50 text-background backdrop-blur-xs border-foreground border-1' />
				</div>
			)}
		</Suspense>
	);
}

export default SearchButton;
