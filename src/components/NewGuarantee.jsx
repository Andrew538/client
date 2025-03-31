import classNames from 'classnames'
import classes from '../components/pages/Guarantee/Guarantee.module.css'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

const NewGuarantee = observer(() => {
  return (
    <div className={classes.list}>
          <div className={classNames(classes.nav)}>
           <NavLink className={classNames(classes.nav__link)} to='newcheck'>Поступил на проверку</NavLink>
           <NavLink className={classNames(classes.nav__link)}  to='charger'>На зарядке</NavLink>
           <NavLink className={classNames(classes.nav__link)}  to='factory'>Отправили на завод</NavLink>
           <NavLink className={classNames(classes.nav__link)}  to='ready'>Готов к отправке клиенту</NavLink>
           <NavLink className={classNames(classes.nav__link)}  to='arhive'>Архив</NavLink>
         </div> 
      
         {/* <Outlet/> */}
             
       </div>
  )
})

export default NewGuarantee