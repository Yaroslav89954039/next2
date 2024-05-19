"use client";
import Styles from "./Header.module.css";
import { useState } from "react";
import Link from "next/link";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { AuthForm } from "../AuthForm/AuthForm";
import { usePathname } from "next/navigation"
import { useStore } from "@/app/store/app-store";



export const Header = () => {
  const [popupIsOpened, setPopupIsOpened] = useState(false)
  const authContext = useStore();

const openPopup = () => {
  setPopupIsOpened(true)
}
const closePopup = () => {
  setPopupIsOpened(false)
}

const pathname = usePathname()
const handleLogout = () => {
  authContext.logout(); // Метод logout из контекста
};



    return (
      <header className="header">
        <Link href="/" className="logo">
          <img className="logo__image" src="./images/logo.svg" alt="Логотип Pindie" />
        </Link>
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <Link href="/new" className={`${Styles["menu__link"]} ${pathname === "/new" ? Styles["menu__link_active"] : ""
  }`}
  >Новинки</Link>
            </li>
            <li className="menu__item">
            <Link href="/popular" className={`${Styles["menu__link"]} ${pathname === "/popular" ? Styles["menu__link_active"] : ""
  }`}
  >Популярные</Link>
            </li>
            <li className="menu__item">
            <Link href="/shooters" className={`${Styles["menu__link"]} ${pathname === "/shooters" ? Styles["menu__link_active"] : ""
  }`}>Шутеры</Link>
            </li>
            <li className="menu__item">
            <Link href="/runners" className={`${Styles["menu__link"]} ${pathname === "/runners" ? Styles["menu__link_active"] : ""
  }`}>Ранеры</Link>
            </li>
            <li className="menu__item"> 
            <Link href="/pixel-games" className={`${Styles["menu__link"]} ${pathname === "/pixel-games" ? Styles["menu__link_active"] : ""
  }`}>Пиксельные</Link>
            </li>
            <li className="menu__item">
            <Link href="/tds" className={`${Styles["menu__link"]} ${pathname === "/tds" ? Styles["menu__link_active"] : ""
  }`}>TDS</Link>
            </li>
          </ul>
          <div className="auth">
            {authContext.isAuth ? (
            <button className="auth__button" onClick={handleLogout}>Выйти</button>
            ) : (
              <button className="auth__button" onClick={openPopup}>Войти</button>
            )}
          </div>
        </nav>
        <Overlay popupIsOpened={popupIsOpened} closePopup={closePopup}/>
      <Popup popupIsOpened={popupIsOpened} closePopup={closePopup}>
          <AuthForm close={closePopup}/>
      </Popup>
      </header> 
    )
  }