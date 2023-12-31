import React ,{useState} from 'react'
import Modal from './Modal'
import { useAuth } from '../context/AuthContext' // import useAuth

export const Header = () => {
    const [openModal, setOpenModal] = useState(false)
    const { currentUser } = useAuth() // get currentUser

    return (
        <>
            {openModal && <Modal setOpenModal={setOpenModal} />}
            <div className='sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-white'>
                <h1 className='text-3xl select-none sm:text-6xl'>TODO LIST</h1>
                <div className='text-center cursor-pointer' onClick={() => setOpenModal(true)}> {/* Add 'cursor-pointer' and 'onClick' to the parent div */}
                    <i className="fa-solid fa-user text-xl duration-300 hover:opacity-40 sm:text-3xl"></i>
                    <div className="duration-300 hover:opacity-40 sm:text-3x">{currentUser ? currentUser.email : ''}</div> {/* display currentUser.email */}
                </div>
            </div>
        </>
    )
}
