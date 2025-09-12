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
		<main className='flex flex-col items-center mt-20'>
			<Image
				src='/error/error-white.png'
				alt='memem'
				width={200}
				height={200}
			/>
			<div className='flex flex-col items-center gap-2 flex-nowrap mb-4'>
				<h2>They are out to get us, We will fix it.</h2>
				<button
					className='p-2 bg-foreground rounded-lg text-background cursor-pointer'
					onClick={() => reset()}>
					Try again
				</button>
			</div>
			<Link href={"/"} className='underline text-slate-300'>
				you can go Home
			</Link>
		</main>
	);
}
