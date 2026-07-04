import React from "react";
import style from "./Badge.module.css";

const Badge = ({ text, color = "gray" }) => {
  return (
    <div className={`${style.badge} ${style[color] || style.gray}`}>
      {text}
    </div>
  );
};

export default Badge;
