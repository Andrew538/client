import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import { observer } from 'mobx-react-lite'
import { Context } from '../../../index'
const  Header = observer(() => {
    const {user} = useContext(Context)
    console.log(user)
  return (
    <header className={classes.header}>
        <div className={classes.container}> 
            <nav className={classes.nav}>
                <NavLink className={classes.link} to='/'>Главная</NavLink>

              {  user &&
                <> 
                <NavLink className={classes.link} to='/map'>Карты обзвона клиентов</NavLink>
                  <NavLink className={classes.link} to='/guarantee'>Гарантия</NavLink>
                  <NavLink className={classes.link} to='/used-batteries'>Б/У Акб</NavLink>
                  <NavLink className={classes.link} to='/admin-panel'>Админ-панель</NavLink>
                
                </>
               
              } 
                


            </nav>            
        </div>        
    </header>
  )
})

export default Header