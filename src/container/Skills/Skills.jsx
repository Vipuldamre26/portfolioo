import React, { useEffect, useState } from 'react'
import './Skills.scss';

import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import skills from '../../data/data';
// import ReactTooltip from 'react-tooltip';


const Skills = () => {

  const [allskills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skills.skills);
  }, [])

// console.log(allskills);

  return (
    <>
      <h2 className="head-text">Skills</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {allskills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                // style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.img} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'), 
  'skills',
  'app__whitebg'
)