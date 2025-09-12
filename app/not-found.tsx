import Image from "next/image";
import Link from "next/link";

function fourOfour() {
	return (
		<main className='flex flex-col items-center mt-20'>
			<Image
				src='/404/404-white.png'
				alt='memem'
				width={200}
				height={200}
			/>
			<div className='flex flex-row items-center gap-2 flex-nowrap'>
				<p className='text-3xl px-2 border-r-2'>404</p>
				<p className='text-sm'>
					We are sorry, But this page doesn't exist.
				</p>
			</div>
			<Link href={"/"} className='underline text-slate-300'>
				you can go Home
			</Link>
		</main>
	);
}

export default fourOfour;
