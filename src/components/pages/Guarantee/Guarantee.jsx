import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import classes from './Guarantee.module.css'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import TabGuarantee from '../../UI/Tab/TabGuarantee';
import NewCheck from '../../WarrantyVerificationSteps/NewCheck';
import FactoryСheck from '../../WarrantyVerificationSteps/FactoryСheck/FactoryСheck';
import Arhive from '../../WarrantyVerificationSteps/Arhive/Arhive';
import { Context } from '../../..';
import { check } from '../../http/userAPI';
import Charger from '../../WarrantyVerificationSteps/Сharger/Charger';
import Ready from '../../WarrantyVerificationSteps/Ready/Ready';
import NewGuarantee from '../../NewGuarantee';
import Layout from '../../Layout';
import { useAuth } from '../../hook/useAuth';



const  Guarantee = observer(() => {
   const {users} = useContext(Context)
    const navigate = useNavigate()
    const singout = useAuth()

    // function activeTab () {
    //   // localStorage.setItem('numberTab', 0)

    // }


    useEffect(() => {   
    // activeTab()        

      try {  
        check()
            //   .catch(function(error) {
            //     // console.log(error.response.status)
            //     if(error.response.status === 401) {
            //     navigate('/home', {replace: true})
  
            //     }
            //     console.clear()
              
            // })
              .then(data => {
                  if(localStorage.getItem('token') && data) {
                      users.setUser(true)
                      users.setIsAuth(true)
                      users.setRole(data.role)
                      users.setEmail(data.email)
                  } 
                  
                  else if(localStorage.getItem(' ', ) && !data) {
                      localStorage.clear();
                      navigate('/', {replace: true})
                      singout(()=> 
                          navigate('/', {replace: true})
                      )
                  }
              }) 
         
        
      } catch (error) {
          if(error.response.status === 401) {
              navigate('/home', {replace: true})
  
          }
  
      }
     
  }, [])
  
  
  

  const items =  [
    
    { title: 'Поступили на проверку', content: <NewCheck/>, index: 1 },
    { title: 'На зарядке', content: <Charger/>, index: 2 },
    { title: 'Аккумуляторы отправленные на завод', content: <FactoryСheck/>, index: 3},
    { title: 'Готовы к отправке клиенту', content: <Ready/>, index: 4 },
    { title: 'Архив', content: <Arhive/> , index: 5},
  ]


  return (
    <div className={classes.list}>

         {/* <div className={classNames(classes.nav)}>
                   <NavLink className={classNames(classes.nav__link)} to='new-check'>Поступил на проверку</NavLink>
                   <NavLink className={classNames(classes.nav__link)}  to='charger'>На зарядке</NavLink>
                   <NavLink className={classNames(classes.nav__link)}  to='factory'>Отправили на завод</NavLink>
                   <NavLink className={classNames(classes.nav__link)}  to='ready'>Готов к отправке клиенту</NavLink>
                   <NavLink className={classNames(classes.nav__link)}  to='arhive'>Архив</NavLink>
                 </div>  */}
       {/* <NewGuarantee/>
       {/* <Layout/> */}
 {/* <Outlet/> */}
          <TabGuarantee
              items={items}
        ></TabGuarantee>
    </div>
  )
})

export default Guarantee