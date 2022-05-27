import React from 'react';
import styles from './Spinner.module.scss';


const Spinner = () => {
  return (
    <div className={styles.spinner_block}>
      <h2>Загрузка данных</h2>
      <div className={[styles.spinner, styles.spinner_1].join(' ')}></div>
    </div>
  )
}

export default Spinner