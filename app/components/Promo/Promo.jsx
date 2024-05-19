"use client";
import { useState, useEffect } from "react";




export const Promo = () => {
  const [codeIsVisible, setcodeIsVisible] = useState(false)
  const handleButtonClick = () => {
    !codeIsVisible && setcodeIsVisible(true)
  }

  useEffect(() => {
    let timeout;
    if (codeIsVisible) {
        timeout = setTimeout(() => {
          setcodeIsVisible(false);
        }, 5000);    
    }
    return () => {
        clearTimeout(timeout);
    };
}, [codeIsVisible]);

    return (
        <section className="promo">
        <div className="promo__description-block">
          <h2 className="promo__title">Твой промо-код</h2>
          <p className="promo__description">Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!</p>
          <button className="button promo__button" onClick={handleButtonClick}
          >
            {codeIsVisible ? (
              <span className={Styles["promo-code"]}>WEBTEENS10</span>
            ) : (
              "Получить код"
            )}
            </button>
      
        </div>
        <img src="./images/promo-illustration.svg" alt="Собака" className="promo__image"/>
      </section>  
    )
}
import Styles from "./Promo.module.css"
export function promo () {
return (
<div className= {Styles.title}>
<div className= {Styles.description}></div>
<div className= {Styles.image}></div>
<div className= {Styles.button}></div>
<div className= {Styles.code}></div>
  </div>
)
}

