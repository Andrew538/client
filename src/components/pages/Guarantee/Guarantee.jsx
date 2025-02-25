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



const  Guarantee = observer(() => {


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
  
  
  

  const items = [

    //  } catch (error) {
    //    console.log(error)
    //  }
    // }
      { title: 'Поступили на проверку', content: <NewCheck/>, index: 1 },
  
      { title: 'Отправили на завод', content: <FactoryСheck/>, index: 2},
      { title: 'Архив', content: <Arhive/> , index: 3},
    ]
 
  return (
    <div className={classes.list}>
       <div className={classNames(classes.nav)}>
        <NavLink className={classNames(classes.nav__link)} to='new-check'>Поступил на проверку</NavLink>
        <NavLink className={classNames(classes.nav__link)}  to='charger'>На зарядке</NavLink>
        <NavLink className={classNames(classes.nav__link)}  to='factory'>Отправили на завод</NavLink>
        <NavLink className={classNames(classes.nav__link)}  to='ready'>Готов к отправке клиенту</NavLink>
        <NavLink className={classNames(classes.nav__link)}  to='arhive'>Архив</NavLink>
      </div> 
      {/* <NewCheck></NewCheck>
      <Charger/> */}
      <Outlet/>
          {/* <TabGuarantee
               
          items={items}
        ></TabGuarantee> */}
    </div>
  )
})

export default Guarantee