import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, ContactShadows, Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';

export function HeroModel() {
  const group = useRef<THREE.Group>(null);
  const mesh = useRef<THREE.Mesh>(null);
  const mesh2 = useRef<THREE.Mesh>(null);
  
  // Custom abstract shape resembling an 'N'
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(-1, -1.5);
    s.lineTo(-0.5, -1.5);
    s.lineTo(1, 1);
    s.lineTo(1, 1.5);
    s.lineTo(0.5, 1.5);
    s.lineTo(-1, -1);
    s.closePath();
    return s;
  }, []);

  const extrudeSettings = {
    depth: 0.4,
    bevelEnabled: true,
    bevelSegments: 4,
    steps: 2,
    bevelSize: 0.05,
    bevelThickness: 0.05,
  };

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = Math.sin(t / 4) / 4;
      group.current.rotation.x = Math.cos(t / 4) / 4;
    }
    if (mesh.current) {
      mesh.current.rotation.z = t * 0.1;
    }
    if (mesh2.current) {
      mesh2.current.rotation.z = -t * 0.1;
    }
    
    // Mouse parallax
    const targetX = (state.pointer.x * Math.PI) / 10;
    const targetY = (state.pointer.y * Math.PI) / 10;
    
    if (group.current) {
      group.current.rotation.y += 0.02 * (targetX - group.current.rotation.y);
      group.current.rotation.x += 0.02 * (targetY - group.current.rotation.x);
    }
  });

  return (
    <>
      <Float floatIntensity={2} rotationIntensity={1} speed={2}>
        <group ref={group} dispose={null} scale={1.5}>
          {/* Main N Shape */}
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <extrudeGeometry args={[shape, extrudeSettings]} />
            <MeshTransmissionMaterial 
              backside 
              backsideThickness={1} 
              thickness={0.5} 
              chromaticAberration={0.8}
              anisotropy={1}
              distortion={0.2}
              distortionScale={0.5}
              temporalDistortion={0.1}
              color="#5B5FFF"
              attenuationColor="#00D4FF"
              attenuationDistance={1}
              clearcoat={1}
              clearcoatRoughness={0.1}
            />
          </mesh>

          {/* Left Post */}
          <mesh castShadow receiveShadow position={[-0.8, 0, 0.2]}>
            <boxGeometry args={[0.4, 3, 0.4]} />
            <MeshTransmissionMaterial 
              thickness={0.2} 
              chromaticAberration={1}
              color="#00D4FF"
              clearcoat={1}
              roughness={0.1}
            />
          </mesh>

          {/* Right Post */}
          <mesh castShadow receiveShadow position={[0.8, 0, 0.2]}>
            <boxGeometry args={[0.4, 3, 0.4]} />
            <MeshTransmissionMaterial 
              thickness={0.2} 
              chromaticAberration={1}
              color="#8B5CF6"
              clearcoat={1}
              roughness={0.1}
            />
          </mesh>
          
          {/* Floating Accents */}
          <mesh ref={mesh} position={[1.5, 1.5, 0.5]}>
            <octahedronGeometry args={[0.3, 0]} />
            <meshPhysicalMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={2} wireframe />
          </mesh>

          <mesh ref={mesh2} position={[-1.5, -1.5, -0.5]}>
            <icosahedronGeometry args={[0.4, 0]} />
            <meshPhysicalMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={2} wireframe />
          </mesh>
        </group>
      </Float>

      {/* Lighting and Environment */}
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} color="#00D4FF" />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} color="#8B5CF6" />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[5, 1, -1]} scale={2} color="#5B5FFF" />
          <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} color="#00D4FF" />
        </group>
      </Environment>

      <ambientLight intensity={0.2} color="#5B5FFF" />
      <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1} color="#00D4FF" castShadow />
      
      <ContactShadows resolution={512} scale={20} blur={2} opacity={0.5} far={10} color="#00D4FF" position={[0, -2.5, 0]} />
    </>
  );
}
