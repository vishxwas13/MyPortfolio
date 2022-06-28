import React from 'react'
import './Experience.css'
function Experience(props) {
  return (
    <div className="experience" id='Experience'>
      <a href="https://leetcode.com/Vishxwas/" target="_blank" data-aos="zoom-out">
          <div className="achievement circle-up">
            <div  className="circle" style={{
                color: props.currTheme? 'white':'black',
                background: props.currTheme? '#242D49' : 'white',
                // border: props.currTheme? '7px solid var(--blueCard)':'revert',
                cursor: 'pointer'
                }}>200+</div>
            <span>DSA</span>
            <span>LeetCode</span>
        </div>
        </a>
        <a href="" target="" data-aos="zoom-out">
            <div className="achievement circle-up" >
        <div className="circle" style={{
                color: props.currTheme? 'white':'black',
                background: props.currTheme? '#242D49' : 'white',
                // border: props.currTheme? '7px solid var(--blueCard)':'revert',
                cursor: 'pointer'
                }}>3 ⭐️</div>
                <span>1689 ranking</span>
            <span>CodeChef</span>
        </div>
        </a>
        <a href="https://www.interviewbit.com/profile/vishxwas" target="_blank" data-aos="zoom-out">
            <div className="achievement circle-down">
        <div className="circle" style={{
                color: props.currTheme? 'white':'black',
                background: props.currTheme? '#242D49' : 'white',
                // border: props.currTheme? '7px solid var(--blueCard)':'revert',
                cursor: 'pointer'
                }}>108+</div>            <span>Streak</span>
            <span>Interviewbit</span>
        </div>
        </a>
        <a href="https://www.hackerrank.com/_191500915" target="_blank" data-aos="zoom-out">
            <div className="achievement circle-down">
        <div className="circle" style={{
                color: props.currTheme? 'white':'black',
                background: props.currTheme? '#242D49' : 'white',
                // border: props.currTheme? '7px solid var(--blueCard)':'revert',
                cursor: 'pointer'
                }}>4+</div>            <span>Years</span>
            <span>Java Coding</span>
        </div>
        </a>
        </div>
  )
}

export default Experience
