import React from 'react';
import styles from './skills.module.css'
import MySkill from "./MySkill/MySkill";


function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.my_skills_block}>
                <span>Мои скиллы</span>
                <div className={styles.my_skills}>
                    <MySkill />
                    <MySkill />
                    <MySkill />
                </div>
            </div>
        </div>
    );
}

export default Skills;