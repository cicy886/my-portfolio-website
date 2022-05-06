import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../img/me.jpg'

const header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I am</h5>
            <h1>Sisi Vieira</h1>
            <h5 className="text-light">Full-Stack Developer</h5>
            <CTA></CTA>

            <div className="me">
              <img src={ME} alt="This is me" />
            </div>
        </div>
    </header>
  )
}

export default header