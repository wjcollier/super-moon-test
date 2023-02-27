import { useForm } from 'react-hook-form'
import React from 'react'
import { FaInstagramSquare, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import ContactImg from '../assets/images/contact.jpg'

const Contact = () => {
	const { register, handleSubmit } = useForm()
	const onSubmit = (formData) => {
		window.location.href = `mailto:williamjcollier4@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
	}

	return (
		<div id='contact' className='max-w text-white  p-4 py-16'>
			<div className='max-w md:pl-20 text-white'>
				<section className='text-[30px] md:text-[40px] font-bold text-center pb-10'>
					Contact
				</section>
				<h2 className='py-4 text-[15px]  md:text-[20px]'>
					Get In Touch
				</h2>
				<div className='grid lg:grid-cols-5 gap-8'>
					{/* left */}
					<div className='col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-gray-400 rounded-xl p-4'>
						<div className='lg:p-4 h-full '>
							<div>
								<img
									className='rounded-xl hover:scale-105 ease-in duration-300'
									src={ContactImg}
									alt='contact image'
								/>
							</div>
							<div>
								<h2 className='py-2 text-[15px] md:text-[20px]'>
									Super Moon
								</h2>
								<p className='py-2 text-[12px] md:text-[15px]'>
									Web Optimization Specialists
								</p>
								<p className='py-4 text-lg md:text-xl'>
									I am available for freelance or full-time
									positions. Contact me and let&apos;s talk.
								</p>
							</div>
							<div>
								<p className='uppercase pt-8 text-[10px] md:text-[12px]'>
									Connect With Me
								</p>
								<div className='flex items-center justify-start md:justify-evenly  space-x-10  py-4'>
									<a
										href='https://www.instagram.com/violentlightlabs/'
										target='_blank'
										rel='noreferrer'>
										<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
											<FaInstagramSquare size={15} />
										</div>
									</a>
									<a
										href='https://twitter.com/WJ_Collier'
										target='_blank'
										rel='noreferrer'>
										<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
											<FaTwitter size={15} />
										</div>
									</a>
									<a
										href='https://www.linkedin.com/in/william-collier-405039b/'
										target='_blank'
										rel='noreferrer'>
										<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
											<FaLinkedinIn size={15} />
										</div>
									</a>

									<div>
										<span className='text-black text-[15px] bg-[#55e43f]  shadow-lg shadow-gray-400 rounded-full p-6 '>
											<a
												href='https://wa.me/6281802246688'
												target='_blank'>
												<button className=''>
													<h4>WhatsApp Me!</h4>
												</button>
											</a>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* right */}
					<div className='col-span-3 lg:col-span-3 w-full h-auto shadow-md shadow-gray-400 rounded-xl lg:p-4'>
						<div className='p-4'>
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className='grid md:grid-cols-2 gap-4 w-full py-2'>
									<div className='flex flex-col'>
										<label className='uppercase text-md py-2 '>
											Name
										</label>
										<input
											{...register('name')}
											placeholder='Name'
											className='border-2 rounded-lg p-3 flex border-gray-300 text-black'
											type='text'
											name='name'
										/>
									</div>
									<div className='flex flex-col'>
										<label className='uppercase text-md py-2'>
											Phone Number
										</label>
										<input
											className='border-2 rounded-lg p-3 flex border-gray-300 text-black'
											type='text'
											name='phone'
											placeholder='{Area Code} + Phone Number'
										/>
									</div>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-md py-2'>
										Email
									</label>
									<input
										{...register('email')}
										placeholder='Email'
										className='border-2 rounded-lg p-3 flex border-gray-300 text-black'
										type='email'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-md py-2'>
										Subject
									</label>
									<input
										{...register('subject')}
										placeholder='Subject'
										className='border-2 rounded-lg p-3 flex border-gray-300 text-black'
										type='text'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-md py-2'>
										Message
									</label>
									<textarea
										{...register('message')}
										placeholder='Message'
										className='border-2 rounded-lg p-3 border-gray-300 text-black'
										rows='10'
										name='message'></textarea>
								</div>
								<button className='w-full p-4 text-2xl text-gray-100 mt-4 rounded-xl shadow-md border-0 shadow-gray-400'>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className='flex animate-pulse justify-center py-12 '>
					<a href='#main'>
						<div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 scroll-smooth'>
							<HiOutlineChevronDoubleUp
								className='text-white'
								size={30}
							/>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Contact
