"use client"
import { useState, useEffect } from 'react';
import Styles from './AuthForm.module.css';
import { authorize } from '@/app/api/api-utils';
import { endpoints } from '@/app/api/config';
import { isResponseOk } from '@/app/api/api-utils';
import { useStore } from "@/app/store/app-store";

export const AuthForm = (props) => {
  const [authData, setAuthData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState({ status: null, text: null });
  const authContext = useStore();


  const handleInput = (e) => {
  setAuthData({ ...authData, [e.target.name]: e.target.value });
};
  
  
  

  const handleSubmit = async (e) => {
    /* Предотвращаем стандартное поведение формы */
    e.preventDefault();
    /* Вызываем функцию authorize с данными из формы */
    const userData = await authorize(endpoints.auth, authData);
    /* Проверяем ответ сервера с помощью isResponseOk */
    if (isResponseOk(userData)) {
       /* Записываем в стейт данные пользователя с сервера */
       authContext.login({...userData, id: userData._id}, userData.jwt);
       /* Записываем сообщение об авторизации */
    setMessage({ status: "success", text: "Вы авторизовались!" });
    } else {
       /* Записываем сообщение об ошибке */
    setMessage({ status: "error", text: "Неверные почта или пароль" });
    }
    }

    
   

    useEffect(() => {
      let timer; 
      if (authContext.user) {
        timer = setTimeout(() => {
                /* В props close лежит функция закрытия попапа */
          props.close();
        }, 1000);
      }
      return () => clearTimeout(timer);
    }, [authContext.user]);

  

  return (
  
  
    <form onSubmit={handleSubmit} className={Styles['form']}>
      <h2 className={Styles['form__title']}>Авторизация</h2>
      <div className={Styles['form__fields']}>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Email</span>
          <input
  onInput={handleInput}
  className={Styles["form__field-input"]}
  name="email"
  type="email"
  placeholder="hello@world.com"
/>

        </label>
        <label className={Styles['form__field']}>
          <span className={Styles['form__field-title']}>Пароль</span>
          <input onInput={handleInput} className={Styles['form__field-input']} name="password" type="password" placeholder='***********'/>
 
        </label>
      </div>
      {message.status && (
    <p className={Styles["form__message"]}>{message.text}</p>
)}
      <div className={Styles['form__actions']}>
        <button className={Styles['form__reset']} type="reset">Очистить</button>
        <button className={Styles['form__submit']} type="submit">Войти</button>
      </div>
      {message.status && (
    <p className={Styles["form__message"]}>{message.text}</p>
)}
    </form>
  ) 
};

