import React, { Fragment } from 'react'
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion"


import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn , textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index , title , icon})=>{
  return (
    //now to create cards and animate it
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right" , "spring" , 0.5*index , 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
      >
        {/* the options filling here are related to the tilt object of the library so you can learn it  */}
        <div
          // eslint-disable-next-line react/no-unknown-property
          options={{
            max: 45,
            scale:5,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col '
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center '
          >{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <Fragment>
      {/* motion is used for animation of the div - you can have any tag that can contain element - we are using div */}
      {/* text variant is the utility function we have created */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
        {/* fade takes four parameters - first one->direction (can be empty at start) - second one -> type ( can be empty at start) -
         third one -> delay ( in milliseconds ) - fourth one ->( duration of the animation )*/}
        <motion.p
        
          variants={fadeIn("" , "" , 0.1 , 1)}
          className='mt-4  text-secondary text-[17px max-2-3xl leading-[30px]'
        >
          I am MERN stack developer with Experience in technologies 
          like Javascript , and Expertise in frameworks like
          React , NodeJS , ExpressJS  and styling In responsive web design using
          Bootstrap  and css. 
          I am a quick learner and  have a willingness to learn new things.
          With my skills and ability i am able to understand client needs and work 
          closely with them to create a efficient , scalable , and user-friendly solutions
          that solve the real-world problems.
          Let's work together and bring your ideas to life!
        </motion.p>

        {/* to display the cards beneath the overview */}
        <div className='mt-20 flex flex-wrap gap-10' >
          {/* ok so this is passing the values that can be later used 
          by the above functional component within the file as props - 
          parent and child prop relationship in one file soo touchy */}
          {services.map((service , index)=>(
            <ServiceCard key={service.title} index={index} 
            
            /* to show all the other things that is with the service we are looping over*/
            {...service}/>
          ))}
        </div>
      </motion.div>
    </Fragment>
  )
}


// now how to use the higher order components -
//  you can wrap your export of the component into the higher order component
// as the function you have defined - take the arguments based on it
export default SectionWrapper(About , "about");
// later on we are going to wrap all of these sections 