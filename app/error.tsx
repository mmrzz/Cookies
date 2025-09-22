"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<main className='flex flex-col items-center pt-20 min-h-[calc(100vh-160px)]'>
			{/*footer is 96px and header is 64px*/}
			<Image
				src='/error/error-white.png'
				alt='error picture'
				width={200}
				height={200}
				className='bg-black rounded-4xl p-3'
			/>
			<div className='flex flex-col items-center gap-2 px-3 flex-nowrap mb-4 bg-black'>
				<h2>They are out to get us, We will fix it.</h2>
				<button
					className='p-2 bg-foreground rounded-lg text-background cursor-pointer'
					onClick={() => reset()}>
					Try again
				</button>
			</div>
			<Link href={"/"} className='underline text-slate-300 bg-black'>
				go back Home
			</Link>
		</main>
	);
}
