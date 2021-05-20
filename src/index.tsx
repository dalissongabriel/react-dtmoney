import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from "miragejs";
import { transactionsData } from './services/mockDataRepository';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => transactionsData)
  }

})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);