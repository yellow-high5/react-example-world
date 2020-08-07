import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';

import { TodoStoreContext } from '../../store/TodoStore';

export function TodoInput() {
  const [input, changeText] = useState('');

  const {
    state: { list, id_counter },
    dispatch,
  } = useContext(TodoStoreContext);

  const addTask = () => {
    if (!input) {
      return;
    }
    list.push({ key: id_counter, done: false, title: input });
    dispatch({ type: 'ADD_ITEM', payload: { list: list } });
    changeText('');
  };

  return (
    <form className="Todo-input">
      <TextField
        id="input-field"
        label="やること"
        variant="outlined"
        value={input}
        onChange={(e) => changeText(e.target.value)}
        size="small"
      />
      <Button
        id="item-add-button"
        variant="contained"
        color="primary"
        onClick={() => {
          addTask();
        }}
      >
        追加
      </Button>
    </form>
  );
}
