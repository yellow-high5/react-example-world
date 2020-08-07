import { Button } from '@material-ui/core';
import React, { useContext } from 'react';

import { Filter, TodoStoreContext } from '../../store/TodoStore';

export function TodoFilter() {
  const {
    state: { filter },
    dispatch,
  } = useContext(TodoStoreContext);

  const filterAll = () => {
    dispatch({ type: 'FILTER_ALL' });
  };

  const filterComplete = () => {
    dispatch({ type: 'FILTER_COMPLETE' });
  };

  const filterIncomplete = () => {
    dispatch({ type: 'FILTER_INCOMPLETE' });
  };

  return (
    <div className="Todo-visible-group">
      <Button
        id="item-all-button"
        variant={filter === Filter.ALL ? 'contained' : 'outlined'}
        color="primary"
        onClick={() => filterAll()}
      >
        すべての項目
      </Button>

      <Button
        id="item-complete-button"
        variant={filter === Filter.COMPLETE ? 'contained' : 'outlined'}
        color="primary"
        onClick={() => filterComplete()}
      >
        完了項目
      </Button>
      <Button
        id="item-incomplete-button"
        variant={filter === Filter.INCOMPLETE ? 'contained' : 'outlined'}
        color="primary"
        onClick={() => filterIncomplete()}
      >
        未完了項目
      </Button>
    </div>
  );
}
