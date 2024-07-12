import React from 'react'
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
    <div>
        <a  className='social-icon' href="https://www.linkedin.com/in/vipul-damre-2237241a7/" target='_blank'><BsLinkedin /></a>
    </div>
    <div>
        <a className='social-icon' href="https://github.com/Vipuldamre26" target='_blank'><BsGithub /></a>
    </div>
    <div>
        <a className='social-icon' href="https://www.instagram.com/vipulllll_k_d_?igsh=bnQxNGxmMHVsZ2lq&utm_source=qr" target='_blank'><BsInstagram /></a>
    </div>
    </div>
  )
}

export default SocialMedia