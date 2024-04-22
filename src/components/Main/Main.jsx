import React from 'react'
import styless from './Main.module.css'
import { Link } from 'react-router-dom'
import sakshi from '../../images/d2f0ef75-e4b9-46a0-bd64-cc1662a7699e.jpg'
import Footer from '../Footer/Footer'
import About from '../About/About'
function Main() {
  return (
    <>
    <div className={styless.main}>
      <div className={styless.leftside}>
        <h1>Hello , Sakshi here</h1>
        <h2>Creating dynamic and responsive websites using HTML, CSS, and React, currently in 2nd year of COMPUTER SCIENCE ENGINEERING, feel free to contact me</h2>
        <Link to='/contact' className={styless.contactBtn}>Let's Connect</Link>
      </div>
      <div className={styless.rightside}>
        <img src={sakshi} alt=""  className={styless.mainImg}/>

      </div>
    </div>
    <About></About>
    </>
  )
}

export default Main
