import React, { Fragment } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'


import { styles } from '../styles'
import { github , livelogo } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn , textVariant } from '../utils/motion'



const ProjectCard = ({index , name , description , tags , image , source_code_link , live_link }) =>{

  return (
      // {/* it will even show the element just based on text - you dont need to provide the index value 
      // - its not a database which will take the id - index run one by one */}
      // {/* as an example its printing test as text in place of whole values in object because 
      // its rendering based on info being used here and not what is written in the js constants file */}
    <motion.div 
      variants={fadeIn("up" , "spring" , index*0.5 , 0.75 )}
    >
      <Tilt
        options={{
          max:45,
          scale: 1,
          speed: 450
        }}
        
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full  "
      > 
        <div className='relative w-full h-[230px]' >
          <img src={image} alt={name}  
          className='w-full h-full object-cover rounded-2xl' 
          />

          {/* absolute because we want something to appear on top of card */}
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover ' >
            <div 
            // it will run and open the link into new tab
              onClick={()=> window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              
            >
                <img 
                  src={github}
                  alt="github"
                  className='w-1/2 h-1/2 object-contain'
                />
            </div>
            {/* <div 
            // it will run and open the link into new tab
              onClick={()=> window.open(live_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full ms-2 flex justify-center items-center cursor-pointer'
            >
                <img 
                  src={livelogo}
                  alt="livelogo"
                  className='w-1/3 h-1/3 object-contain rounded-full'
                  style={{width: 80}}
                />
            </div> */}
          </div>
          
          
        </div>


        {/* for name and description of our project - tilt working as a card class -
         while above div as the image - down div is text content */}
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px] '>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] '>{description}</p>
        </div>

        {/* for # - tags elements */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag)=>(
            <p key={tag.name} className={`text=[14px] ${tag.color}`}>
            #{tag.name}
          </p>
          ))}
        </div>
        
      </Tilt>
    </motion.div>
  )

}







const Works = () => {
  return (
    <Fragment>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}> Projects. </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("" , "" , 0.1 , 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] '
        >
          Following Projects showcases my skills and experience through real-world
          examples of my work. Each Project is briefly described with the links to 
          code repositories and live demos in it. It reflects my ability to solve 
          complex problems , work with different technologies , and manage projects 
          effectively.
        </motion.p>
      </div>

      {/* wrapper for our project cards */}
      <div className='mt-20 flex flex-wrap gap-7 ' >
      {projects.map((project , index )=>(

        // the index comes from the iteration of the array - it automatically accounts index values - because the map funtions second argument is always a index
        // the spread operators will take every value at the given index - and then will be provided to the required part of the code - Which is in this case is ProjectCard
        // its taking value within the index - so it will go to the specific index and then starts to take the keys or values - in our case its a array of objects so keys

        <ProjectCard key={`project-${index}`} {...project} index={index}/>
      ))}
        
      </div>



    </Fragment>
  )
}

export default SectionWrapper(Works , "")