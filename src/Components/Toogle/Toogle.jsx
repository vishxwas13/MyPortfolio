import React, { useState } from 'react'
import './Toogle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
function Toogle(props) {
    const [Theme,setTheme] = useState(true);
    function clickEvent(){
        if(Theme) setTheme(false)
        else setTheme(true)
        props.getProp(Theme)
    }
  return (
    <div className="toogle hire-me" onClick={clickEvent}>
        <Sun/>
        <Moon/>
        <div className="toogle-btn" style={{left: Theme? '5px': '2rem',transition: 'left 0.6s'}}></div>
    </div>
  )
}
export default Toogle
