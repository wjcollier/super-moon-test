import React, { useState } from 'react'
import { TfiFaceSmile } from 'react-icons/tfi'
import {
	GiAbstract019,
	// GiAbstract065,
	GiAbstract085,
	GiAbstract116,
	GiAlliedStar,
} from 'react-icons/gi'
import SocialLinksBlack from './SocialLinksBlack'

const links = [
	{ id: 'home', label: 'Home', icon: GiAlliedStar, href: '#main' },
	{ id: 'work', label: 'Work', icon: GiAbstract085, href: '#work' },
	{
		id: 'projects',
		label: 'Projects',
		icon: GiAbstract019,
		href: '#projects',
	},
	// { id: 'resume', label: 'Resume', icon: GiAbstract065, href: '#resume' },
	{ id: 'contact', label: 'Contact', icon: GiAbstract116, href: '#contact' },
]

const Sidenav = () => {
	const [nav, setNav] = useState(false)
	const handleNav = () => {
		setNav(!nav)
		// console.log('state changed');
	}

	return (
		<div>
			<TfiFaceSmile
				size={20}
				onClick={handleNav}
				className='absolute top-4 right-4 z-[99] md:hidden hover:animate-spin'
			/>

			{nav ? (
				<div className='fixed w-full h-screen bg-transparent/10 flex flex-col justify-center items-center text-center z-20'>
					{links.map(({ id, label, icon: Icon, href }) => (
						<a
							key={id}
							onClick={handleNav}
							href={href}
							className='w-[75%] flex justify-center items-center text-center rounded-full shadow-lg  bg-orange-400 shadow-gray-600 focus:shadow-gray-800 m-3 p-4 cursor-pointer hover:scale-110  ease-in duration-200'>
							<Icon size={20} />
							<span className='pl-4 text-xl'>{label}</span>
						</a>
					))}
				</div>
			) : null}

			<div className='md:block hidden fixed  top-[30%] z-10'>
				<div className='flex flex-col'>
					{links.map(({ id, icon: Icon, href }) => (
						<a
							key={id}
							href={href}
							className='rounded-full shadow-lg bg-orange-400 shadow-gray-600 focus:shadow-gray-800 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
							<Icon size={20} />
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

export default Sidenav
