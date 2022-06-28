import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
function Footer() {
  return (
    <div className="footer" id='Footer'>
        <img src={Wave} alt="" style={{width:'100%',height:'15rem'}}/>
        <div className="footer-child">
        {/* <div className="footer-icons">
           <a href="https://www.instagram.com/vishxwas.13/" target='_blank' className="insta"><Insta color='white' size='3rem'/></a>
           <a href="https://www.linkedin.com/in/vishwas-sharma-b88433203/" target='_blank' className="insta"><Facebook color='white' size='3rem'/></a> 
           <a href="https://github.com/vishxwas13" target='_blank' className="insta"><Github color='white' size='3rem'/></a> 
        </div> */}
        <span> <a href="mailto:vishwassharma332@gmail.com?" data-aos="zoom-in"> 📩 : vishwassharma332@gmail.com </a></span>
            <p className="copyright">
                Copyright &copy; 2022 by Vishwas Sharma.&nbsp;All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer
