import React from 'react'
import WorkItem from './WorkItem'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
// import SocialLinks from './SocialLinks'

const data = [
	{
		image: './service-icon-test.png',
		title: 'Web Development',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id magna at felis faucibus placerat.',
	},
	{
		image: './service-icon-ui.png',
		title: 'Design',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id magna at felis faucibus placerat.',
	},
	{
		image: './service-icon-graphic.png',
		title: 'SEO Checklist',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id magna at felis faucibus placerat.',
	},
	{
		image: './service-icon-1.svg',
		title: 'Speed Optimization',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id magna at felis faucibus placerat.',
	},
	{
		image: './service-icon-2.svg',
		title: 'Hosting Assistance',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id magna at felis faucibus placerat.',
	},
	{
		image: './service-icon-4.svg',
		title: 'Maintenance Package',
		details:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id magna at felis faucibus placerat.',
	},
]
const Work = () => {
	return (
		<div id='work' className='max-w m-auto p-4 py-16  text-white'>
			<section className='text-[30px] md:text-[40px] text-white font-bold text-center pb-10'>
				Work
			</section>
			{data.map((item, idx) => (
				<WorkItem
					key={idx}
					image={item.image}
					title={item.title}
					details={item.details}
				/>
			))}
			<div className='flex animate-pulse  justify-center py-12'>
				<a href='#main'>
					<div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
						<HiOutlineChevronDoubleUp
							className='text-white'
							size={30}
						/>
					</div>
				</a>
			</div>
		</div>
	)
}

export default Work
