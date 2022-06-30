import React from 'react'
import  './Services.css'
import heart from '../../img/android.png'
import react from '../../img/react.png'
import humble from '../../img/figma-icon.png'

function Services(props) {
  return (
   <div className="services" id='Services'>
      <div className="blur"style={{top:'120%'}}></div>
     <div className="blur" style={{background:'#a7e4f0',top:'190%',left:'10%'}}></div>
       <div className="left-services">
            <span style={{color: props.currTheme? 'revert': 'black'}} data-aos="slide-up">My freelance </span>
            <span data-aos="slide-up">Services for clients</span>
            <span style={{color: props.currTheme? 'var(--gray)':'grey'}} data-aos="slide-up" > I have hands-on-experience with these technolgies,
                <br/> Along with some very descent projects.
            </span>
            <a href="https://www.linkedin.com/in/vishwas-sharma-b88433203/" target="_blank"><button className="cv-btn hire-me" data-aos="flip-up">Open LinkedIn 🔥</button> </a>
       </div>
       <div className="right-services">
         <div className="card card-android" data-aos="slide-left" style={{left:'23rem',top:'-2rem',boxShadow: props.currTheme? 'var(--blackShadow)': 'inset'}}>
           <img src={heart} alt=""/>
           <span>Android Development</span>
           <span style={{color: props.currTheme? 'var(--gray)':'grey'}}>Java / Kotlin, XML, material design, Firebase & APIs.</span>
              <a href="https://github.com/vishxwas13/AbleJobs/" target="_blank"><button className="card-btn">check it out ✔️</button> </a>
         </div>
         <div className="card card-web" data-aos="slide-right" style={{left:'2rem',top:'9rem',boxShadow: props.currTheme? 'var(--blackShadow)': 'inset'}}>
           <img src={react} alt="" className="react-icon"/>
           <span>Web Development</span>
           <span style={{color: props.currTheme? 'var(--gray)':'grey'}}>HTML/CSS, JavaScript, ReactJs, php, MySQL, GIT.</span>
           <a href="https://github.com/vishxwas13/ks-fitness-world" target="_blank"><button className="card-btn">See demo ⏳</button> </a>
         </div>
         <div className="card card-ui" data-aos="slide-left" style={{left:'20rem',top:'20rem',boxShadow: props.currTheme? 'var(--blackShadow)': 'inset'}}>
           <img src={humble} alt=""/>
           <span>UI/UX Designing</span>
           <span style={{color: props.currTheme? 'var(--gray)':'grey'}}>Figma, Adobe Photoshop, ReactJS.</span>
           <a href="https://www.figma.com/@vishxwas" target="_blank"><button className="card-btn">Portfolio 🤌</button> </a>
         </div>
       </div>
   </div>
  )
}

export default Services
