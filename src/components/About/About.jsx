import React from 'react'
import about from './About.module.css'
import study from '../../images/istockphoto-1336438227-640x640-removebg-preview.png'
import skillimg from '../../images/pngtree-study-by-reading-books-indonesian-national-education-day-png-image_3114521-removebg-preview.png'
import html from '../../images/html.png'
import css from '../../images/css-file.png'
import cpp from '../../images/c-.png'
import c from '../../images/c-document.png'
import algo from '../../images/algorithm.png'
import Footer from '../Footer/Footer'
import js from '../../images/java-script (1).png'
import { useNavigate } from 'react-router-dom'

function About() {

  const navigate=useNavigate();
  const goproject=()=>{
    navigate('/project')
  }

  const gocontact=()=>{
    navigate('/contact')
  }

  return (
    <>
    <div className={about.about}>
      <div className={about.divone}>
        <div className={about.skills}>
          <img src={study} alt="" />
        </div>
        <div className={about.intro}>
          <h1>LET ME INTRODUCE MYSELF</h1>
          <p>Commanding the digital landscape with finesse. 💻

            HTML, CSS, and JavaScript are my playground.

            With each project, I weave innovation and functionality into seamless web experiences. From responsive design to interactive elements, I bring ideas to life with code.</p>
            <p>Visit my Linkedin ID 
              <button className={about.btn} onClick={gocontact}>Here</button>
            </p>
        </div>
      </div>
          <h2>SKILLS</h2>
      <div className={about.divtwo}>
        <div className={about.skills}>
          <div className={about.inner}>
            <div>
          <img src={html} alt="" className={about.skillist} />
          <img src={css} alt="" className={about.skillist} />
         
          </div>
          <div>
          <img src={c} alt="" className={about.skillist} />
          <img src={cpp} alt="" className={about.skillist} />
          </div>
          <div>
          <img src={js} alt="" className={about.skillist} />
          <img src={algo} alt="" className={about.skillist} />
          </div>
          </div>
          <div> <h3>View some of my projects 
          <button className={about.btn} onClick={goproject}>Here</button>
        </h3></div>
        </div>
        <div>
          <img src={skillimg} alt="" />
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default About
