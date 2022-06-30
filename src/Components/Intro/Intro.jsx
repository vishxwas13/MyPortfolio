import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import scaler from '../../img/scaler.png'
import figma from '../../img/figma-icon.png'
function Intro(props) {
  return (
    <div className="intro">
      <div className="left-intro">
          <div className="name-intro" data-aos="fade-up">
              <span style={{color: props.currTheme? 'white':'revert'}}>Hy! I Am</span>
               <span>Vishwas Sharma</span>
          </div>
               <span style={{color: props.currTheme? 'var(--gray)':'grey'}} data-aos="zoom-in">A High Potential Programmer and Developer with an excellent problem-solving and Oratory skills.</span>
               
               <a href="https://drive.google.com/file/d/1Rpglg9Cc1DSYAgj_vEociwRwfstlv8c6/view?usp=sharing" target="_blank"><button className="hire-me" data-aos="flip-up">Hire me</button></a>
               <div className="intro-icons">
                 <a href="https://github.com/vishxwas13" target='_blank'><img src={Github} alt=""/></a>
                 <a href="https://www.linkedin.com/in/vishwas-sharma-b88433203/" target="_blank"><img src={LinkedIn} alt=""/></a>
                 <a href="https://www.instagram.com/vishxwas.13/" target='_blank'><img src={Instagram} alt=""/></a>
               </div>
      </div>
      <div className="right-intro">
          <img src={Vector1} alt=""/>
          <img src={Vector2} alt="" />
          <img src={boy} alt="" />
          <img style={{left:'-20%'}} src={glassesimoji} alt=""/>
      </div>
      <div className="floating-div figma-float java-intro"  style={{position:'absolute',left:'80%'}} >
        <img src={thumbup} alt=""/>
        <span style={{color: props.currTheme? 'black':'revert'}}>Java/React <br/> Developer</span>
      </div>
      <div className="floating-div figma-float2" style={{position:'absolute',top:'46.4%',left:'45%'}}>
        <img src={scaler} alt=""/>
        <span style={{color: props.currTheme? 'black':'revert'}}>TCW Intern <br/> at Scaler</span>
      </div>
      <div className="floating-div figma-float" id='figma' style={{position:'absolute',top:'80%',left:'80%'}}>
        <img src={figma} alt=""/>
        <span style={{color: props.currTheme? 'black':'revert'}}> UI/UX <br/> Designer</span>
      </div>
      <div className="blur"></div>
      <div className="blur" style={{background:'#a7e4f0',top:'70%',left:'10%'}}></div>
    </div>
  )
}

export default Intro
