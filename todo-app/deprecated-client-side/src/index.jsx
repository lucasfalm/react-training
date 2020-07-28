import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app.jsx'

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('app')
  );
  
  serviceWorker.unregister();