import React from 'react';

import styles from './Input.module.scss';

interface InputProps {
  inputName: string;
  content: string | number;
  type: string;
  isDisabled: boolean;
}

const Input: React.FC<InputProps> = ({inputName, content, type, isDisabled}) => {
  return (
    <div className={styles.wrapper}>
      <p>{inputName}</p>
      <input type={type} defaultValue={content} disabled={isDisabled}/>
    </div>
  )
}

export default Input