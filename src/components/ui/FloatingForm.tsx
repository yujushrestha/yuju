"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { WireframeGeometry, IcosahedronGeometry } from "three"
import * as THREE from "three"

function Icosahedron() {
  const meshRef = useRef<THREE.LineSegments>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.04
      meshRef.current.rotation.y += delta * 0.06
      meshRef.current.rotation.z += delta * 0.02
    }
  })

  const geometry = new IcosahedronGeometry(1.4, 1)
  const wireframe = new WireframeGeometry(geometry)

  return (
    <lineSegments ref={meshRef} geometry={wireframe}>
      <lineBasicMaterial
        color="#c8a96e"
        opacity={0.15}
        transparent
        linewidth={1}
      />
    </lineSegments>
  )
}

export default function FloatingForm() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        right: "8%",
        transform: "translateY(-50%)",
        width: "420px",
        height: "420px",
        pointerEvents: "none",
        opacity: 1,
         display: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <Icosahedron />
      </Canvas>
    </div>
  )
}