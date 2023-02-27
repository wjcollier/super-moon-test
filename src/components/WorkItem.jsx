import React from 'react'

const WorkItem = ({ image, title, details }) => {
	return (
		<ol className='max-w-[400px] md:max-w-[600px] bg-gray-900 lg:max-w-[700px] ml-auto mr-auto flex justify-center rounded-lg  items-center border border-slate-700 mb-10 shadow-xl shadow-gray-700'>
			<li className='mb-10 px-20 '>
				<div />
				<p className=' flex flex-col justify-center items-center flex-wrap '>
					<span className='flex flex-col justify-center items-center p-5 mt-5 '>
						<img
							src={`${image}`}
							// width='35'
							// height='35'
							className='w-[45px] h-[45] md:w-[75px] md:h-[75px]'
						/>
					</span>
				</p>
				<p className=' flex flex-col justify-center items-center flex-wrap '>
					<button className='text-2xl md:text-4xl text-white font-semibold py-2 px-4 border border-white rounded shadow-gray-100/60 shadow-2xl'>
						{title}
					</button>
					<span className='flex flex-col justify-center items-center text-center leading-loose  text-lg md:text-2xl pt-5'>
						{details}
					</span>
				</p>
			</li>
		</ol>
	)
}

export default WorkItem

// flex flex-col text-center justify-center items-center text-3xl md:text-4xl lg:text-5xl border-solid border border-white rounded-lg
