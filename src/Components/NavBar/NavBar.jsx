import React, { useEffect } from 'react'
import './NavBar.css'
import Toogle from '../Toogle/Toogle'
import {Link} from 'react-scroll'
function NavBar(props) {
  function getTheme(Theme){
    props.getProp(Theme)
  }
  return (
    <div className="wrapper .js--section-features" id='NavBar' style={{color: props.currTheme? 'white':'revert'}}>
      <div className="left">
            <div className="name">Vishxwas</div>
            <Toogle getProp={getTheme}/>
      </div>
      <div className="right">
            <div className="list">
                <ul>
                  <Link spy={true} to='Footer' smooth={true} duration={25000}>
                    <li>Animate</li>
                    </Link>
                    <Link to='Services' smooth={true}>
                    <li>Services</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true}>
                    <li>Experience</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true}>
                    <li>Projects</li>
                    </Link>
                    <Link spy={true} to='Testimonials' smooth={true}>
                    <li>About me</li>
                    </Link>
                </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true}>
            <button className="nav-btn">Contact me</button>
            </Link>
      </div>
    </div>
  )
}

export default NavBar