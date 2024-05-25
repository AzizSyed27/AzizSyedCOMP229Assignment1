/* services.jsx Aziz Syed 301322427 May 18th 2024*/

import React from 'react';
import CSharpLogo from '../src/cSharpLogo.png';
import CLogo from '../src/C_Logo.png';
import JavaLogo from '../src/JavaLogo.png';
import HTMLLogo from '../src/HTMLLogo.png';
import CSSLogo from '../src/CSS3_logo.png';
import PythonLogo from '../src/pythonLogo.png';
import SQLLogo from '../src/sqlLogo.png';
import JavaScriptLogo from '../src/javaScriptLogo.png';
import LinuxLogo from '../src/linuxLogo.png';
import ReactLogo from '../src/reactLogo.png';


export default function Services(){
  return (
    <>
      <div id="wrapper">


        <h1 id="pageTitle">Some of the <span id="highlight">Services</span> I can provide:</h1>
        
        <div class="grid2">

        <div class="grid-item3">
          <h2 id="serviceTitle"><img src={CLogo} alt="c" id="leftLogo"/>  C / C# / C++  <img src={CSharpLogo} alt="c#" id="rightLogo"/></h2>

          <h2 id="service">
            <span id="highlight2">Proficient</span> in developing <span id="highlight2">high-performance </span> 
            applications with robust <span id="highlight2">system-level</span> programming.
          </h2>
        </div>

        <div class="grid-item3">
          <h2 id="serviceTitle"><img src={JavaLogo} alt="javaLogo" id="singleLogo"/>Java</h2>

          <h2 id="service">
            <span id="highlight2">Skilled</span> in building scalable and <span id="highlight2">secure </span>
            enterprise-level applications with <span id="highlight2">Java</span>.
          </h2>
        </div>

        <div class="grid-item3">
          <h2 id="serviceTitle"><img src={HTMLLogo} alt="htmlLogo" id="leftLogo"/>  HTML5 / CSS3  <img src={CSSLogo} alt="cssLogo" id="rightLogo"/></h2>

          <h2 id="service">
            <span id="highlight2">Expert</span> in crafting <span id="highlight2">responsive </span> 
            and visually <span id="highlight2">appealing</span> web <span id="highlight2">interfaces</span> using <span id="highlight2">HTML5 </span> 
            and <span id="highlight2">CSS3</span>.
          </h2>
        </div>  

        <div class="grid-item3">
          <h2 id="serviceTitle"><img src={PythonLogo} alt="pythonLogo" id="singleLogo"/>Python</h2>
          <h2 id="service">
          <span id="highlight2">Experienced</span> in writing <span id="highlight2">efficient</span>, readable, and <span id="highlight2">versatile </span>
           code for <span id="highlight2">web development</span> and <span id="highlight2">data analysis</span>.
          </h2>
        </div>

        <div class="grid-item3">
          <h2 id="serviceTitle"><img src={SQLLogo} alt="sqlLogo" id="singleLogo"/>SQL</h2>
          <h2 id="service">
            <span id="highlight2">Adept</span> at designing and <span id="highlight2">managing</span> relational <span id="highlight2">databases </span>
            to ensure data <span id="highlight2">integrity</span> and <span id="highlight2">efficiency</span>.
          </h2>
        </div>

        <div class="grid-item3">
          <h2 id="serviceTitle"><img src={JavaScriptLogo} alt="javaScriptLogo" id="singleLogo"/>JavaScript</h2>
          <h2 id="service">
            <span id="highlight2">Proficient</span> in creating <span id="highlight2">dynamic </span> 
            and <span id="highlight2">interactive</span> web <span id="highlight2">applications</span> with <span id="highlight2">JavaScript</span>.
          </h2>
        </div>  

        <div class="grid-item3">
          <h2 id="serviceTitle"><img src={LinuxLogo} alt="linuxLogo" id="singleLogo"/>Unix / Linux</h2>
          <h2 id="service">
            <span id="highlight2">Experienced</span> in using <span id="highlight2">Unix/Linux terminal </span> 
            for system <span id="highlight2">administration</span> and <span id="highlight2">automation</span> tasks.
          </h2>
        </div>  

        <div class="grid-item3">
          <h2 id="serviceTitle"><img src={ReactLogo} alt="linuxLogo" id="singleLogo"/>React</h2>
          <h2 id="service">
            <span id="highlight2">Skilled</span> in <span id="highlight2">developing </span> 
            modern, <span id="highlight2">user-friendly</span> front-end <span id="highlight2">applications </span> 
            with <span id="highlight2">React</span>.
          </h2>
        </div>  

        </div>
     

      </div>
    
    
    </>
  )
}
