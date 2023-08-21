import React , { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls,
  Decal,
  Float,
  Preload,
  useTexture

} from '@react-three/drei';


import CanvasLoader from '../Loader'

const Ball = (props) => {

  const [decal] = useTexture([props.imgUrl])

  return (
    <Float speed={1.75} rotationIntensity={1}  floatIntensity={2}>
      {/* to have some lighting  */}
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0 , 0 , 0.05]}/>
      
      {/* to show everything  */}
      <mesh
        castShadow 
        receiveShadow
        scale={2.75}
      >
        {/* to create balls */}
        <icosahedronGeometry args={[1,2]}/>
        {/* to have the backshadow with it - to provide it some differentiatiion*/}
        <meshStandardMaterial 
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* texture - by using decal we had before  */}
        <Decal
          position={[ 0 , 0 , 1 ]}
          map={decal}
          rotation={[ 2 * Math.PI , 0 , 6.25]}
          flatShading

        />

      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon})=>{
  return (
    // same as hero section
    <Canvas
    frameLoop='demand'
      gl={{ preserveDrawingBuffer: true}}
    >
      {/* to let our image to move left and right  */}
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} 
        />
        <Ball imgUrl={icon}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )

}

export default BallCanvas;