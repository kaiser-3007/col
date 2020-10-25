import React, { useRef } from 'react';
import { Canvas, useFrame, useThree, extend } from 'react-three-fiber';
import GroundPlane from '../../components/GroundPlane';
import BackDrop from '../../components/BackDrop';
import { PointLight } from '../../components/Lights';
import FormComponent from '../../components/Form';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();

  useFrame((state) => controls.current.update());

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={true}
      enablePan={false}
      enableRotate={false}
      // maxAzimuthAngle={Math.PI / 4}
      // maxPolarAngle={Math.PI}
      // minAzimuthAngle={-Math.PI / 4}
      // minPolarAngle={0}
    />
  );
};

const Form = () => {
  return (
    <Canvas camera={{ position: [0, 0.25, 13] }}>
      <CameraControls />
      <GroundPlane 
        color="#7F7D7E" />

      <BackDrop 
        color="#E5CBBC"
        position={[0, 10, -20]} />

      <PointLight 
        color="#E6E8E4" 
        brightness={5} 
        position={[-4, 10, -3]} />

      <PointLight 
        color="#E6E8E4" 
        brightness={5} 
        position={[4, 10, 3]} />

      <FormComponent />
    </Canvas>
  )
}

export default Form