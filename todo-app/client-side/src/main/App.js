
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/react-fontawesome'

import React from 'react'
import Routes from './routes'
import Menu from '../template/menu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Routes />
      </header>
    </div>
  );
}

export default App;
