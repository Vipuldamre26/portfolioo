import React from 'react'
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';


const About = () => {

  const abouts = [
    {
      title: 'Web Development',
      description: 'As a web developer, I specialize in creating dynamic, responsive websites with a focus on user experience and modern design principles.',
      imgUrl: images.about01,
    },
    {
      title: 'UI/UX',
      description: 'As a UI/UX developer, I craft intuitive and visually compelling user interfaces, ensuring seamless interactions and a delightful user experience. ',
      imgUrl: images.about02,
    },
    {
      title: 'Frontend Development',
      description: 'As a frontend developer, I build web interfaces using cutting-edge technologies. My focus is on delivering clean, efficient, and maintainable code.',
      imgUrl: images.about03,
    },
    {
      title: 'Web Animations',
      description: 'As a web animator, I bring websites to life with captivating animations that enhance user engagement. Utilizing advanced animation techniques.',
      imgUrl: images.about04,
    },
  ]


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
    </div>
  )
}

export default AppWrap(About, 'about');