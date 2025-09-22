import Link from "next/link";
import NavigationMenu from "../layout/navigationMenu";

function Footer() {
	return (
		<footer className='w-full h-24 bg-slate-200/40 backdrop-blur-xs flex flex-col items-center justify-center'>
			<div className='w-full px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-background'>
				{/* Left side - brand */}
				<p className='text-center sm:text-left'>
					My Recipe Project — Built with Next.js
				</p>

				{/* Right side - links */}
				<NavigationMenu
					isDevided={true}
					direction='row'
					size='small'
					ariaLabel='footer-navigation'
				/>
			</div>
			<p className='text-sm text-center text-background mt-2 px-8 pt-1 border-t-1 border-background'>
				{" "}
				&copy; {new Date().getFullYear()}{" "}
			</p>
		</footer>
	);
}

export default Footer;
