import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavLink, replace, useNavigate } from 'react-router-dom'
import classes from './Header.module.css'
import { observer } from 'mobx-react-lite'
import { Context } from '../../../index'
import { check } from '../../http/userAPI'
import { useAuth } from '../../hook/useAuth'
import './header.css'
const  Header = observer(() => {
    const {users} = useContext(Context)
    const [admin, setAdmin] = useState('')
    const [name, setName] = useState([])

    console.log(users.name)

    const navigate = useNavigate()
    const {singout} = useAuth()
    const clearStorge = function() {
     
      users.setIsAuth(false)
      localStorage.clear();
      setAdmin(' ')
      checkUser.current = ''
      setName('') 
      singout(() => navigate('/map', {replace: true}))
     
    }

    const checkUser= useRef('')
      checkUser.current = users.role

      useEffect(() => {  
  
          if (localStorage.getItem('token') ) {
        
            check().then(data => {
              setName(data.email)
              setAdmin(data.role)
            })            
          }
        },[])


  return (
    <header className={classes.header}>
        <div className={classes.container}> 
            <nav className={classes.nav}>
                <NavLink className={classes.link} to='/'>Главная</NavLink>
              
              {  users.isAuth &&
                <> 
                  <NavLink className={classes.link} to='/map'>Карты обзвона клиентов</NavLink>
                  <NavLink className={classes.link} to='/guarantee'>Гарантия</NavLink>
                  <NavLink className={classes.link} to='/used-batteries'>Б/У Акб</NavLink> 

                  { users.role === 'ADMIN' &&
                    <>
                      <NavLink className={classes.link} to='/admin-panel'>Админ-панель</NavLink>                                       
                    </>                     
                  }                                             
                  <button 
                    className={classes.header__button} 
                    onClick={clearStorge}
                  >
                    Выйти
                  </button>
                  <span>{name}</span>

                </>
               
              } 
                  
                
                

            </nav>            
        </div>        
    </header>
  )
})

export default Header