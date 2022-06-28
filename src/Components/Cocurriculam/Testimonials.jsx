import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import sih from '../../img/myimg.jpg'
import astro from '../../img/astro.jpg'
import swim from '../../img/swim.jpg'
import piano from '../../img/piano.jpg'
import taj from '../../img/taj2.jpeg'
import { EffectCube, Pagination } from 'swiper'
import "swiper/css/effect-cube";

function Testimonials(props) {
    const arrayTest = [
        {
            img: sih,
            text: "Participating in Smart India Hackathon 2022 organised by Government of India for solving real-world problem's solution with price worth 1 Lacs. Top 5 teams under selection process. "
        },{
            img: taj,
            text: "Acting and Dancing skills since birth, Winner of Taj Mahotsav 2017 in Dance/Act, Taj Mahotsav is an annual 10-day event at Shilpgram in Agra, India."

        },{
            img: swim,
            text: "I am a person with Thalassophobia, To overcome this I learned swimming two years ago. POV: I still have Thalassophobia"

        }  
        ,{
            img: piano,
            text: "I love to play Keyboard in my free time, I have been playing the piano since 7 years, It sharpens my concentration and steaches me perseverance, It helps me stay calm and learn discipline."
        }
        ,{
            img: astro,
            text: "Hard core Astrophile, Everyday I take my time to go up to the roof without my phone and look at those stars Cause that's the only known way to cure my stress and make my perspective more wider."

        }
    ]
  return (
    <div className="testimonials" id='Testimonials'>
        <div className="heading-test">
             <span>Never forget the </span>
             <span>Extra-curricular </span>
             <span>activities</span>
             
        </div>
        
        <Swiper modules={[Pagination,EffectCube]} effect={"cube"} slidesPerView={1} pagination={{clickable:true}} 
        cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          loop={true} data-aos="zoom-in"
        >
            {
                arrayTest.map((getValue,getIndex)=>{
                    return(
                        <SwiperSlide>
                            <div className="slider-test" style={{boxShadow: props.currTheme? 'var(--blackShadow)': 'var(--boxShadow)'}}>
                            <img src={getValue.img} alt="" />
                            <span style={{color: props.currTheme? 'var(--gray)':'grey'}}>{getValue.text}</span>
                        </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </div>
  )
}

export default Testimonials
