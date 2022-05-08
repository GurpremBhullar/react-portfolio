import React from 'react'
import './About.css'
import design from '../../assets/design.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know me</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={design} alt='design' />
                    </div>
                </div>

                <div className='about__content'>
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>1 year working</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h5>experience</h5>
                            <small>1 year working</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Masters Degree and Full Stack Certificate</h5>
                            
                        </article>
                    </div>

                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Lets Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;