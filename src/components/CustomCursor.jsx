import { useEffect, useState } from 'react'
import './cursorStyle.css'

function CustomCursor() {
	const [isBlackCursor, setIsBlackCursor] = useState(false)
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const cursors = document.querySelectorAll('[data-cursor]')
		const hoveredElements = [
			...document.querySelectorAll('button'),
			...document.querySelectorAll('a'),
			...document.querySelectorAll('[data-cursor]'),
			
		]

		const handleMouseMove = (event) => {
			const posX = event.clientX
			const posY = event.clientY
			const isMain = event.target.closest('#main') !== null
			setIsBlackCursor(isMain)
			setMousePosition({ x: event.clientX, y: event.clientY })

			/** cursor dot position */
			cursors[0].style.left = `${posX}px`
			cursors[0].style.top = `${posY}px`

			/** cursor outline position */
			setTimeout(function () {
				cursors[1].style.left = `${posX}px`
				cursors[1].style.top = `${posY}px`
			}, 80)
		}

		const addHoveredClass = () => {
			for (let i = 0, len = cursors.length; i < len; i++) {
				cursors[i].classList.add('hovered')
			}
			 const hoveredLinks = document.querySelectorAll('a')
				hoveredLinks.forEach((link) => link.classList.add('hovered'))
		}

		const removeHoveredClass = () => {
			for (let i = 0, len = cursors.length; i < len; i++) {
				cursors[i].classList.remove('hovered')
			}
		}

		hoveredElements.forEach((element) => {
			element.addEventListener('mouseover', addHoveredClass)
			element.addEventListener('mouseout', removeHoveredClass)
		})

		document.body.addEventListener('mousemove', handleMouseMove)

		return () => {
			hoveredElements.forEach((element) => {
				element.removeEventListener('mouseover', addHoveredClass)
				element.removeEventListener('mouseout', removeHoveredClass)
			})

			document.body.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	return (
		<>
			<div
				className={
					isBlackCursor
						? 'custom-cursor black-cursor'
						: 'custom-cursor'
				}
				style={{
					left: `${mousePosition.x}px`,
					top: `${mousePosition.y}px`,
				}}>
				<div className='cursor-dot' data-cursor />
				<div className='cursor-outline' data-cursor />
			</div>
		</>
	)
}

export default CustomCursor
