import React, { useState } from 'react'
import style from "./ContactUs.module.css";
const ContactUs = () => {
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")

  const [phone, setPhone]=useState("")

  const [msg, setMsg]=useState("")
  const ownerNumber="919563826000"
  const handleContinue=(e)=>{
    e.preventDefault()


    const message=`
    Name:${name}
    Mobile:${phone}
    Email:${email}
    Message:${msg}`

    const whatsappUrl = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    setTimeout(() => {
      setName("")
      setEmail("")
      setPhone("")
      setMsg("")
    }, 1000)
  }

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
            <p><strong>📍 Address:</strong> The Elite Venue PG, Gurugram</p>
            <p><strong>📞 Phone:</strong> +91 9563826000</p>
            <p><strong>✉️ Email:</strong> theelitevenuepg@gmail.com</p>
          </div>
        </div>

        {/* RIGHT : Form */}
        <div className={style.rightForm}>
          <form className={style.form} onSubmit={handleContinue}>
            <input type="text" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="email" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="tel" placeholder="Phone Number" value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
            <textarea placeholder="Your Message" value={msg} rows="4" onChange={(e)=>setMsg(e.target.value)} />
            <button type="submit" disabled={!name || !email || !phone || !msg}>Send Message</button>
          </form>
        </div>

      </div>
    </div>
    </div>
  )
}

export default ContactUs
