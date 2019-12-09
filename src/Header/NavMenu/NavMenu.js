import React from 'react';
import styles from './navMenu.module.css'

function NavMenu() {
    return (
        <div className={styles.navMenu}>
            <a href=''>Главная</a>
            <a href=''>Скиллы</a>
            <a href=''>Проекты</a>
            <a href=''>Контакты</a>
        </div>
    );
}

export default NavMenu;