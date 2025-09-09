import Image from "next/image";

export default function Home() {
	return (
		<main className='font-sans flex flex-col items-center min-h-400 p-8 pb-20 sm:p-20'>
			<Image
				src='/experimental.jpg'
				alt='memem'
				width={3510}
				height={5252}
				className='w-full'
			/>
		</main>
	);
}
