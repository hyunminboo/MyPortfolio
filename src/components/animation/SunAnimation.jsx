import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const particleCount = 60;
const maxDistance = 3.5;

const SunAnimation = () => {
  const pointsRef = useRef();
  const linesRef = useRef();
  const groupRef = useRef();

  // 노드(입자) 데이터 초기화
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < particleCount; i++) {
      temp.push({
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 12
        ),
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.015
        ),
      });
    }
    return temp;
  }, []);

  const positions = useMemo(() => new Float32Array(particleCount * 3), []);
  const linePositions = useMemo(() => new Float32Array(particleCount * particleCount * 6), []);

  useFrame((state, delta) => {
    let lineIndex = 0;
    
    // 입자 위치 업데이트 및 경계 반사
    for (let i = 0; i < particleCount; i++) {
      const p = particles[i];
      p.pos.add(p.vel);

      if (p.pos.x > 6 || p.pos.x < -6) p.vel.x *= -1;
      if (p.pos.y > 6 || p.pos.y < -6) p.vel.y *= -1;
      if (p.pos.z > 6 || p.pos.z < -6) p.vel.z *= -1;

      positions[i * 3] = p.pos.x;
      positions[i * 3 + 1] = p.pos.y;
      positions[i * 3 + 2] = p.pos.z;

      // 가까운 입자끼리 선 연결
      for (let j = i + 1; j < particleCount; j++) {
        const p2 = particles[j];
        const dist = p.pos.distanceTo(p2.pos);
        if (dist < maxDistance) {
          linePositions[lineIndex++] = p.pos.x;
          linePositions[lineIndex++] = p.pos.y;
          linePositions[lineIndex++] = p.pos.z;
          linePositions[lineIndex++] = p2.pos.x;
          linePositions[lineIndex++] = p2.pos.y;
          linePositions[lineIndex++] = p2.pos.z;
        }
      }
    }

    if (pointsRef.current) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
    if (linesRef.current) {
      linesRef.current.geometry.setDrawRange(0, lineIndex / 3);
      linesRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // 그룹 자체를 천천히 회전
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x += delta * 0.02;
    }

    // 카메라 마우스 추적 (시점 이동)
    state.camera.position.x += (state.mouse.x * 2 - state.camera.position.x) * 0.02;
    state.camera.position.y += (state.mouse.y * 2 - state.camera.position.y) * 0.02;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={groupRef} position={[-2, 0, -5]}>
      {/* 노드 (점) */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        {/* 라이트 모드에 어울리는 소프트 인디고 색상 노드 */}
        <pointsMaterial color="#6366f1" size={0.15} sizeAttenuation transparent opacity={0.8} />
      </points>
      
      {/* 연결선 */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount * particleCount * 2}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        {/* 가늘고 투명한 차콜 그레이 톤의 연결선 */}
        <lineBasicMaterial color="#94a3b8" transparent opacity={0.3} />
      </lineSegments>
    </group>
  );
};

export default SunAnimation;
