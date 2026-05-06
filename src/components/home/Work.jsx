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
            <span className="outline">프로</span>젝트
          </h2>

          <div className="work-header-desc">
            <p>
              직접 기획하고 개발한 주요 프로젝트입니다.
              <br />
              프론트엔드부터 배포까지 다양한 경험을 담았습니다.
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
