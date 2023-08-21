
import React , {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls , Preload , useGLTF } from '@react-three/drei'


import CanvasLoader from '../Loader';



const Earth = () => {
  // the link to the model is in public library so no defining or to export it from the different js file
  const earth = useGLTF('./planet/scene.gltf');

  return (
        <primitive 
          // eslint-disable-next-line react/no-unknown-property
          object={earth.scene}
          scale={2.5}
          // eslint-disable-next-line react/no-unknown-property
          position-y={0}
          // eslint-disable-next-line react/no-unknown-property
          rotation-y={0}
        
        />
    )
}


const EarthCanvas = () =>{
  return(
    // canvas possess the camera property  not the orbit controls
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer:true}}
      camera={{
        fov:45,
        near: 0.1,
        far:200,
        position: [-4 , 3 , 6],
      }}
    
    >
      {/* suspense ensure that while our model is loading we have 
      something to show otherwise it will throw an error - 
      like before the blank screen every time you reload the page */}
      
      {/* the rendering of the model will be within the suspense - its almost like the 
      ecommmerce site where the loading run when the data is coming and loading is true
      only difference is that here the loading is true is not required instead we use the
      react predefined loading helper */}
      <Suspense fallback={<CanvasLoader/>}>

      {/* to modify and move around our model with the help of our mouse - in this case earth */}
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        
      />
      <Earth/>
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;