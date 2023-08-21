// this is to make the contents of a functional component center - using higher order component

import React from 'react'
import {motion} from 'framer-motion';
import {styles} from "../styles";
import { staggerContainer } from '../utils/motion';

// now why its a higher order component - because we are going to have another component inside if it
const SectionWrapper = (Component , idName) => 
// function returning a function
function HOC(){
  return (
    <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true , amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
        <span className='hash-span' id={idName} >
            &nbsp;
        </span>
        <Component/>
    </motion.section>
  )
}

export default SectionWrapper;
