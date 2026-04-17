// components/AnimatedSphere.jsx
import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphereMesh = () => {
  const meshRef = useRef();
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [hover, setHover] = useState(false);
  
  // Create custom gradient texture
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#ec880d');
    gradient.addColorStop(0.5, '#ff8c00');
    gradient.addColorStop(1, '#d38524');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
    
    return texture;
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX((event.clientX / window.innerWidth) * 2 - 1);
      setMouseY((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      // Smooth rotation based on mouse with spring-like effect
      const targetRotX = mouseY * 0.8;
      const targetRotY = mouseX * 0.8;
      
      meshRef.current.rotation.x += (targetRotX - meshRef.current.rotation.x) * 0.08;
      meshRef.current.rotation.y += (targetRotY - meshRef.current.rotation.y) * 0.08;
      
      // Floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
      
      // Pulse effect on hover
      if (hover) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.08, 1.08, 1.08), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <Sphere 
      ref={meshRef} 
      args={[1, 200, 200]} 
      scale={2.8}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <MeshDistortMaterial
        map={texture}
        metalness={0.9}
        roughness={0.15}
        distort={0.45}
        speed={1.8}
        emissive="#DD8519"
        emissiveIntensity={0.25}
        transparent
        opacity={0.92}
      />
    </Sphere>
  );
};

const AnimatedSphere = () => {
  return (
    <div className="w-full h-full">
      <Canvas 
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-8, -8, 8]} intensity={0.6} color="#FFD600" />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#FFFFFF" />
        <Environment preset="city" />
        <AnimatedSphereMesh />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={false}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

export default AnimatedSphere;