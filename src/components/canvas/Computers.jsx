import { Suspense , useEffect , useState } from 'react';

// the three js error was gone - needed to install the three library and also needed to restart the vs code
// work on blank page
import { Canvas } from '@react-three/fiber';
import { OrbitControls , Preload , useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  // const city = useGLTF('./modular_city/scene.gltf');


  return (
    <mesh>
      {/* add light to see things */}
      <hemisphereLight
      // eslint-disable-next-line react/no-unknown-property
      intensity={4}
      // eslint-disable-next-line react/no-unknown-property
      groundColor="black"
      />
      {/* // eslint-disable-next-line react/no-unknown-property */}
      <pointLight 
      // eslint-disable-next-line react/no-unknown-property
      intensity={3}
      />
      <spotLight 
      // eslint-disable-next-line react/no-unknown-property
      position={[ -20 , 50  , 10]}
      // eslint-disable-next-line react/no-unknown-property
      angle={0.12}
      // eslint-disable-next-line react/no-unknown-property
      penumbra={1}
      // eslint-disable-next-line react/no-unknown-property
      intensity={3}
      // eslint-disable-next-line react/no-unknown-property
      castShadow
      // eslint-disable-next-line react/no-unknown-property
      shadow-mapSize={1024}
      />
      <primitive 
      // eslint-disable-next-line react/no-unknown-property
      object={computer.scene}
      // eslint-disable-next-line react/no-unknown-property
      // object={city.scene}
      scale={isMobile ? 0.7 : 0.75}
      // eslint-disable-next-line react/no-unknown-property
      position={isMobile ? [0 , -3  ,-2.2 ] : [0 , -3.25 , -1.5]}
      // eslint-disable-next-line react/no-unknown-property
      rotation={[-0.01, -0.2 , -0.1]}
      />
    </mesh>
  )
}


// this whole use effect is just changing is mobile variable
const ComputersCanvas = () =>{
  

  const [isMobile , setIsMobile]  = useState(false);

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width:500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches);
    }

    // Add the callback function as a listener for changes the media query 
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // remove the listener when the component is unmounted
    return ()=>{
      mediaQuery.removeEventListener('change' , handleMediaQueryChange);
    }

  }, [])

  return (
    <Canvas
    frameloop='demand'
      shadows
      camera={{position: [20 ,3 ,5] , fov:25} }
      gl={{ preserveDrawingBuffer: true}}
    >
      {/* to let our image to move left and right  */}
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

// cannot have two default exports like this
export default ComputersCanvas;