import React from 'react';

const GroundPlane = ({ color }) => {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color={color ? color : 'white'} />
    </mesh>
  )
}

export default GroundPlane;