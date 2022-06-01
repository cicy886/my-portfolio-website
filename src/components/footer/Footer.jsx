/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Sisi Vieira</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/sisi-vieira/"><BsLinkedin/></a>
        <a href="https://github.com/cicy886"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Sisi Vieira's Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
