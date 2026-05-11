import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Box = ({ scale = 1, ...props }) => {
  const meshRef = useRef(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // 매 프레임마다 회전 애니메이션 적용
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? scale * 1.5 : scale}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {/* 지오메트리: 매듭 모양 */}
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />

      {/* 재질: 호버 시 색상 변경 및 와이어프레임 효과 */}
      <meshStandardMaterial
        color={hovered ? "#00f5ff" : "#b388ff"}
        emissive={hovered ? "#00f5ff" : "#5b2cff"}
        emissiveIntensity={0.5}
        wireframe
      />
    </mesh>
  );
};

export default Box;
