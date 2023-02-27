import React from 'react'
import ProjectItem from './ProjectItem'
import superMoon3 from '../assets/images/superMoon3.jpeg'
import superMoon2 from '../assets/images/superMoon2.jpeg'
import superMoon4 from '../assets/images/superMoon4.jpeg'
import superMoon5 from '../assets/images/superMoon5.jpeg'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
// import SocialLinks from './SocialLinks'

const Projects = () => {
	return (
		<div id='projects' className='max-w text-white  md:pl-20 p-4 py-16'>
			<section className='text-[30px] md:text-[40px] text-white font-bold text-center pb-10'>
				Projects
			</section>
			<p className='justify-center items-center text-center leading-loose text-lg md:text-2xl py-8 ml-10 mr-10 '>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Corporis est molestias deleniti reiciendis pariatur, officia ex
				vero odit ipsum fuga!
			</p>
			<div className='grid sm:grid-cols-2 gap-12 ml-10 mr-10 '>
				<ProjectItem
					img={superMoon3}
					title='Super Moon 1'
					tech='React Js App'
					projectUrl='https://unsplash.com/photos/7X54ZE6ahSQ'
					target='_blank'
				/>
				<ProjectItem
					img={superMoon2}
					title='Super Moon 2'
					tech='React Js App'
					projectUrl='https://unsplash.com/photos/XTKjhfE-Inc'
					target='_blank'
				/>
				<ProjectItem
					img={superMoon4}
					title='Super Moon 3'
					tech='React Js App'
					projectUrl='https://unsplash.com/photos/K8IIPF2KY4Q'
					target='_blank'
				/>
				<ProjectItem
					img={superMoon5}
					title='Blood Moon Eclipse'
					tech='React Js App'
					projectUrl='https://unsplash.com/photos/F-pSZO_jeE8'
					target='_blank'
				/>
			</div>
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

export default Projects
