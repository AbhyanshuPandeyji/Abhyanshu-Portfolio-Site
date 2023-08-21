// we will use the math function too in this one

// the star particle will be created by us
// - we can define the particle density flowing in the air

import {Suspense , useRef , useState } from 'react'
import { Canvas , useFrame } from '@react-three/fiber'
import {  Preload , Points , PointMaterial } from '@react-three/drei'

import * as random from 'maath/random/dist/maath-random.esm';


// import CanvasLoader from '../Loader';


// for developing the actual stars
const Stars = (props) => {

  const ref = useRef();
  // use random.shape(new Typeofarrayprovided(number of particles / number of rendered things on screen) , 
  // { type of size of the particle( different types of the particle have different measurements and no or setting to do for it to renderit correctly) : size})
  const [sphere] = useState(()=> random.inSphere(new Float32Array(5000) , { radius: 1.2 }));


  // to make the stars move
  // allow us to rotate something frame by frame
  useFrame((state , delta) =>{
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  })

  return (
    // group instead of mesh\
    // we need our stars need to rotate - instead of rotating each star we will rotate each group
    // eslint-disable-next-line react/no-unknown-property
    <group rotation={[ 0 , 0 , Math.PI / 4]} >
      {/* to know any more about these 3d properties and elements - you can go to three js or react-3 fiber documentation  */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />

      </Points>
    </group>
  )
}


const StarsCanvas = () =>{
  // absolute to show behind the contact form
  return (
  <div className='w-full h-auto absolute inset-0 z-[-1] '>
    <Canvas
      camera={{position: [0 , 0 , 1]}}
    > 
        <Suspense  fallback={null}>
          <Stars />
        </Suspense>
      <Preload all />
    </Canvas>
    
  </div>
  )
}

export default StarsCanvas;