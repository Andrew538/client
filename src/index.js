import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import UserStore from './components/store/UserStore';
import GuaranteeStore from './components/store/GuaranteeStore';
import Home from './components/pages/Home/Home';
// import AllUserStore from './components/store/AllUserStore';


export const Context = createContext(null)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Context.Provider value={{ 
      users: new UserStore(),
      status: new GuaranteeStore(),
      examination: new GuaranteeStore(),
      examinationworks: new GuaranteeStore(),
      examinationarhive: new GuaranteeStore(),
      examinationready: new GuaranteeStore(),
      examinationcharger: new GuaranteeStore(),

      }}>
      <App />

      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

