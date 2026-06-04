import React, { useState } from "react";
import "./styles/Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("문의가 성공적으로 접수되었습니다!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="inner contact-inner">
      <div className="contact-header">
        <div className="section-label">GET IN TOUCH</div>
        <h2 className="contact-title">
          <span className="outline">CONTACT</span> ME
        </h2>
      </div>

      <div className="contact-wrapper">
        {/* 폼 */}
        <div className="contact-form-side">
          <h3>이메일 보내기</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <ul>
              <li>
                <label htmlFor="name" className="label">
                  이름
                </label>
                <div className="field">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="홍길동"
                  />
                </div>
              </li>
              <li>
                <label htmlFor="email" className="label">
                  이메일
                </label>
                <div className="field">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@naver.com"
                  />
                </div>
              </li>
              <li>
                <label htmlFor="phone" className="label">
                  연락처
                </label>
                <div className="field">
                  <input
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="010-1234-5678"
                  />
                </div>
              </li>
              <li>
                <label htmlFor="message" className="label">
                  문의 내용
                </label>
                <div className="field">
                  <textarea
                    value={formData.message}
                    onChange={handleChange}
                    name="message"
                    id="message"
                    rows={6}
                    placeholder="문의하실 내용을 자세히 적어주세요"
                    required
                  ></textarea>
                </div>
              </li>
              <li>
                <div className="field">
                  <button type="submit" className="btn-primary">
                    메세지 보내기 →
                  </button>
                </div>
              </li>
            </ul>
          </form>
        </div>

        {/* 다이아몬드 로고 */}
        <div className="contact-info-side">
          <div className="contact-logo-wrap">
            <div className="logo-diamond-outer">
              <div className="logo-diamond-inner">
                <div className="logo-letters">
                  <span className="letter b">B</span>
                  <span className="letter h">H</span>
                  <span className="letter m">M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
