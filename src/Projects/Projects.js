import React from 'react';
import styles from './projects.module.css'
import MyWork from "./MyWork/MyWork";


function Projects() {
    return (
        <div className={styles.projects}>
            <div className={styles.my_works_block}>
                <span>Мои работы</span>
                <div className={styles.my_works}>
                    <MyWork />
                    <MyWork />
                </div>
            </div>
        </div>
    );
}

export default Projects;