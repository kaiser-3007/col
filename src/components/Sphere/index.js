import React, { useState, useRef } from 'react';
import { useFrame } from 'react-three-fiber';

const Sphere = () => {
  const [hovered, setHover] = useState(false);
  const mesh = useRef();

  useFrame(() => {
    if (hovered) {
      if (mesh.current.scale.x < 1.25) {
        mesh.current.scale.x = mesh.current.scale.y = mesh.current.scale.z += 0.05;
      }
    } else if (mesh.current.scale.x > 1) {
      mesh.current.scale.x = mesh.current.scale.y = mesh.current.scale.z -= 0.05;
    }
  });
  
  return (
    <mesh 
      ref={mesh}
      visible 
      userData={{ test: "hello" }} 
      position={[0, 0, 0]} 
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      castShadow>
        <sphereGeometry attach="geometry" args={[1, 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          transparent
          roughness={0.1}
          metalness={0.1}
        />
    </mesh>
  )
}

export default Sphere;