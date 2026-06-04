import React from "react";
import works from "../../utils/works";
import "./styles/Work.scss";

const Work = () => {
  return (
    <div className="inner work-inner">
      <div className="work-header">
        <div className="work-title-group">
          <div className="section-label">MY PROJECTS</div>
          <h2>
            <span className="outline">CORE</span> PROJECTS
          </h2>

          <div className="work-header-desc">
            <p>
              설계부터 배포까지 깊이 관여한 규모 있는 핵심 프로젝트들입니다.
              <br />
              복잡한 문제 해결과 성능 최적화에 대한 고민을 담았습니다.
            </p>
          </div>
        </div>
      </div>

      <ul className="work-lst">
        {works.map((work, idx) => (
          // ✅ 수정: lst-t-wrap을 div로 변경
          <li key={work.id}>
            <div className="lst-t-wrap">
              {" "}
              {/* a → div */}
              <span className="work-num">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h4 className="lst-tit">{work.title}</h4>
              <p className="lst-dsc">{work.description}</p>
              <div className="tags">
                {work.tags.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
              <div className="work-links">
                <a
                  href={work.links.notion}
                  onClick={(e) => e.stopPropagation()}
                >
                  Notion ↗
                </a>
                <a href={work.links.demo} onClick={(e) => e.stopPropagation()}>
                  Live Demo ↗
                </a>
              </div>
            </div>{" "}
            {/* a → div */}
            <a href={work.links.demo} className="lst-img-wrap">
              <div
                className="bg"
                style={{ backgroundImage: `url(${work.thumbnail})` }}
              ></div>
            </a>
          </li>
        ))}
      </ul>

      <div className="work-more">
        <a href="#">+ 더 많은 프로젝트 보기</a>
      </div>
    </div>
  );
};

export default Work;
