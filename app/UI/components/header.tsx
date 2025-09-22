import Link from "next/link";
import { CookieIcon } from "lucide-react";
import { Kurale } from "next/font/google";
import MenuIcon from "../layout/menuIcon";
import NavigationMenu from "../layout/navigationMenu";
import SearchBar from "../layout/search";
import SearchButton from "../layout/searchButton";
import { Suspense } from "react";
import { NavbarSkeleton } from "../skeletons";

const kurale = Kurale({
	subsets: ["latin"],
	weight: "400",
});

function Navbar() {
	return (
		<Suspense fallback={<NavbarSkeleton />}>
			<header className='sticky top-0 lg:top-8 lg:mx-16 z-10'>
				<div className='h-16 text-background flex flex-row bg-slate-200/40 backdrop-blur-xs lg:bg-transparent lg:backdrop-blur-none border-b-1 border-white/50 lg:border-0 justify-between lg:gap-2'>
					<div className='px-2 py-0 lg:bg-slate-200/40 lg:backdrop-blur-xs grid place-content-center lg:rounded-3xl'>
						<Link
							href={"/"}
							className='flex flex-row gap-2 flex-nowrap items-center justify-center'>
							<CookieIcon className='w-8 h-8' />
							<p className={`text-3xl ${kurale.className}`}>
								Cookies
							</p>
						</Link>
					</div>
					<div className='lg:hidden flex px-2 items-center justify-end flex-grow-1 lg:bg-slate-200/40 lg:backdrop-blur-xs lg:rounded-3xl'>
						<MenuIcon />
					</div>
					<div className='hidden lg:flex px-5 items-center justify-between flex-grow-1 bg-slate-200/40 backdrop-blur-xs lg:rounded-3xl'>
						<NavigationMenu
							isDevided={true}
							direction='row'
							size='normal'
							ariaLabel='header-desktop-navigation'
						/>
						<div className='hidden lg:flex flex-row gap-3 items-center'>
							<SearchBar className='hidden h-10 px-3 xl:flex flex-row items-center gap-0 rounded-xl border-r-2 border-b-3 border-l-2 border-t-1' />
							<SearchButton />
							<button className='bg-background text-foreground p-2 rounded-xl'>
								<Link href={"/login"}>Login</Link>
							</button>
						</div>
					</div>
				</div>
			</header>
		</Suspense>
	);
}

export default Navbar;
