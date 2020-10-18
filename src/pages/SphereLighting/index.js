import React from 'react';
import { Canvas } from 'react-three-fiber';
import Sphere from '../../components/Sphere';
import GroundPlane from '../../components/GroundPlane';
import BackDrop from '../../components/BackDrop';
import { KeyLight, FillLight, RimLight } from '../../components/Lights';

const SphereLighting = () => (
  <Canvas>
    <Sphere />
    <GroundPlane />
    <BackDrop />
    <KeyLight brightness={5.6} color="#F21313" />
    <FillLight brightness={2.6} color="#F21313" />
    <RimLight brightness={0} color="#F21313" />
  </Canvas>
)

export default SphereLighting;