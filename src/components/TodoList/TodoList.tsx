import React from 'react';

import { ITodo } from '../../types/types';
import Todo from '../Todo/Todo';

interface TodoListProps {
  todos: ITodo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      <h1>Задачи пользователя</h1>
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
