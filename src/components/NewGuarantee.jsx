import classNames from 'classnames'
import classes from '../components/pages/Guarantee/Guarantee.module.css'
import React, { useContext, useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { check } from './http/userAPI'

const NewGuarantee = observer(() => {
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
        
            }
           
        }, [])
        
        
  return (
    <div className={classes.list}>
          <div className={classNames(classes.nav)}>
           <NavLink className={classNames(classes.nav__link)} to='newcheck'>Поступил на проверку</NavLink>
           <NavLink className={classNames(classes.nav__link)}  to='charger'>На зарядке</NavLink>
           <NavLink className={classNames(classes.nav__link)}  to='factory'>Отправили на завод</NavLink>
           <NavLink className={classNames(classes.nav__link)}  to='ready'>Готов к отправке клиенту</NavLink>
           <NavLink className={classNames(classes.nav__link)}  to='arhive'>Архив</NavLink>
         </div> 
      
          
        
             
       </div>
  )
})

export default NewGuarantee