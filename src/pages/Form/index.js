import React from 'react';
import { Canvas } from 'react-three-fiber';
import GroundPlane from '../../components/GroundPlane';
import BackDrop from '../../components/BackDrop';
import { PointLight } from '../../components/Lights';
import FormComponent from '../../components/Form';

const Form = () => {
  return (
    <Canvas camera={{ position: [0, 0.25, 13] }}>
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