import './App.css';

import React from 'react';

import { TodoApp } from './components/todo/TodoApp';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>React TODO App</span>
      </header>
      <div className="App-body">
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
