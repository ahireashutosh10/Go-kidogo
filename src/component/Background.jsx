import React from 'react';
import styles from './Background.module.css'; // Import CSS module

const Background = () => {
  return (
    <div className={styles['background-container']}>
      <div className={styles.content}>
        <h1>Welcome to My Website</h1>
        <p>Creating smooth wave designs with React is easy!</p>
      </div>

      {/* Wave Animations */}
      <div className={styles['wave-container']}>
        <div className={`${styles['wave']} ${styles['wave1']}`}></div>
        <div className={`${styles['wave']} ${styles['wave2']}`}></div>
        <div className={`${styles['wave']} ${styles['wave3']}`}></div>
      </div>
    </div>
  );
};

export default Background;