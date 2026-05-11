import React from "react";
import "./styles/Hero.scss";
import { Canvas } from "@react-three/fiber";
import Box from "../animation/Box";
import GatsbyStars from "../animation/GatsbyStars";
import useSmoothScroll from "../../hook/useSmoothScroll";

const Hero = () => {
  const scrollTo = useSmoothScroll();

  return (
    <div className="hero">
      {/* 3D 배경 Canvas */}
      <Canvas className="canvas" camera={{ position: [0, 0, 5], fov: 65 }}>
        <color attach="background" args={["#000000"]} />
        <GatsbyStars />
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Box position={[3.1, 0.4, 0]} scale={0.75} />
      </Canvas>

      <div className="inner hero-inner">
        {/* 배경 장식 */}
        <div className="hero-bg-circle c1"></div>
        <div className="hero-bg-circle c2"></div>
        <div className="hero-bg-circle outline1"></div>
        <div className="hero-bg-circle outline2"></div>

        <p className="hero-sub">안녕하세요, 저는</p>
        <h1 className="tit">
          <span className="en">Full-Stack</span>
          <span className="en green">Developer</span>
          <span className="ko">부현민 입니다.</span>
        </h1>

        <p className="hero-desc">
          사용자 경험을 최우선으로 생각하며, <br />
          기획 단계부터 구현까지 직접 설계하고 개발합니다. <br />
          사용자가 원하는 것이 무엇인지 끊임없이 고민하고, <br />그 아이디어를
          현실로 만들어가는 과정을 즐깁니다.
        </p>

        <div className="hero-cta">
          <button className="btn-primary" onClick={() => scrollTo("Work")}>
            포트폴리오 보기 ↓
          </button>
          <button className="btn-outline" onClick={() => scrollTo("Contact")}>
            연락하기
          </button>
        </div>

        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
