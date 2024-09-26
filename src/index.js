import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import UserStore from './components/store/UserStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Context.Provider value={{user: new UserStore()}}>
      <App />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

