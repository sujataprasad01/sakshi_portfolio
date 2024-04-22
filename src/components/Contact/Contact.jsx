import React from 'react'
import styles from './Contact.module.css'
import mail from '../../images/emailIcon.png'
import linkedin from '../../images/linkedinIcon.png'
import github from '../../images/githubIcon.png'
import insta from '../../images/icons8-instagram-50.png'
import Footer from '../Footer/Footer'
function Contact() {
  return (
    <>
    <div className={styles.container}>
       <div className={styles.text}>
        <h2 className={styles.title}>Contact</h2>
        <p><span className={styles.coloredword}>Feel free to reach out!</span></p>
      </div>
      <div className={styles.icons}>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:sakshiprasad406@gmail.com" className={styles.linkfont}>
          <img src={mail} alt="Email icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/sakshi-prasad-712937256/">
          <img
            src={linkedin}
            alt="LinkedIn icon"
          />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/sakshiprasad06">
          <img src={github} alt="Github icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.instagram.com/sakshiprasad06?igsh=MTM2b3J1aXgzam9laA==">
          <img src={insta} alt="Github icon" />
          </a>
        </li>
      </ul>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Contact
