import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from './Components/NavBar/NavBar'
import Intro from './Components/Intro/Intro'
import Services from './Components/Services/Services'
import Experience from './Components/Experience/Experience'
import Works from './Components/Works/Works'
import Portfolio from './Components/Portfolio/Portfolio'
import Cocurriculam from './Components/Cocurriculam/Testimonials'
import Contacts from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
function App() {
  const [myTheme,setTheme] = useState(false);
  function getTheme(Theme){
      setTheme(Theme)
      console.log(myTheme)
  }
  return (
    <div className="App" style={{
      background:myTheme? '#242D49':'revert',
      color: myTheme? 'white': 'revert'
    }}>
     <NavBar getProp={getTheme} currTheme={myTheme}/>
     <Intro currTheme={myTheme}/>
     <Services currTheme={myTheme}/>
     <Experience currTheme={myTheme}/>
     <Works currTheme={myTheme}/>
     <Portfolio currTheme={myTheme}/>
     <Cocurriculam currTheme={myTheme}/>
     <Contacts currTheme={myTheme}/>
     <Footer currTheme={myTheme}/>
    </div>
  );
}
AOS.init();
export default App;
