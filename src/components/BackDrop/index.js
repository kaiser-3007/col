import React from 'react';

const BackDrop = ({ color, position }) => {
  return (
    <mesh receiveShadow position={position}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color={color ? color : 'white'} />
    </mesh>
  )
}

export default BackDrop;