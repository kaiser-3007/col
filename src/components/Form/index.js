import React from 'react';

const FormComponent = () => {
  return (
    <mesh receiveShadow position={[0, 0, -1]} scale={[1.25, 1.25, 1.25]}>
      <planeBufferGeometry attach="geometry" args={[20, 15]} />
      <meshStandardMaterial attach="material" color='#ECE1DA' />
    </mesh>
  )
}

export default FormComponent;