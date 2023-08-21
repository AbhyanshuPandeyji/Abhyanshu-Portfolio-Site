import React, { Fragment } from 'react';
import  { BallCanvas } from "./canvas";
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';


const Tech = () => {
  return (
      <Fragment>
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((technology)=>(
            <div className='w-28 h-28' key={technology.name}>
              {/* now how to develop these ball using three js and react three fiber */}
              <BallCanvas  icon={technology.icon} />
            </div>
          ))}
        </div>
      </Fragment>
    
  )
}

export default SectionWrapper(Tech , "");