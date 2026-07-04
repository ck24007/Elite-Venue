import React from 'react'
import style from "./ContactUs.module.css";
const ContactUs = () => {
  return (
    <div>
      <div className={style.contact}>
      <h1 className={style.heading}>Contact Us</h1>
      <div className={style.contactContainer}>

        {/* LEFT : Info */}
        <div className={style.leftContent}>
          <p className={style.subText}>
            Have questions or want to book your stay?  
            We’re here to help you.
          </p>

          <div className={style.info}>
            <p><strong>📍 Address:</strong> The Elite Venue PG, Bangalore</p>
            <p><strong>📞 Phone:</strong> +91 98765 43210</p>
            <p><strong>✉️ Email:</strong> support@elitevenuepg.com</p>
          </div>
        </div>

        {/* RIGHT : Form */}
        <div className={style.rightForm}>
          <form className={style.form}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Your Message" rows="4" />
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </div>
    </div>
  )
}

export default ContactUs
