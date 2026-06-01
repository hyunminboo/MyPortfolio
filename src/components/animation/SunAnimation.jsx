import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const SunAnimation = () => {
  const sunRef = useRef(null);

  useFrame((state, delta) => {
    if (!sunRef.current) return;
    const { mouse, camera } = state;
    
    sunRef.current.rotation.y += delta * 0.1;

    camera.position.x += (mouse.x * 1.5 - camera.position.x) * 0.03;
    camera.position.y += (mouse.y * 1.5 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={sunRef}>
      <mesh position={[-4, 3, -10]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial 
          color="#FFD700"
          emissive="#FFA500"
          emissiveIntensity={0.8}
          toneMapped={false}
        />
      </mesh>
      <pointLight color="#FFD700" intensity={1.5} position={[-4, 3, -10]} distance={30} />
    </group>
  );
};

export default SunAnimation;
