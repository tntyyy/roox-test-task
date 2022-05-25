import React from 'react';
import { ITodo } from '../../types/types';

import styles from './Todo.module.scss';

interface TodoProps {
  todo: ITodo;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  return (
    <div className={styles.wrapper}>
      <input type="checkbox" checked={todo.completed} />
      <h3>{todo.title}</h3>
    </div>
  );
};

export default Todo;
