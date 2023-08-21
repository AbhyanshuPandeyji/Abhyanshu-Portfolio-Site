import React , { Fragment }from 'react'
import { motion } from 'framer-motion';


import { styles } from '../styles'
import { SectionWrapper } from '../hoc';
import { fadeIn , textVariant } from '../utils/motion';
import { testimonials } from '../constants';




const FeedbackCard = ({index , testimonial , name , designation , company , image }) =>(

  <motion.div
  
    variants={fadeIn("" ,"spring" , index*0.5 , 0.75 )}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[40px]'>"</p>

    {/* for content inside */}
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      {/* wrapper inside a div - this div is bottom div which will contain - image - name , @ sign and their position*/}
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@ </span>
            {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} , {company}
          </p>
        </div>

        <img src={image} alt={`feedback-by-${name}`} 
        className='w-10 h-10 rounded-full object-cover'/>
      </div>

    </div>
  </motion.div>

)






const Feedbacks = () => {
  return (
      // {/* three ways to write the measurements in the tailwindcss - 
      // first one - by using the text ( eg w-full , etc. ) , 
      // second one - using the number with size one ( eg rounded-2xl ) , 
      // third way - using the actual self defined css measurements like px in a square bracket after the - (eg w-[25px])  */}

      // {/*
      // the ways you can use the sizing of different devices
      // for max width - max-w-3xl
      // for gap - gap-3
      // for sm - md - lg devices - sm:w-10
      // for margin - mt-4
      // for padding - py-12

      // */
      // }

    <Fragment>
      <div className='mt-12 bg-black-100 rounded-[20px] '>
        <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
          <motion.div
            variants={textVariant()}
          >
            <p className={styles.sectionSubText} >What Others say</p>
            <h2 className={styles.sectionHeadText} >Testimonials.</h2>
          </motion.div>
        </div>

        <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`} >
          {testimonials.map((testimony , index)=>(
            <FeedbackCard 
            key={testimony.name}
            {...testimony}
            index={index}/>
          ))}
        </div>

      </div>
    </Fragment>
  )
}

export default SectionWrapper(Feedbacks , "");