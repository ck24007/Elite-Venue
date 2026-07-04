import React from 'react'
import style from "./Facilities.module.css";

export default function Facilities() {
  const amenities = [
    { name: "Outdoor Gym", icon: "./gym.png" },
    { name: "24/7 CCTV Surveillance", icon: "./cctv.png" },
    { name: "Power Backup", icon: "./power.png" },
    { name: "24/7 Clean Drinking Water Supply", icon: "./drinking-water.png" },
    { name: "Fully Air-Conditioned", icon: "./ac.png" },
    { name: "Sleepwell Mattresses", icon: "./bed.png" },
    { name: "Near Market Area", icon: "./market.png" },
    { name: "Washing Machine", icon: "./washing-machine.png" },
    { name: "High-Speed Wi-Fi", icon: "./wifi.png" },
    { name: "Lift Facility", icon: "./lift.png" },
    { name: "Support (9 AM – 9 PM)", icon: "./support.png" },
    { name: "Parking Facility", icon: "./parking.png" },
  ]
  return (
    <section className={style.amenitiesSectio}>
      <h1 className={style.heading}>Facilities & Amenities</h1>
      <p className={style.subtitle}>
        Designed for comfort, safety, and premium living
      </p>

      <div className={style.amenitiesGrid}>
        {amenities.map((item, index) => (
          <div className={style.amenityCard} key={index}>
            <img src={item.icon} alt={item.name} style={{width:"50px", height:"50px", background:"none"}} />
            <span style={{background:"none"}}>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}