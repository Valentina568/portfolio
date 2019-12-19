import React from 'react';
import styles from './network.module.css'


function SocialNetwork() {
    return (
        <div className={styles.social_networks}>
            <div className={styles.network}></div>
            <div className={styles.network}></div>
            <div className={styles.network}></div>
            <div className={styles.network}></div>
        </div>

    );
}

export default SocialNetwork;