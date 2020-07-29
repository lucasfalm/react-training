
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/react-fontawesome'

import React from 'react';
import './App.css';
import Todo from '../todo/todo'
import About from '../about/about'
import Menu from '../template/menu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Todo />
        <About />
      </header>
    </div>
  );
}

export default App;
