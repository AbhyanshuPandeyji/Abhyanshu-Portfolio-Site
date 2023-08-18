import { motion } from 'framer-motion';

import "./Hero.css"
import { styles } from "../styles";
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `} >
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* to render the circle and line in the left side */}
          {/* for circle */}
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          {/* it works same as the dot above */}
          {/* <div className='dot'/> */}
          {/* for line */}
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>

        </div>

        {/* For texts now on right */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi , I'm <span className='text-[#915eff]'>Abhyanshu</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am a web developer , 
          <br className='sm:block hidden'/> I develop MERN stack websites </p>
        </div>



      </div>
        {/* 3d computer canvas here  */}
        <ComputersCanvas />

        {/* to have a sign that you can look different things under the hero section - a mouse middle roller */}
        <div className='absolute xs:bottom-10 bottom-32 w-full flex 
        justify-center items-center'>
            <a href="#about">
              <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary 
              flex justify-center items-start p-2'>
                  <motion.dev
                  animate={{
                    y:[0 ,25 , 0]
                  }}
                  transition={{
                    duration : 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}

                  className="w-3 h-3 rounded-full bg-secondary mb-1"
                  />
              </div>
            </a>
        </div>
    </section>
  )
}

export default Hero