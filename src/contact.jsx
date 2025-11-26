// contact.jsx

import React from 'react';
import InstaLogo from '../src/media-logos/instaLogo.png';
import LinkedInLogo from '../src/media-logos/linkedInLogo.png';
import FaceBookLogo from '../src/media-logos/faceLogo.png';

export default function Contact() {
  return (
    <main className="container section">
      <header className="section-header">
        <h1 className="section-title">
          Let’s <span className="highlight">Connect</span>
        </h1>
        <p className="section-subtitle">
          If you’d like to discuss an opportunity, collaboration, or project, feel free to reach out
          by email, phone, or using the form below. I try to respond as quickly as possible.
        </p>
      </header>

      <div className="contact-grid">
        <section aria-label="Contact form" className="contact-form-card">
          <form
            action="mailto:azizsyed2016@gmail.com"
            method="POST"
            encType="text/plain"
            className="form"
          >
            <div className="form-field">
              <label htmlFor="fullName">Full name</label>
              <input id="fullName" name="Name" type="text" required />
            </div>

            <div className="form-field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="Phone" type="tel" maxLength="15" />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="Email" type="email" required />
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="Message" rows="4" />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
              <button type="reset" className="btn btn-ghost">
                Reset
              </button>
            </div>
          </form>
        </section>

        <section aria-label="Contact details" className="contact-details-card">
          <h2 className="contact-heading">Contact Details</h2>
          <p className="contact-line">Aziz Syed</p>
          <p className="contact-line">
            <a href="tel:+16475398171" className="link-plain">
              +1 (647) 539-8171
            </a>
          </p>
          <p className="contact-line">
            <a href="mailto:azizsyed2016@gmail.com" className="link-plain">
              azizsyed2016@gmail.com
            </a>
          </p>

          <div className="contact-spacer" />

          <h2 className="contact-heading">Location</h2>
          <p className="contact-line">Scarborough, Ontario, Canada</p>

          <div className="contact-spacer" />

          <h2 className="contact-heading">Online</h2>
          <div className="social-row">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <img src={InstaLogo} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <img src={FaceBookLogo} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://ca.linkedin.com/" target="_blank" rel="noreferrer">
              <img src={LinkedInLogo} alt="LinkedIn" className="social-icon" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
