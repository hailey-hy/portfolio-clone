import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {AiFillProject} from 'react-icons/ai'
import {AiTwotoneThunderbolt} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Beginner</small>
            </article>

            <article className='about__card'>
              <AiFillProject className='about__icon'/>
              <h5>Projects</h5>
              <small>2+</small>
            </article>

            <article className='about__card'>
              <AiTwotoneThunderbolt className='about__icon'/>
              <h5>Tech Stack</h5>
              <small>4+ Frontend 2+ Backend</small>
            </article>
          </div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About