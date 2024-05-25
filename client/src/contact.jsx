/* contact.jsx Aziz Syed 301322427 May 18th 2024*/


import React from 'react';
import InstaLogo from '../src/instaLogo.png';
import LinkedInLogo from '../src/linkedInLogo.png';
import FaceBooklogo from '../src/faceLogo.png';


export default function Contact(){
  return (
    <>
      <div id="wrapper">

      <h1 id="pageTitle">Interested in my work? <span id="highlight">Contact Me</span>!</h1>

        <div class="grid">

          <div>
            <form action="mailto:azizsyed2016@gmail.com" method="POST" enctype="text/plain" id="contactForm">

              <label htmlFor="Name">Full Name</label><br/>
              <input type="text" name="Name" required/><br/>

              <label htmlFor="Phone Number">Phone</label><br/>
              <input type="number" name="Phone Number" maxlength="10" required/><br/>

              <label htmlFor="Email">E-mail</label><br/>
              <input type="text" name="Email" required/><br/>

              <label htmlFor="Message">Message</label><br/>
              <textarea name="Message" rows="3" cols="24"></textarea><br/>

              <input type="submit"/>

              <input type="reset"/>

            </form>

          </div>

          <div id="contact2">
            <h2 id="contactTitle">Contact</h2>
            <h3 id="contactItem">Aziz Syed</h3>
            <h3 id="contactItem">647-539-8171</h3>
            <h3 id="contactItem">azizsyed2016@gmail.com</h3><br/>

            <h2 id="contactTitle">Based in</h2>
            <h3 id="contactItem">Scarborough,</h3>
            <h3 id="contactItem">Ontario</h3><br/>

            <div id="logos">
              <a href="https://www.instagram.com/" target="_blank"><img src={InstaLogo} alt="instaLogo" id="instaLogo"/></a>
              <a href="https://www.facebook.com/" target="_blank"><img src={FaceBooklogo} alt="faceBookLogo" id="faceLogo"/></a>
              <a href="https://ca.linkedin.com/" target="_blank"><img src={LinkedInLogo} alt="linkedInLogo" id="linkLogo"/></a>
            </div>

          </div>


        </div>
     

      </div>
    
    
    </>
  )
}
