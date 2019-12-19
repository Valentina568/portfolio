import React from 'react';
import styles from './myWork.module.css'


function MyWork() {
    return (
        <div className={styles.my_work}>
            <div className={styles.img_my_work}>
                <div className={styles.look}>Смотреть</div>
            </div>
            <div className={styles.description_my_work}>
                <div className={styles.description}>
                    <div className={styles.name_my_work}>Название проекта</div>
                    <div className={styles.short_description}>Краткое описание</div>
                </div>
            </div>
        </div>
    );
}

export default MyWork;