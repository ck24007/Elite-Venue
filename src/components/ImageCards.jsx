import React from 'react'
import style from "./ImageCards.module.css"
const ImageCards = ({ image, title, description }) => {
  return (
    <div className={style.card}>
         <img
        src={image}
        alt={title}
        className={style.image}
      />
      <div className={style.overlay}></div>
      <div className={style.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div> 
  )
}

export default ImageCards
