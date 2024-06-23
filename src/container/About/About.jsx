import React from 'react'
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';


const About = () => {

  const abouts = [
    {
      title: 'Web Development',
      description: 'I am a good Frontend Developer',
      imgUrl: images.about01,
    },
    {
      title: 'UI/UX',
      description: 'I am a good UI/UX Developer',
      imgUrl: images.about02,
    },
    {
      title: 'Frontend Development',
      description: 'I am a good Frontend Developer',
      imgUrl: images.about03,
    },
    {
      title: 'Web Animations',
      description: 'I am a good Web Animator',
      imgUrl: images.about04,
    },
  ]


  return (
    <>
      <h2 className='head-text'>
        I know That
        <span> Good Development </span>
        <br />
        means
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {
          abouts.map((about, index) => {
            return (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1, type: 'tween' }}
                className='app__profile-item'
                key={about.title + index}
              >
                <img src={about.imgUrl} alt={about.title} />
                <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                <h2 className="p-text" style={{ marginTop: 10 }}>{about.description}</h2>
              </motion.div>
            )
          })
        }
      </div>
    </>
  )
}

export default About