import React from 'react';

import { TodoStoreContainer } from '../../store/TodoStore';
import { TodoFilter } from './TodoFilter';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

export function TodoApp() {
  return (
    <div className="Todo-app">
      <TodoStoreContainer>
        <TodoInput />
        <TodoList />
        <TodoFilter />
      </TodoStoreContainer>
    </div>
  );
}
