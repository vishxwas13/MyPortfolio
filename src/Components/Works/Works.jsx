import React from 'react'
import './Works.css'
import blocks from '../../img/scaler.png'
import ninjas from '../../img/ninjas.png'
import google from '../../img/gcp.png'
import dcs from '../../img/dcs.png'
import microsoft from '../../img/microsoft.png'
function Works(props) {
  return (
    <div className="works">
         <div className="left-services">
            <span style={{color: props.currTheme? 'white': 'revert'}} data-aos="slide-up">Internship</span>
            <span data-aos="slide-up">Experience as a trainee</span>
            <span style={{color: props.currTheme? 'var(--gray)':'grey'}} data-aos="slide-up"> Got learning experience from reputated companies/brands
                <br/> in various technolgies like cloud, IOT, Android, azure , DSA .
            </span>
           <a href="../../img/Vishwas's-Resume.pdf" download><button className="cv-btn" data-aos="flip-right">Download CV</button> </a>
       </div>
       <div className="right-works" data-aos="zoom-in">
           <div className="main-circle react-icon" style={{boxShadow: props.currTheme? 'var(--blackShadow)': 'var(--boxShadow)'}}>
               <div className="second-circle block reverse-spin" style={{boxShadow: props.currTheme? 'var(--blackShadow)': 'var(--boxShadow)',backgroundColor: props.currTheme? 'rgb(36, 45, 73)': 'white'}}>
                    <img src={blocks} alt=""/>
               </div>
               <div className="second-circle reverse-spin" style={{boxShadow: props.currTheme? 'var(--blackShadow)': 'var(--boxShadow)',backgroundColor: props.currTheme? 'rgb(36, 45, 73)': 'white'}}>
                  <a href="https://www.cloudskillsboost.google/public_profiles/f17e682a-c1fb-4eec-8afb-2a5482b60b9d" target="_blank" className="cloud"><img src={google} alt=""/> </a>
               </div>
               <div className="second-circle reverse-spin" style={{boxShadow: props.currTheme? 'var(--blackShadow)': 'var(--boxShadow)',backgroundColor: props.currTheme? 'rgb(36, 45, 73)': 'white'}}>
                    <img src={ninjas} alt=""/>
               </div>
               <div className="second-circle reverse-spin" style={{boxShadow: props.currTheme? 'var(--blackShadow)': 'var(--boxShadow)',backgroundColor: props.currTheme? 'rgb(36, 45, 73)': 'white'}}>
                    <img src={dcs} alt="" className="dcs"/>
               </div>
               <div className="second-circle reverse-spin" style={{boxShadow: props.currTheme? 'var(--blackShadow)': 'var(--boxShadow)',backgroundColor: props.currTheme? 'rgb(36, 45, 73)': 'white'}}>
                    <img src={microsoft } alt=""/>
               </div>
           </div>
       </div>
    </div>
  )
}

export default Works
