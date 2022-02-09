import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Layout from './components/Layout.js'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
)
