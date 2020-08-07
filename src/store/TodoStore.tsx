import React, { createContext, ReactNode, useReducer } from 'react';

export enum Filter {
  ALL,
  COMPLETE,
  INCOMPLETE,
}

type State = {
  list: { key: number; done: boolean; title: string }[];
  filter: Filter;
};

const initialState: any = {
  list: [
    { key: 1, done: false, title: 'ポケモン図鑑をもらう' },
    { key: 2, done: false, title: 'オーキド博士に会う' },
    { key: 3, done: false, title: '野生のポケモンを捕まえる' },
    { key: 4, done: false, title: '自転車を買う' },
  ],
  filter: Filter.ALL,
  key_counter: 5,
};

export const TodoStoreContext: any = createContext(initialState);

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        list: action.payload.list,
        key_counter: state.key_counter + 1,
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        list: action.payload.list,
      };
    case 'TOGGLE_ITEM':
      return {
        ...state,
        list: action.payload.list,
      };
    case 'FILTER_ALL':
      return {
        ...state,
        filter: Filter.ALL,
      };
    case 'FILTER_COMPLETE':
      return {
        ...state,
        filter: Filter.COMPLETE,
      };
    case 'FILTER_INCOMPLETE':
      return {
        ...state,
        filter: Filter.INCOMPLETE,
      };
    default:
      return state;
  }
};

type Props = {
  children: ReactNode;
};

export const TodoStoreContainer = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoStoreContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoStoreContext.Provider>
  );
};
