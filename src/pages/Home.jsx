import React, { useEffect, useState } from 'react'
import style from "./Home.module.css"
const Home = () => {

    const EliteImages=[ "RoomImg.jpeg","BedRoomImg.jpeg"]
    const [index, setIndex]=useState(0)
    useEffect(()=>{

        const interval= setInterval(()=>{
            setIndex((prev)=>(prev+1)%EliteImages.length);
        },3000)
        return ()=> clearInterval(interval)
    },[])
  return (
    <div className={`${style.container} overflow-hidden relative`}>
    <div className={style.card}>
             <img
            src={EliteImages[index]}
            alt="home background"
            className={`${style.image} transition-all duration-700`}
          />
          <div className={style.overlay}></div>
          <div className={style.content}>
            <h3> THE ELITE VENUE</h3>
            <p> Comfort PG</p>
          </div>
        </div>
        </div>
  )
}

export default Home
