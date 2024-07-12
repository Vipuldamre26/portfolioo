import React from 'react'
import './About.scss';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import abouts from '../../data/data'


const About = () => {

 
  return (
    <div className='app__about'>
      <h2 className='head-text'>
        I know That
        <span> Good Development </span>
        <br />
        means
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {
          abouts.abouts.map((about, index) => {
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
    </div>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  'app__whitebg'
);