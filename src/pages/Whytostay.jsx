import React from 'react'
import ImageCards from '../components/ImageCards'
import style from "./Home.module.css"
import Badge from '../components/Badge'
const Whytostay = () => {
       const cards = [
        {
          image: "/Home_bg.jpg",
          title: "Luxury Rooms",
          description: "AC, WiFi & Fully Furnished",
        },
        {
          image: "/HomeImg1.jpg",
          title: "Healthy Food",
          description: "Fresh home-style meals",
        },
        {
          image: "/Home_bg.jpg",
          title: "24x7 Security",
          description: "CCTV & Secure Entry",
        },
        {
          image: "/HomeImg1.jpg",
          title: "Prime Location",
          description: "Near Metro & Offices",
        },
      ]
  return (
    <div className={style.Whycontainer}>
    <div style={{textAlign:"center"}}>
    </div>
      <h2 className={style.heading}>Why Choose Elite PG</h2>

      <div className={style.grid}>
        {cards.map((card, index) => (
          <ImageCards key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default Whytostay
