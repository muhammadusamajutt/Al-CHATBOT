import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  return (
    <>
      <div className="container">
        <div className="row mt-1">
          <div className=" d-flex justify-content-between">
            <div className="left-header d-flex">
              <div className='d-flex me-3'>
                <div><FontAwesomeIcon icon={faClock} className='icons' /></div>
                <div className='ms-1'>Mon - Fri:(9AM - 5AM)</div>
              </div>
              <div className='d-flex me-3'>
                <div><FontAwesomeIcon icon={faPhone} className='icons' /></div>
                <div className='ms-1'>0309 6977069</div>
              </div>
              <div className='d-flex'>
                <div><FontAwesomeIcon icon={faLocationDot} className='icons' /></div>
                <div className='ms-1'>Faisalabad , PAKISTAN 4800</div>
              </div>
            </div>
            <div className="right-header">
              <FontAwesomeIcon className='me-3 fs-24' icon={faTwitter} />
              <FontAwesomeIcon className='me-3 fs-24' icon={faFacebook} />
              <FontAwesomeIcon className='me-3 fs-24' icon={faInstagram} />
              <FontAwesomeIcon className='fs-24' icon={faLinkedinIn} />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col d-flex justify-content-between">
            <h3>AL-<span className='color-change'>ChatBOT</span></h3>
            <nav>
              <a href="#">Home</a>
              <a href="#">Company</a>
              <a href="#">Services</a>
              <a href="#">Testimonals</a>
              <a href="#">AL Chatbot</a>
              <a href="#">Contact</a>
            </nav>

            <div className='header-number d-flex'>
              <FontAwesomeIcon icon={faPhone} className='icons me-1' />
              0309 6977069
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
