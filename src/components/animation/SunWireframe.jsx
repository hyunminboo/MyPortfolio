import { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SunWireframe = ({ scale = 1, ...props }) => {
  const meshRef = useRef(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // 해 모양 지오메트리 생성
  const sunGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const outerRadius = 1;
    const innerRadius = 0.6;
    const points = 12; // 12개의 햇살

    for (let i = 0; i < points * 2; i++) {
      const angle = (i * Math.PI) / points;
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      i === 0 ? shape.moveTo(x, y) : shape.lineTo(x, y);
    }
    shape.closePath();

    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.3,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.05,
      bevelSegments: 3,
    });
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.8;
    }
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      geometry={sunGeometry}
      scale={active ? scale * 1.5 : scale}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <meshStandardMaterial
        color={hovered ? "#ff8c00" : "#ffbb00"}
        emissive={hovered ? "#ff8c00" : "#ffcc00"}
        emissiveIntensity={0.6}
        wireframe
      />
    </mesh>
  );
};

export default SunWireframe;
