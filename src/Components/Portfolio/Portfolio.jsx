import React from 'react'
import './Portfolio.css'
import Isro from '../../img/isro.jpg'
import Able from '../../img/able.jpg'
import Ks from '../../img/ks.png'
import Uber from '../../img/uber.png'
import Bharat from '../../img/bharat.jpg'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, { Autoplay, Pagination} from 'swiper';
import "swiper/css/pagination";
import 'swiper/css'
import 'swiper/css/autoplay'
function Portfolio(props) {
  SwiperCore.use([Autoplay])
  return (
    <div className="portfolio" id='Portfolio'>
        <span>My Projects</span>
        <span>Source code</span>
   <Swiper  modules={[Pagination]}
    autoplay={{ delay: 2000, disableOnInteraction: true}}
   slidesPerView={1}
   spaceBetween={80}
     grabCursor={true} 
    className='portfolio-slider'
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      768: {
        slidesPerView: 1,
        // spaceBetween: 100,
      },
      1024: {
        slidesPerView: 2,
        // spaceBetween: 30,
      },
    }}
     loop='true' data-aos="zoom-out">
            <SwiperSlide>
            
            <span> <p> <a href="http://ks-fitness-world.c1.biz/" target="_blank">  <img src={Ks} alt="" style={{boxShadow: props.currTheme? 'var(--blackShadow)': 'var(--boxShadow)'}}/> <br/> A commercial website which I made for a fitness club gym located in Agra city. Freelance Project for better Client engagement skills. </a></p></span> 
            </SwiperSlide>
            <SwiperSlide>
            <span> <p><a href="https://github.com/vishxwas13/AbleJobs" target="_blank">
             <img src={Able} alt="" style={{boxShadow: props.currTheme? 'var(--blackShadow)': 'var(--boxShadow)'}}/> <br/>  An app for Startup level recruiters and small organizations to sync the users contact on a single click using real-time APIs made uniquely for recruiters.</a></p></span>
            </SwiperSlide>
            <SwiperSlide>
            <span> <p>  
            <a href="https://www.figma.com/community/file/1073707908093151588" target="_blank">
             <img src={Uber} style={{boxShadow: props.currTheme? 'var(--blackShadow)': 'var(--boxShadow)'}}/> Redesigned the Uber and StarBucks website with more imressive features using figma and photoshop. Follow for more aesthetic designs on figma.</a></p></span>
            </SwiperSlide>
            <SwiperSlide>
            <span> <p> 
            <a href="https://sih.gov.in/" target="_blank">
              <img src={Isro} alt="" style={{boxShadow: props.currTheme? 'var(--blackShadow)': 'var(--boxShadow)'}}/> <br/> Creating History by Introducing Asteroid Mining in India. ISRO Project 'Mission Kalam' for discovering new Objects using image and feature extraction in SIH 2022.</a></p></span>
            </SwiperSlide>
            <SwiperSlide>
            <span> <p>
            <a href="https://github.com/vishxwas13/BharatIndia/" target="_blank"> 
               <img src={Bharat} style={{boxShadow: props.currTheme? 'var(--blackShadow)': 'var(--boxShadow)'}}/> An Indian daily use app for live news, memes, and more. BharatIndia app is built using api like newsapi.org and reddit memes api.</a> </p></span>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio
