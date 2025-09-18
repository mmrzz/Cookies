import Image from "next/image";
import Link from "next/link";

function FourOfour() {
	return (
		<main className='flex flex-col w-fit mx-auto p-5 items-center mt-20'>
			<Image
				src='/404/404-white.png'
				alt='404 picture'
				width={200}
				height={200}
				className='bg-black rounded-3xl p-3'
			/>
			<div className='flex flex-row items-center gap-2 flex-nowrap bg-background'>
				<p className='text-3xl px-2 border-r-2'>404</p>
				<p className='text-sm'>
					We are sorry, But this page does not exist.
				</p>
			</div>
			<Link href={"/"} className='underline text-slate-300 bg-black'>
				go Home
			</Link>
		</main>
	);
}

export default FourOfour;
