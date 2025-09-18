import Link from "next/link";

function Footer() {
	return (
		<footer className='w-full mt-8 bg-slate-200/40 backdrop-blur-xs flex flex-col items-center'>
			<div className='w-full px-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background rounded-t-[-12px]'>
				{/* Left side - brand */}
				<p className='text-center sm:text-left'>
					My Recipe Project — Built with Next.js
				</p>

				{/* Right side - links */}
				<nav aria-label='footer-nav'>
					<ul className='flex gap-6 items-center'>
						<li className='focus:text-slate-800'>
							<Link
								href={"/"}
								className="hover:underline hover:text-purple-500 after:w-0.5 after:content-[''] after:h-4 md:after:h-6 after:bg-background after:absolute after:translate-x-4 
								 after:opacity-30">
								Home
							</Link>
						</li>
						<li>
							<Link
								href={"/categories"}
								className="hover:underline hover:text-green-500 after:w-0.5 after:content-[''] after:h-4 md:after:h-6 after:bg-background after:absolute after:translate-x-4 
								 after:opacity-30">
								Categories
							</Link>
						</li>
						<li>
							<Link
								href={"/cuisines"}
								className="hover:underline hover:text-red-500 after:w-0.5 after:content-[''] after:h-4 md:after:h-6 after:bg-background after:absolute after:translate-x-4 after:opacity-30">
								Cuisines
							</Link>
						</li>
						<li>
							<Link
								href={"/custimize"}
								className='hover:underline hover:text-blue-500'>
								Custimize
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<p className='text-sm text-center text-background mb-1 mt-2 px-8 border-t-1 border-background'>
				{" "}
				&copy; {new Date().getFullYear()}{" "}
			</p>
		</footer>
	);
}

export default Footer;
