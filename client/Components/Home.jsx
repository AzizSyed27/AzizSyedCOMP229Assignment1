/* Home.jsx Aziz Syed 301322427 May 18th 2024*/

import React from 'react';
import Picture from '../src/aziz_picture-gray.png';
import ClipArt from '../src/coding_clip_art.png';
import { Link } from 'react-router-dom';
import About from '../src/about'


export default function Home(){
  return (
    <>

    <div id="wrapper">
    
      <div class="grid">

        <h2 class="grid-item1">
          Hello, My name is <span id="highlight">Aziz Syed</span>, 
          <br/> 
          a <span id="highlight">Software Engineer</span> at 
          <br/> 
          <span id="college"><span id="college1">CENTENNIAL</span> <span id="college2">COLLEGE</span></span>.
          <br/> 
          I am always in pursuit of 
          <br/>
          <span id="highlight">knowledge</span> and <span id="highlight">experiences</span>.
          <br/> 
          <br/>
          I am a: 
          <ul>
            <li>Programmer</li>
            <li>Developer</li>
            <li>Designer</li>
          </ul>

        </h2>

        <img src={Picture} alt="picture" id="picture" class="grid-item2"/>
        
      </div>

      <h1 id="goal">My Goal:</h1>

      <div class="grid">
        <img src={ClipArt} alt="clipArt"/>

        <h2 class="grid-item1">
        <br/>
          My goal is to <span id="highlight">innovate</span> and create <span id="highlight">impactful</span> software, 
          uphold <span id="highlight">ethical</span> standards,
          and address real-world <span id="highlight">challenges</span> through continuous <span id="highlight">learning</span>.
          <br/>
          Learn More <span id="highlight">About Me </span><Link to="/about" id="linkAbout">Here</Link>.   

          </h2>

      </div>
      <br/>
      <br/>

    </div>
    </>
  )
  
}
