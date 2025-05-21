import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../img/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I am</h5>
            <h1>Sisi Vieira</h1>
            <h5 className="text-light">Quality Assurance Engineer</h5>
            <CTA></CTA>
            <HeaderSocials />

            <div className="me">
              <img src={ME} alt="This is me" />
            </div>

            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header