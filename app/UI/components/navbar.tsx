"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { CookieIcon, Search } from "lucide-react";
import { Kurale, Manuale } from "next/font/google";

const kurale = Kurale({
	subsets: ["latin"],
	weight: "400",
});

function Navbar() {
	const [menuState, setMenuState] = useState<boolean>(false);
	const [isSearching, setIsSearching] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const menuButtonRef = useRef<HTMLButtonElement | null>(null);

	const pathname = usePathname();

	useEffect(() => {
		setMenuState(false);
		setIsSearching(false);
	}, [pathname]);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			// if click is outside dropdown and hamburger button → close menu
			if (
				dropdownRef.current &&
				menuButtonRef.current &&
				!dropdownRef.current.contains(event.target as Node) &&
				!menuButtonRef.current.contains(event.target as Node)
			) {
				setMenuState((c) => false);
				console.log("fired event", menuState);
			}
		}

		if (menuState) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuState]);

	const open = () => {
		if (!menuState) {
			setMenuState((c) => true);
			console.log("fired click", menuState);
		}
	};

	const toggleMenuButton = menuState
		? "[&>div::before]:translate-y-0 [&>div::before]:-translate-x-[8.5px] [&>div::before]:w-6 [&>div::before]:-rotate-45 [&>div::after]:w-6 [&>div::after]:translate-y-0 [&>div::after]:-translate-x-[8.5px] [&>div::after]:rotate-45 [&>div]:bg-transparent"
		: " ";

	return (
		<header className='sticky top-0 sm:top-8 sm:mx-10 lg:mx-20 mb-8'>
			<div className='h-16 text-background backdrop-blur-sm flex flex-row justify-between align-center sm:gap-2'>
				<div className='px-2 md:p-5 py-0 bg-slate-200/40 backdrop-blur-xs grid place-content-center sm:rounded-3xl'>
					<Link
						href={"/"}
						className='flex flex-row gap-2 flex-nowrap items-center justify-center'>
						<CookieIcon className='w-8 h-8' />
						<p className={`text-3xl ${kurale.className}`}>
							Cookies
						</p>
					</Link>
				</div>
				<div className='sm:hidden flex items-center px-2 justify-end flex-grow-1 bg-slate-200/40 backdrop-blur-xs sm:rounded-3xl'>
					<button
						onClick={() => setMenuState(!menuState)}
						className={toggleMenuButton}
						ref={menuButtonRef}>
						<div className="h-[3px] w-8 px-4 rounded bg-background transition-all duration-500 before:absolute before:h-[3px] before:w-5 before:-translate-x-1 before:-translate-y-2 before:rounded before:bg-background before:transition-all before:duration-500 before:content-[''] after:absolute after:h-[3px] after:w-5 after:-translate-x-4 after:translate-y-2 after:rounded after:bg-background after:transition-all after:duration-500 after:content-['']"></div>
					</button>
				</div>
				<div className='hidden sm:flex px-5 items-center justify-between flex-grow-1 bg-slate-200/40 backdrop-blur-xs sm:rounded-3xl'>
					<nav aria-label='main-nav-desktop'>
						<ul className='flex flex-row pl-5 gap-8 justify-center text-lg md:text-2xl'>
							<li className='focus:text-slate-800'>
								<Link
									href={"/"}
									className="hover:underline after:w-0.5 after:content-[''] after:h-4 md:after:h-6 after:bg-background after:absolute after:translate-x-4 
									after:translate-y-1.5 after:opacity-30">
									Home
								</Link>
							</li>
							<li>
								<Link
									href={"/categories"}
									className="hover:underline after:w-0.5 after:content-[''] after:h-4 md:after:h-6 after:bg-background after:absolute after:translate-x-4 
									after:translate-y-1.5 after:opacity-30">
									Categories
								</Link>
							</li>
							<li>
								<Link
									href={"/cuisines"}
									className="hover:underline after:w-0.5 after:content-[''] after:h-4 md:after:h-6 after:bg-background after:absolute after:translate-x-4 after:translate-y-1.5 after:opacity-30">
									Cuisines
								</Link>
							</li>
							<li>
								<Link
									href={"/custimize"}
									className='hover:underline'>
									Custimize
								</Link>
							</li>
						</ul>
					</nav>
					<div className='hidden login:flex flex-row gap-3 items-center'>
						<div className='h-10 px-3 flex flex-row items-center gap-0 rounded-xl search:border-r-2 search:border-b-3 search:border-l-2 search:border-t-1'>
							<label htmlFor='search' className='sr-only'>
								Search:
							</label>
							<input
								className='hidden h-full pb-1 text-lg placeholder:text-lg focus:outline-none search:block'
								placeholder='Search Recipes ...'
							/>
							<button
								onClick={() => setIsSearching(!isSearching)}
								className={`focus:outline-none ${
									isSearching ? "scale-125" : ""
								}`}>
								<Search />
							</button>
						</div>
						<button className='bg-background text-foreground p-2 rounded-xl'>
							<Link href={"/login"}>Login</Link>
						</button>
					</div>
				</div>
			</div>
			{/* drop down menu for mobile */}
			<div
				ref={dropdownRef}
				className={`fixed w-full text-background right-0 top-16 bg-slate-50/30 backdrop-blur-sm p-4 rounded-b-sm sm:hidden transition-all duration-300 ease-out ${
					menuState ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
				}`}>
				<div className='h-8 w-1/2 mb-2 border-b-2'>
					<label htmlFor='search' className='sr-only'>
						Search:
					</label>
					<input
						className='px-2 py-1 text-sm placeholder:text-sm focus:outline-none block'
						placeholder='Search Recipes ...'
					/>
				</div>
				<nav aria-label='main-nav-mobile'>
					<ul className='flex flex-col gap-2 justify-center'>
						<li className='focus:text-slate-800'>
							<Link href={"/"}>Home</Link>
						</li>
						<li>
							<Link href={"/categories"}>Categories</Link>
						</li>
						<li>
							<Link href={"/cuisines"}>Cuisines</Link>
						</li>
						<li>
							<Link href={"/custimize"}>Custimize</Link>
						</li>
					</ul>
				</nav>
			</div>
			{/* search bar outside of nav */}
			<div
				className={`h-10 w-sm px-3 m-auto mt-4 hidden sm:max-[1230px]:block rounded-3xl bg-slate-100/30 text-background backdrop-blur-xs border-foreground border-1 transition-all duration-500 ease-out ${
					isSearching ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
				}`}>
				<label htmlFor='search' className='sr-only'>
					Search:
				</label>
				<input
					autoFocus
					className='h-full py-1 text-lg placeholder:text-lg focus:outline-none block'
					placeholder='Search Recipes ...'
				/>
			</div>
		</header>
	);
}

export default Navbar;
