import React from 'react'
import style from"./Home.module.css";
const AboutUs = () => {
  return (
    <div className={style.about}>
    <h1 className={style.heading}>About Us</h1>
      <div className={style.aboutContainer}>

        {/* LEFT: Content */}
        <div className={style.leftContent}>
          <p className={style.TitleText}>
            Choose The Elite Venue PG—where comfort meets class.
          </p>

          <p className={style.aboutparagraph}>
          Experience unmatched comfort and style at The Elite Venue PG, located in Gurugram’s prestigious Palam Vihar. Designed for young professionals, we offer modern living spaces with top amenities including tasty home-style food, 24/7 high-speed WiFi, housekeeping, and a secure environment for a seamless lifestyle. Open to both boys and girls, it’s your ultimate destination for elite living.
          </p>
          <p className={style.aboutparagraph}>
          If you're searching for the best PG near Sector-18, best PG near Sector-22, best PG near Udyog Vihar, or best PG near Maruti Udyog Limited, The Elite Venue PG is the perfect choice. Enjoy convenience, comfort, and connectivity—all in one premium location.
          </p>


        </div>

        {/* RIGHT: Image */}
        <div className={style.rightImage}>
        <div>
          <img src="./Home_bg.jpg" alt="About us" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs
