/* projects.jsx Aziz Syed 301322427 May 18th 2024*/

import React from 'react';
import Portfolio from '../src/portfolioPic.png';
import BugSmaherGame from '../src/bugSmasherGame.png';
import ReviewSystem from '../src/reviewSys.png';

export default function Projects(){
  return (
    <>
      <div id="wrapper">

        <h1 id="pageTitle">Some of the <span id="highlight">Projects</span> I have done:</h1>

        <div class="grid">

          <div>
            <h1>
              1. My Portfolio
              <br/>
              
            </h1>

            <h2 id="projects-desc">
                This Website acts as my <span id="highlight">Portfolio</span>.
                <br/>
                This was a Solo project I <span id="highlight">designed</span> and <span id="highlight">implemented </span> 
                a portfolio website to <span id="highlight">showcase</span> my projects and <span id="highlight">skills</span>.
            </h2>

          </div>

          <img src={Portfolio} alt="proj1" id="portfolio"/>

        </div>


        <br/>

        <div class="grid">

          
            
          <div id="Bug">
            <h1>
              2. Bug Smasher
              <br/>
            </h1>

            <h2 id="projects-desc">
            I <span id="highlight">developed</span> a bug smasher web game, handling <span id="highlight">concept</span>, coding, and <span id="highlight">design</span>. 
            The result was a <span id="highlight">smooth</span>, engaging game that showcased my <span id="highlight">skills</span> in <span id="highlight">JavaScript</span>,
            <span id="highlight"> HTML5</span>, and <span id="highlight">CSS3</span>.
            </h2>

          </div>

          <img src={BugSmaherGame} alt="proj2" id="portfolio"/>

        </div>

        <br/>
        <br/>

        <div class="grid">

          <div>
            <h1>
              3. Review System
              <br/>
              
            </h1>

            <h2 id="projects-desc">
                I created a College Professor <span id="highlight"> review system</span>, handling all <span id="highlight"> aspects</span>. 
                The result was a <span id="highlight"> user-friendly</span> platform for rating and <span id="highlight"> reviewing</span> professors, 
                <span id="highlight"> showcasing</span> my web development <span id="highlight"> skills</span>.
            </h2>

          </div>

          <img src={ReviewSystem} alt="proj3" id="portfolio"/>

        </div>
     

      </div>
    
    
    </>
  )
}
