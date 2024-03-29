import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from "miragejs";
import { transactionsData } from './services/mockDataRepository';
import { App } from './App';

createServer({

  models: {
    transaction: Model,  
  },
  seeds(server) {
    server.db.loadData({
      transactions: transactionsData
    })
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => this.schema.all("transaction"))
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })

  }

})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);