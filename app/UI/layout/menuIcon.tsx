"use client";
import { useState, useRef, useEffect, Suspense } from "react";
import NavigationMenu from "../layout/navigationMenu";
import SearchBar from "./search";

function MenuIcon() {
	//handle opening and closing menu and search
	const [menuState, setMenuState] = useState<boolean>(false);

	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const menuButtonRef = useRef<HTMLButtonElement | null>(null);

	// if click is outside dropdown and hamburger button → close menu
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				menuButtonRef.current &&
				!dropdownRef.current.contains(event.target as Node) &&
				!menuButtonRef.current.contains(event.target as Node)
			) {
				setMenuState(() => false);
			}
		}

		if (menuState) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuState]);

	//toggle menu animation
	const toggleMenuButton = menuState
		? "[&>div::before]:translate-y-0 [&>div::before]:-translate-x-[8.5px] [&>div::before]:w-6 [&>div::before]:-rotate-45 [&>div::after]:w-6 [&>div::after]:translate-y-0 [&>div::after]:-translate-x-[8.5px] [&>div::after]:rotate-45 [&>div]:bg-transparent"
		: " ";
	return (
		<Suspense
			fallback={
				<div className="h-[3px] w-8 px-4 rounded bg-background transition-all duration-500 before:absolute before:h-[3px] before:w-5 before:-translate-x-1 before:-translate-y-2 before:rounded before:bg-background before:transition-all before:duration-500 before:content-[''] after:absolute after:h-[3px] after:w-5 after:-translate-x-4 after:translate-y-2 after:rounded after:bg-background after:transition-all after:duration-500 after:content-['']"></div>
			}>
			<button
				onClick={() => setMenuState(!menuState)}
				className={toggleMenuButton}
				ref={menuButtonRef}>
				<div className="h-[3px] w-8 px-4 rounded bg-background transition-all duration-500 before:absolute before:h-[3px] before:w-5 before:-translate-x-1 before:-translate-y-2 before:rounded before:bg-background before:transition-all before:duration-500 before:content-[''] after:absolute after:h-[3px] after:w-5 after:-translate-x-4 after:translate-y-2 after:rounded after:bg-background after:transition-all after:duration-500 after:content-['']"></div>
			</button>
			<div
				ref={dropdownRef}
				className={`fixed w-full text-background right-0 top-16 bg-slate-50/30 backdrop-blur-sm p-4 rounded-b-sm lg:hidden transition-all duration-300 ease-out ${
					menuState ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
				}`}>
				<SearchBar className='h-8 w-1/2 mb-2 border-b-2 flex items-center flex-row-reverse' />
				<NavigationMenu
					isDevided={false}
					direction='column'
					size='normal'
					ariaLabel='mobile-navigation'
				/>
			</div>
		</Suspense>
	);
}

export default MenuIcon;
