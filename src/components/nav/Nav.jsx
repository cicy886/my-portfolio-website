import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BsBriefcase} from 'react-icons/bs'
import {BiMessageSquareDetail} from 'react-icons/bi'

const nav = () => {
  return (
    <nav>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#portfolio"><BsBriefcase/></a>
      <a href="#contact"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default nav