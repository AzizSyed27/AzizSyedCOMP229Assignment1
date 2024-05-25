/* about.jsx Aziz Syed 301322427 May 18th 2024*/

import React from 'react';
import Picture from '../src/sideShot.png';
import Resume from '../src/AzizSyedResume.pdf';



export default function About(){
  return (
    <>

    <div id="wrapper">
    
    <h1 id="pageTitle">More <span id="highlight">About Me</span>:</h1>

      <div class="grid">

        <img src={Picture} alt="picture" id="picture2" class="grid-item2"/>


        <h2 class="grid-item1">
          Hello, My name is <span id="highlight">Aziz Syed</span>. 
          <br/> 
          I am currently enrolled in the  

          <span id="highlight"> Software Engineering and <br/> Technology</span> program <br/>at &nbsp; 
          
          <span id="college"><span id="college1">CENTENNIAL</span> <span id="college2">COLLEGE</span></span>.
          <br/> 
          <br/> 
          At <span id="college"><span id="college1">CENTENNIAL</span></span>, I have acquired many <span id="highlight">valuable </span> 
          programming <span id="highlight">skills</span> that would effectively <span id="highlight">transfer</span> over to real <span id="highlight">workspaces</span>.
          <br/> 

        </h2>

      </div>

      <div class="grid">

        <h2 class="grid-item1">
        I enjoy playing <span id="highlight">sports</span>, video <span id="highlight">games</span>, and working on <span id="highlight">cars</span> in my spare time. My passion for <span id="highlight">technology</span> and <span id="highlight">problem-solving</span> drives me to excel <span id="highlight">academically</span> while maintaining a <span id="highlight">balanced</span> lifestyle.
        Want to see my <span id="highlight">Resume</span>? Click <a href={Resume} target='_blank' id="linkAbout">Here</a>.
        </h2>


      </div>
      
    </div>
    </>
  )
  
}
