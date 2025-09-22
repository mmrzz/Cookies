import Image from "next/image";

function HorizantalRule({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex items-center mt-4 px-8 py-4 border-t-2 border-b-2 border-white bg-black/80 backdrop-blur-[2px]'>
			<Image
				src={"./horizantal-rule/left-horizantal-rule.svg"}
				alt='hoorizantal-rule'
				width={200}
				height={50}
				className='hidden sm:flex'
			/>
			<Image
				src={"./horizantal-rule/sm-left-horizantal-rule.svg"}
				alt='hoorizantal-rule'
				width={50}
				height={50}
				className='flex sm:hidden'
			/>
			{children}
			<Image
				src={"./horizantal-rule/right-horizantal-rule.svg"}
				alt='hoorizantal-rule'
				width={200}
				height={50}
				className='hidden sm:flex'
			/>
			<Image
				src={"./horizantal-rule/sm-right-horizantal-rule.svg"}
				alt='hoorizantal-rule'
				width={50}
				height={50}
				className='flex sm:hidden'
			/>
		</div>
	);
}

export default HorizantalRule;
