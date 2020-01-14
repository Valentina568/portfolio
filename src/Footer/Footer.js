import React from 'react';
import styles from './footer.module.css'
import SocialNetwork from "./SocialNetwork/SocialNetwork";


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_block}>
                <div>Антипова Валентина</div>
                <SocialNetwork />
                <div>2020 Все права защищены</div>

            </div>

        </div>
    );
}

export default Footer;