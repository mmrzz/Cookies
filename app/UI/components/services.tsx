import Link from "next/link";

function Services() {
	return (
		<div className='flex flex-col lg:flex-row my-8 w-full gap-2 justify-between max-w-[1440px]'>
			<div
				className={`flex-1 bg-linear-to-l from-red-500 from-0% to-red-400 to-30% rounded-2xl p-4 grid place-content-center`}>
				<Link href='/cuisines'>Explore differant cuisines</Link>
			</div>
			<div
				className={`flex-1 bg-linear-to-l from-green-500 from-0% to-green-400 to-30% rounded-2xl p-4 grid place-content-center`}>
				<Link href='/categories'>
					Explore our Categories and choose wisely
				</Link>
			</div>
			<div
				className={`flex-1 bg-linear-to-l from-blue-500 from-0% to-blue-400 to-30% rounded-2xl p-4 grid place-content-center`}>
				<Link href='/custimize'>Everything is up to your choice</Link>
			</div>
		</div>
	);
}

export default Services;
