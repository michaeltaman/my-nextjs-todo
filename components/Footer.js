import React from 'react'

export const Footer = () => {
  return (
    <div className='flex items-center justify-center gap-3 py-3 border-t border-solid border-white'>
        <a href="#">
            <i className="fa-brands fa-instagram duration-300 hover:opacity-30 cursor-pointer"></i>
        </a>
        <i className="fa-brands fa-linkedin duration-300 hover:opacity-30 cursor-pointer"></i>
        <i className="fa-brands fa-github-alt duration-300 hover:opacity-30 cursor-pointer"></i>
    </div>
  )
}
