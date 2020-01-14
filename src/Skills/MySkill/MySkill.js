import React from 'react';
import styles from './my_skill.module.css'


function MySkill() {
    return (
        <div className={styles.skill}>
            <div className={styles.block_skill}>
                <div className={styles.icon}>

                </div>
                <div>React</div>
            </div>
            <div className={styles.description_skill}>
                Подробное описание навыка
            </div>
        </div>
    );
}

export default MySkill;