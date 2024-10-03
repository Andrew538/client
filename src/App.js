import { Routes, Route} from 'react-router-dom';
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
import { useContext } from 'react';
import { Context } from './index';



const App = observer(() => {


  return (
    <div className="App">
      <div className='App__box'>

  
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout/>}>          
          <Route index element={<Home/>}/>
            <Route path='map' element={            
              <RequireAuth>
                <Map/>
              </RequireAuth>}/>
              <Route path='guarantee' element={
                <RequireAuth>
                  <Guarantee/>
              </RequireAuth>
              }/>
            <Route path='used-batteries' element={
                <RequireAuth>
                  <UsedBatteries/>
                </RequireAuth>              
              }/>
            <Route path='admin-panel' element={
                // <RequireAuth>
                  <AdminPanel/>
              //  </RequireAuth>                            
              }/>
            <Route path='*' element={<Home/>}/>
          </Route>    
        </Routes>
      </AuthProvider>   
      </div>   
    </div>
  );
})

export default App;
