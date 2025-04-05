import { Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home'
import Guarantee from './components/pages/Guarantee/Guarantee'
import Map from './components/pages/Map/Map';
import UsedBatteries from './components/pages/UsedBatteries/UsedBatteries'
import AdminPanel from './components/pages/AdminPanel/AdminPanel'
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import { AuthProvider } from './components/AuthProvider';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { useContext, useEffect } from 'react';
import { check } from './components/http/userAPI';
// import NewCheck from './components/WarrantyVerificationSteps/NewCheck';
import FactoryСheck from './components/WarrantyVerificationSteps/FactoryСheck/FactoryСheck';
import Charger from './components/WarrantyVerificationSteps/Сharger/Charger';
import Ready from './components/WarrantyVerificationSteps/Ready/Ready';
import Arhive from './components/WarrantyVerificationSteps/Arhive/Arhive';
import NewCheck from './components/WarrantyVerificationSteps/NewCheck';




const App = observer(() => {
  const {users} = useContext(Context)
  const navigate = useNavigate()

  useEffect(() => {     
    
    try {

      check()
            .catch(function(error) {
              // console.log(error.response.status)
              if(error.response.status === 401) {
              navigate('/home', {replace: true})

              }
              // console.clear()
            
          })
            .then(data => {
                if(localStorage.getItem('token') && data) {
                    users.setUser(true)
                    users.setIsAuth(true)
                    users.setRole(data.role)
                    users.setEmail(data.email)
                } else if(localStorage.getItem(' ', ) && !data) {
                    localStorage.clear();
                    navigate('/', {replace: true})
                    // singout(()=> 
                    //     navigate('/', {replace: true})
                    // )
                }
            }) 
       
      
    } catch (error) {
        if(error.response.status === 401) {
            navigate('/home', {replace: true})

        }
        console.log(error)
        console.log(error)
    }
   
}, [])





  return (
    <div className="App">
      <div className='App__box'>
      <AuthProvider>
        <Routes>
          <Route  path='/' element={<Layout/>}>       
              {/* <Route index element={<Home/>}/>    */}
                <Route path='map' element={            
                  <RequireAuth>
                    <Map/>
                  </RequireAuth>}/>
                  <Route path='/guarantee/*' element={
                    
                    <RequireAuth>
                      <Guarantee/>
                  </RequireAuth>
                  }>
                     <Route  path='/new-check' element={
                    
                        <NewCheck/>
                                
                      }/>
                   <Route path='/charger' element={
                  
                        <Charger/>
                
                   
                  }/>
                       <Route path='factory' element={
                    
               
                        <FactoryСheck/>
                    
                
                  }/>
                  <Route path='ready' element={
                  
                        <Ready/>
                   
                  }/>
                  <Route path='arhive' element={
               
                        <Arhive/>
                
                  }/>
                  </Route>                 
                <Route path='used-batteries' element={
                    <RequireAuth>
                      <UsedBatteries/>
                    </RequireAuth>              
                  }/>                
                <Route path='admin-panel' element={
                    <RequireAuth>
                      { users.role === 'ADMIN' &&
                        <AdminPanel/>
                        }  
                  </RequireAuth>
                }/> 
          </Route>              
          <Route path='*' element={<Home/>}/>
        </Routes>
      </AuthProvider>   
      </div>   
    </div>
  );
})

export default App;
