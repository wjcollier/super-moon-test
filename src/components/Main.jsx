import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import SocialLinksBlack from './SocialLinksBlack'

const Main = () => {
	return (
		<div id='main' className='relative h-screen  '>
			<img
				className='w-full h-full object-cover object-center scale-x-[-1]'
				src='/orange1.jpeg'
				alt='hero image'
			/>

			<div className='absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center'>
				<h1 className='text-[35px] font-extrabold sm:text-[55px]'>
					SuPeR MooN
				</h1>

				<h2 className='text-2xl sm:text-3xl mb-8'>
					<TypeAnimation
						sequence={[
							'Web Development', // Types 'One'
							1000, // Waits 1s
							'Responsive Designs', // Deletes 'One' and types 'Two'
							2000, // Waits 2s
							'SEO Friendly 🫧', // Types 'Three' without deleting 'Two'
							2000,
							'Blazing Fast Speeds', // Deletes 'One' and types 'Two'
							2000, // Waits 2s
						]}
						wrapper='div'
						cursor={true}
						repeat={Infinity}
						style={{ fontSize: '1.5em', paddingLeft: '7px' }}
					/>
				</h2>
				<SocialLinksBlack />
			</div>
		</div>
	)
}

export default Main
