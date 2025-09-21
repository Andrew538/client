import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, } from 'react-router-dom'
import './index.css';
import App from './App';
import UserStore from './components/store/UserStore';
import GuaranteeStore from './components/store/GuaranteeStore';
import Home from './components/pages/Home/Home';
import { useAuth } from './components/hook/useAuth';
import { check } from './components/http/userAPI';
import DirectionStore from './components/store/DirectionStore';
// import AllUserStore from './components/store/AllUserStore';


export const Context = createContext(null)
  // const {users}  = useContext(Context)

//  const navigate = useNavigate()
//     const singout = useAuth()

//  useEffect(() => {
     
//         // setUser(localStorage.getItem('token'))
//         try {
//             if(localStorage.getItem('token')) {
//                 check()
//                 .then(data => {
                   
//                     if(localStorage.getItem('token') && data) {
//                         users.setUser(true)
//                         users.setIsAuth(true)
//                         users.setRole(data.role)
//                         users.setEmail(data.email)
//                     } else if(localStorage.getItem(' ', ) && !data) {
//                         localStorage.clear();
//                         navigate('/', {replace: true})
//                         singout(()=> 
//                             navigate('/', {replace: true})
//                         )
//                     }
//                 }) 
//                 // .catch(function(error) {
//                 //     console.log(error.response.status)
//                 //     if(error.response.status === 401) {
//                 //     navigate('/home', {replace: true})

//                 //     }
//                 // })
//             } 
          
//         } catch (error) {
//             if(error.error) {
//               navigate('/home', {replace: true})

//             }
//             console.log(error)
//             console.log(error)
//         }
       
//     }, [])









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context.Provider value={{ 
        users: new UserStore(),
        allUser: new UserStore(),
        direction: new DirectionStore(),
        ready: new DirectionStore(),
        arhivedelivery: new DirectionStore(),
        alldirection: new DirectionStore(),
        allcity: new DirectionStore(),
        status: new GuaranteeStore(),
        examination: new GuaranteeStore(),
        examinationworks: new GuaranteeStore(),
        examinationarhive: new GuaranteeStore(),
        examinationready: new GuaranteeStore(),
        examinationcharger: new GuaranteeStore(),
        totalweghtnewofcity: new DirectionStore()
        }}>
          <App />

        </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

