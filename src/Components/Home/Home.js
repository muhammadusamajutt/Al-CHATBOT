import React from 'react'
import image from '../../assests/img/Mask group.png'
import Servies from './servies'
import Facilitics from './facilitics'
export default function Home() {
  return (
    <>
      <div className="container home">
        <div className="row">
          <div className="col">
            <div>
              <div className='slide'>
                <h1>WELL COME TO <br />AL CHATBOT</h1>
                <div className='designe-buttom'></div>
                <p className='well-paragraph'>Lorem ipsum dolor sit amet, consectetur ad consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis ipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                <div className='email-input'>
                  <input type="email" placeholder='Enter Your Email' />
                  <button>Request Demo</button>
                </div>
              </div>
              <img className='imageside' src={image} alt="" />
            </div>
          </div>
          <svg class="lines1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 200">
            <path d="M120 100 C 240 50, 360 50, 480 100 S 720 150, 840 100" stroke="#00c3ff" stroke-width="2" fill="transparent" />
            <path d="M480 100 C 600 50, 720 50, 840 100 S 1080 150, 1200 100" stroke="#ff85e4" stroke-width="2" fill="transparent" />
          </svg>
          <svg class="lines2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 200">
            <path d="M120 100 C 240 50, 360 50, 480 100 S 720 150, 840 100" stroke="#00c3ff" stroke-width="2" fill="transparent" />
            <path d="M480 100 C 600 50, 720 50, 840 100 S 1080 150, 1200 100" stroke="#ff85e4" stroke-width="2" fill="transparent" />
          </svg>
        </div>
        <Servies />
        <Facilitics />
      </div>
    </>
  )
}
