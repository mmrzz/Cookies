import Link from "next/link";

function Services() {
	return (
		<section
			id='services'
			className='flex flex-col lg:flex-row my-8 w-full gap-2 justify-between max-w-[1440px]'>
			<div
				className={`flex-1 text-center bg-linear-to-l from-red-500/80 from-0% to-red-400/80 backdrop-blur-[3px] to-60% rounded-2xl p-4 grid place-content-center`}>
				<Link href='/cuisines'>Explore differant cuisines</Link>
			</div>
			<div
				className={`flex-1 text-center bg-linear-to-l from-green-600/80 from-0% to-green-400/80 backdrop-blur-[3px] to-60% rounded-2xl p-4 grid place-content-center`}>
				<Link href='/categories'>
					Explore our Categories and choose wisely
				</Link>
			</div>
			<div
				className={`flex-1 text-center bg-linear-to-l from-blue-600/80 from-0% to-blue-400/80 backdrop-blur-[3px] to-60% rounded-2xl p-4 grid place-content-center`}>
				<Link href='/custimize'>Everything is up to your choice</Link>
			</div>
		</section>
	);
}

export default Services;
