import React from 'react'

const ProjectItem = ({ img, title, tech, projectUrl }) => {
	const handleClick = (event) => {
		event.preventDefault()
		window.open(projectUrl, '_blank')
	}

	return (
		<div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-700 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-orange-400'>
			<img
				src={img}
				alt='super moon'
				className='rounded-xl group-hover:opacity-10'
			/>
			<div className='hidden group-hover:block absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]'>
				<h3 className='text-2xl md:text-3xl font-bold text-black tracking-wider text-center'>
					{title}
				</h3>
				<p className='text-center pb-4 pt-2 text-black'>{tech}</p>
				<a href={projectUrl}>
					<p
						onClick={handleClick}
						className=' text-center text-lg text-orange-400 font-semibold p-4    bg-black rounded-lg  shadow-orange-400 shadow-md'>
						More Info
					</p>
				</a>
			</div>
		</div>
	)
}

export default ProjectItem

{
	/* <button className='text-center text-lg text-orange-400 font-semibold  p-4  bg-black rounded-lg  shadow-orange-400 shadow-md'>
						More Info
					</button> */
}
