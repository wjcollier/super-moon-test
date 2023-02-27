import React from 'react'
import { FaInstagramSquare, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import Link from './Link'
import './cursorStyle.css'

const SocialLinksBlack = ({ className }) => {
	const containerStyle = `max-w-full mt-auto flex justify-evenly items-center mb-5 p-2 gap-10 w-full z-10 cursor-none ${className}`

	return (
		<div className={containerStyle}>
			<Link
				href='https://www.instagram.com/violentlightlabs/'
				title='Instagram'
				target='_blank'
				color='text-black'
				className='hover:scale-150 ease-in duration-200'>
				<FaInstagramSquare size={20} />
			</Link>
			<Link
				href='https://twitter.com/WJ_Collier'
				title='Twitter'
				target='_blank'
				color='text-black'
				className='hover:scale-150 ease-in duration-200'>
				<FaTwitter size={20} />
			</Link>
			<Link
				href='https://www.linkedin.com/in/william-collier-405039b/'
				title='LinkedIn'
				target='_blank'
				color='text-black'
				className='hover:scale-150 ease-in duration-200'>
				<FaLinkedinIn size={20} />
			</Link>
		</div>
	)
}

export default SocialLinksBlack
