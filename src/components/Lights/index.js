import React from 'react';

const KeyLight = ({ brightness, color }) => {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  )
}

const FillLight = ({ brightness, color }) => {
  return (
    <rectAreaLight
      width={3}
      height={3}
      intensity={brightness}
      color={color}
      position={[2, 1, 4]}
      lookAt={[0, 0, 0]}
      penumbra={2}
      castShadow
    />
  )
}

const RimLight = ({ brightness, color }) => {
  return (
    <rectAreaLight
      width={2}
      height={2}
      intensity={brightness}
      color={color}
      position={[1, 4, -2]}
      rotation={[0, 180, 0]}
      castShadow
    />
  )
}

const AmbientLight = ({ brightness, color }) => {
  return (
    <ambientLight
      intensity={brightness}
      color={color} />
  )
}

const PointLight = ({ brightness, color, position }) => {
  return (
    <pointLight 
      intensity={brightness}
      position={position}
      color={color} />
  )
}

export { KeyLight, FillLight, RimLight, AmbientLight, PointLight };