import React from 'react';
import s from './main.module.css';

function Main() {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.greeting}>
                    <span>Привет!</span>
                    <span>Я Валентина <span>Антипова</span></span>
                    <h1>Я front-end разработчик</h1>
                </div>
                <div className={s.photo_block}>
                <img src='#' className={s.my_photo} alt=''/>
                <span className={s.frame}></span>
                </div>
            </div>
        </div>
    );
}

export default Main;
