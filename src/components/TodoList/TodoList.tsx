import React from 'react';

import { ITodo } from '../../types/types';
import Todo from '../Todo/Todo';

interface TodoListProps {
  userId: number;
  todos: ITodo[];
}

const TodoList: React.FC<TodoListProps> = ({ userId, todos }) => {
  return (
    <div>
      <h1>Задачи пользователя</h1>
      {todos.map(todo => (userId == todo.userId ? <Todo todo={todo} key={todo.id} /> : ''))}
    </div>
  );
};

export default TodoList;
