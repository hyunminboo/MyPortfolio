import React, { useEffect, useRef } from "react";
import "./styles/AboutIntro.scss";

const cards = [
  {
    title: "프론트엔드  &  백엔드",
    desc: "학생 시절 SCSS, JSP, JSX, React를 활용한 웹 개발 경험이 있으며, 사용자에게 먼저 보여지는 프론트엔드에 흥미를 느껴 프론트엔드에 집중하고 있습니다.",
  },
  {
    title: "성장에  대한  즐거움",
    desc: "새로운 프로젝트마다 이전에 아쉬웠던 부분을 개선하고 새로운 코드 스타일이나 기술을 적용하는 것에 큰 즐거움을 느낍니다. 이는 개발 성장의 동력이 되어줍니다.",
  },
  {
    title: "꺾이지  않는  마음",
    desc: "해결할 수 없는 문제는 없다는 확신이 있습니다. 다만, 팀과 소통하고 협력할 때 그 해결의 속도와 완성도가 비약적으로 높아진다는 것을 경험했습니다. 동료들과 머리를 맞대어 최선의 루트를 찾아내는 과정에서 더 큰 성취감을 느낍니다.",
  },
];

const AboutIntro = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".ai-card");
            items.forEach((el, i) => {
              el.style.transitionDelay = `${i * 0.12}s`;
              el.classList.add("visible");
            });
            const logo = entry.target.querySelector(".ai-logo");
            if (logo) logo.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="inner aboutintro-inner" ref={sectionRef}>
      <div className="ai-header">
        <span className="section-label">ABOUT ME</span>
        <h2 className="ai-title">저에 대해서</h2>
      </div>

      <div className="ai-layout">
        <ul className="ai-cards">
          {cards.map((card, i) => (
            <li className="ai-card" key={i}>
              <div className="ai-card-bar" />
              <div className="ai-card-body">
                <h3 className="ai-card-title">{card.title}</h3>
                <p className="ai-card-desc">{card.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="ai-logo" aria-hidden="true">
          <div className="logo-diamond">
            <div className="logo-letters">
              <span className="letter b">B</span>
              <span className="letter h">H</span>
              <span className="letter m">M</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
