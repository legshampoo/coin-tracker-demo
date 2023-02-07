import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.createRoot(<App />, document.getElementById('root'));
const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)