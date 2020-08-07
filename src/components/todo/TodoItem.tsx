import { Checkbox, Fab } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import React, { useContext } from 'react';

import { TodoStoreContext } from '../../store/TodoStore';

type Props = {
  keyNumber: number;
  done: boolean;
  title: string;
};

export function TodoItem(props: Props) {
  const {
    state: { list },
    dispatch,
  } = useContext(TodoStoreContext);

  const toggleTask = (key: number) => {
    const update_list = list.concat();

    const target = list.find((item: any) => item.key === key);
    const index = list.indexOf(target);
    update_list.splice(index, 1, {
      key: target.key,
      done: !target.done,
      title: target.title,
    });

    dispatch({ type: 'TOGGLE_ITEM', payload: { list: update_list } });
  };

  const removeTask = (key: number) => {
    const update_list = list.concat();

    const target = list.find((item: any) => item.key === key);
    const index = list.indexOf(target);
    update_list.splice(index, 1);

    dispatch({ type: 'REMOVE_ITEM', payload: { list: update_list } });
  };

  return (
    <li
      key={props.keyNumber}
      className={props.done ? 'Todo-item-done' : 'Todo-item'}
    >
      <Checkbox
        checked={props.done}
        id="item-check-field"
        color="default"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        onClick={() => {
          toggleTask(props.keyNumber);
        }}
      />
      <span id="item-title-field">{props.title}</span>
      {props.done ? (
        <Fab
          id="item-delete-button"
          color="secondary"
          size="small"
          onClick={() => {
            removeTask(props.keyNumber);
          }}
        >
          <Delete />
        </Fab>
      ) : null}
    </li>
  );
}
