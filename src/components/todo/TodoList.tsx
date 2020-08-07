import React, { useContext } from 'react';

import { Filter, TodoStoreContext } from '../../store/TodoStore';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const {
    state: { list, filter },
  } = useContext(TodoStoreContext);

  const display = () => {
    switch (filter) {
      case Filter.ALL:
        return list;
      case Filter.COMPLETE:
        return list.filter((item: any) => item.done === true);
      case Filter.INCOMPLETE:
        return list.filter((item: any) => item.done === false);
    }
  };

  const filter_list = display();

  return (
    <ul className="Todo-list">
      {filter_list.map((item: any) => {
        return (
          <TodoItem
            key={item.key}
            keyNumber={item.key}
            title={item.title}
            done={item.done}
          />
        );
      })}
    </ul>
  );
}
