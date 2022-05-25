import React from 'react';
import styles from './Sort.module.scss';

interface SortProps {
  filterByCity: () => void;
  filterByCompany: () => void;
}

const Sort: React.FC<SortProps> = ({ filterByCity, filterByCompany }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Сортировка</h2>
      <button className={styles.sortBtn} onClick={() => filterByCity()}>
        по городу
      </button>
      <button className={styles.sortBtn} onClick={() => filterByCompany()}>
        по компании
      </button>
    </div>
  );
};

export default Sort;
