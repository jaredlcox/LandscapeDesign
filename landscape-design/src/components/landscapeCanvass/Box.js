import React from 'react'

import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import texture from "../../data/plants/wood_texture.png"


const Box = () => {
    const colorMap = useLoader(TextureLoader, texture)
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxGeometry attach="geometry" args={[3, 3, 3]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}

export default Box
