import React from 'react';
import styles from './slogan.module.css'


function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.slogan_block}>
                <div className={styles.my_slogan}>Рассматриваю варианты удаленной работы</div>
                <div className={styles.button_block}>
                    <button>Нанять меня</button>
                </div>
            </div>

        </div>
    );
}

export default Slogan;