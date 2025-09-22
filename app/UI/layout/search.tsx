"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect, Suspense } from "react";
import { Search } from "lucide-react";

function SearchBar({ className }: { className: string }) {
	const searchPrams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	const [query, setQuery] = useState<string>(searchPrams.get("query") ?? "");

	const handleSearch = useDebouncedCallback((term: string): void => {
		const prams = new URLSearchParams(searchPrams);
		prams.set("page", "1");
		if (term) {
			prams.set("query", term);
		} else {
			prams.delete("query");
		}
		if (pathname === "/") router.push(`/?${prams.toString()}#recipeList`);
	}, 300);

	const handleSubmit = (e: React.FormEvent): void => {
		const prams = new URLSearchParams(searchPrams);

		e.preventDefault();
		handleSearch(query);

		if (query)
			router.push(`/?${prams.toString()}#recipeList`, { scroll: false });
	};

	useEffect(() => {
		setQuery("");
	}, [pathname]);
	return (
		<Suspense fallback={<Search />}>
			<form onSubmit={handleSubmit} className={className}>
				<label htmlFor='search' className='sr-only'>
					Search:
				</label>
				<input
					autoFocus
					className='px-2 py-1 text-sm w-full placeholder:text-sm placeholder:text-black/75 focus:outline-none'
					placeholder='Search Recipes ...'
					onChange={(e) => {
						setQuery(e.target.value);
						handleSearch(e.target.value.trim());
					}}
					value={query}
				/>
				<button
					type='submit'
					className='focus:outline-none cursor-pointer'>
					<Search />
				</button>
			</form>
		</Suspense>
	);
}

export default SearchBar;
