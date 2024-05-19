"use client"
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

// Импорты для работы с глобальным состоянием
import { useEffect } from "react";
import { useStore } from './store/app-store';

export const App = (props) => {
    const store = useStore();

    useEffect(() => {
        /* 
          Проверяем, авторизован ли пользователь, 
          функцией checkAuth из хранилища 
        */
          store.checkAuth();
        }, []);
return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  ) 
}; 
