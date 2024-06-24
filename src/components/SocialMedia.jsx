import React from 'react'
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
    <div>
        <BsLinkedin className='social-icon' />
    </div>
    <div>
        <BsGithub className='social-icon' />
    </div>
    <div>
        <BsInstagram className='social-icon' />
    </div>
    </div>
  )
}

export default SocialMedia