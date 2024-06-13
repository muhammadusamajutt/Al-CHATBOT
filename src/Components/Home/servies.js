import React from 'react'
import '../../bootstrap/servies.css'
export default function servies() {
  return (
    <>
      <div className="row mt-5">
        <h1 className='text-center'>Our Service  Process that we apply</h1>
      </div>
      <div className="row servies-geo mt-5">
        <div class="process-steps">
          <div class="step">
            <div class="icon audit">
              <span>01</span>
            </div>
            <h3>AUDIT</h3>
            <p>Lorem ipsum dolor sit amet, consectetur ad consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis ipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
          </div>
          <div class="step">
            <div class="icon integration">
              <span>02</span>
            </div>
            <h3>INTEGRATION</h3>
            <p>Lorem ipsum dolor sit amet, consectetur ad consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis ipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
          </div>
          <div class="step">
            <div class="icon analysis">
              <span>03</span>
            </div>
            <h3>ANALYSIS</h3>
            <p>Lorem ipsum dolor sit amet, consectetur ad consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis ipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
          </div>
          <div class="step">
            <div class="icon results">
              <span>04</span>
            </div>
            <h3>RESULTS</h3>
            <p>Lorem ipsum dolor sit amet, consectetur ad consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis ipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
          </div>
        </div>
        <svg class="lines" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 200">
          <path d="M120 100 C 240 50, 360 50, 480 100 S 720 150, 840 100" stroke="#00c3ff" stroke-width="2" fill="transparent" />
          <path d="M480 100 C 600 50, 720 50, 840 100 S 1080 150, 1200 100" stroke="#ff85e4" stroke-width="2" fill="transparent" />
        </svg>

      </div>
    </>
  )
}
