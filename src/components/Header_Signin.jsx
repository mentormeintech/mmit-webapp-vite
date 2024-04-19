import React from 'react'
import { AiFillBell, AiOutlineClose } from 'react-icons/ai'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'

function Header_Signin(props) {
	const { getMyNotifications } = props
	return (
		<nav className='bg-stone-200 h-28 w-full flex items-center pr-4 fixed top-0 left-0 z-50'>
			<a href='/'>
				<img
					width={200}
					height={1000}
					alt="MMIT Logo"
					className="ml-[100px] mb-[38]"
					src="/images/mmit-logo.png"
				/>
			</a>

			<div className='flex text-[#303030] ml-auto mr-8 text-2xl'>
				<div className='bg-[#D9D9D9] flex items-center justify-center w-12 h-12 rounded-full mr-3 cursor-pointer' onClick={getMyNotifications}><AiFillBell /></div>
				<div className='bg-[#D9D9D9] flex items-center justify-center w-12 h-12 rounded-full'><BsFillChatLeftTextFill /></div>
			</div>

			<div className='text-2xl cursor-pointer sm:hidden'>{true ? <FaBars /> : <AiOutlineClose />}</div>
		</nav>
	)
}

export default Header_Signin