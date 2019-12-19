import React from 'react';
import styles from './contacts.module.css'


function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.contact_block}>
                <div>Контакты</div>
                <div className={styles.form_block}>
                    <div className={styles.form}>
                        <input className={styles.input}/>
                        <input className={styles.input}/>
                        <textarea className={styles.textarea}/>
                    </div>
                </div>
                <div>
                    <button className={styles.button}>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;