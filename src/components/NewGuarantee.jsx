import classNames from 'classnames'
import classes from '../components/pages/Guarantee/Guarantee.module.css'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NewGuarantee = () => {
  return (
    <div className={classes.list}>
          <div className={classNames(classes.nav)}>
           <NavLink className={classNames(classes.nav__link)} to='guarantee/new-check'>Поступил на проверку</NavLink>
           <NavLink className={classNames(classes.nav__link)}  to='charger'>На зарядке</NavLink>
           <NavLink className={classNames(classes.nav__link)}  to='factory'>Отправили на завод</NavLink>
           <NavLink className={classNames(classes.nav__link)}  to='ready'>Готов к отправке клиенту</NavLink>
           <NavLink className={classNames(classes.nav__link)}  to='arhive'>Архив</NavLink>
         </div> 
         {/* <NewCheck></NewCheck>
         <Charger/> */}
         {/* <Outlet context={{}}/> */}
         <Outlet/>
             {/* <TabGuarantee
                  
             items={items}
           ></TabGuarantee> */}
       </div>
  )
}

export default NewGuarantee