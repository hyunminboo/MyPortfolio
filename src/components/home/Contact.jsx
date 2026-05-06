import React, { useState } from 'react'
import "./styles/Contact.scss"
import contact from '../../utils/contact'
import { api } from '../../lib/api'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", message: "", status: "in progress"
  })

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await api.post("/api/contact", formData)
      if (res.status === 201) {
        alert("문의가 성공적으로 접수되었습니다!")
        setFormData({ name: "", email: "", phone: "", message: "", status: "in progress" })
      }
    } catch {
      alert("문의 접수 중 오류가 발생했습니다.")
    }
  }

  return (
    <div className='inner contact-inner'>
      <div className="contact-header">
        <div className="section-label">GET IN TOUCH</div>
        <h1 className="contact-title">
          연락하기
          <span className="star-spin"><i className="star">✱</i></span>
        </h1>
      </div>

      <div className="contact-wrapper">
        {/* 폼 */}
        <div className="contact-form-side">
          <h3>이메일 보내기</h3>
          <form className='contact-form' onSubmit={handleSubmit}>
            <ul>
              <li>
                <label htmlFor="name" className='label'>이름</label>
                <div className="field">
                  <input type="text" id='name' name='name'
                    value={formData.name} onChange={handleChange}
                    required placeholder='홍길동' />
                </div>
              </li>
              <li>
                <label htmlFor="email" className='label'>이메일</label>
                <div className="field">
                  <input id='email' type="email" name='email'
                    required value={formData.email} onChange={handleChange}
                    placeholder='example@naver.com' />
                </div>
              </li>
              <li>
                <label htmlFor="phone" className='label'>연락처</label>
                <div className="field">
                  <input id='phone' name='phone' required
                    value={formData.phone} onChange={handleChange}
                    type="tel" placeholder='010-1234-5678' />
                </div>
              </li>
              <li>
                <label htmlFor="message" className='label'>문의 내용</label>
                <div className="field">
                  <textarea value={formData.message} onChange={handleChange}
                    name="message" id="message" rows={6}
                    placeholder='문의하실 내용을 자세히 적어주세요' required></textarea>
                </div>
              </li>
              <li>
                <div className="field">
                  <button type='submit' className='btn-primary'>메세지 보내기 →</button>
                </div>
              </li>
            </ul>
          </form>
        </div>

        {/* 연락처 정보 */}
        <div className="contact-info-side">
          <h3>다른 방법으로 찾기</h3>
          <ul className="contact-lst">
            {contact.basics.map((item) => (
              <li key={item.label}>
                <span className="item-label">{item.label}</span>
                <div className="item-content">
                  <a href={item.href}>{item.value}</a>
                  <div className="hint">{item.hint}</div>
                </div>
              </li>
            ))}
            <li className="channels-li">
              <span className="channels-label">채널</span>
              <div className="contact-chips">
                {contact.channels.map((item) => (
                  <a href={item.href} key={item.label}>{item.label}</a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
