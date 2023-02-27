import React, { useState } from 'react'
import './cursorStyle.css'

const Link = ({ href, title, target, color, children, className }) => {
	const [cursorHover, setCursorHover] = useState(false)

	const handleCursorEnter = () => {
		setCursorHover(true)
	}

	const handleCursorLeave = () => {
		setCursorHover(false)
	}

	const linkStyle = {
		color: `${color} ${cursorHover ? 'cursorHover' : ''}`,
	}

	return (
		<a
			href={href}
			title={title}
			target={target}
			style={linkStyle}
			onMouseEnter={handleCursorEnter}
			onMouseLeave={handleCursorLeave}
			className={className} // Define className prop here
			data-cursor='hovered'>
			{children}
		</a>
	)
}

export default Link
