import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hook/useAuth'
import { observer } from 'mobx-react-lite'
import { Context } from '../../../index'
import {check, login } from '../../http/userAPI'
import classes from './Home.module.css'

const  Home = observer(() => {
  const {users} = useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const  [errors, setErrors] = useState('')
  const navigate = useNavigate()
  const {singin} = useAuth()
  const [name, setName] = useState([])

  const signIn = async () => {
    // event.prentDefault()
   
    let data;
    try {
  
      // const email = email;
      // const password = password;
      // console.log(form)
      const data  = await login(email, password)
      users.setUser(users)
      users.setIsAuth(true)
      setEmail('')
      setPassword('')
      singin(users, () => navigate('/home', {replace: true}))
    
    } catch (err) {
      setErrors(err.response.data.message)       
    }
  }

  useEffect(() => {       
    if (localStorage.getItem('token') ) {
      check().then(data => {
       setName(data) 
      }) 
    } 
},[])


  return (
    <>
    <div className={classes.box}>
    <div className={classes.error}>{errors}</div>
      <form className={classes.form}>
        <div className={classes.form__content}>
          <label className={classes.form__label}>
            Почта  <input className={classes.form__input} name='email' placeholder='Почта' required  autoComplete='true' value={email} onChange={e => setEmail(e.target.value)}/>
          </label>
      
          <label className={classes.form__label}>
            Пароль  <input className={classes.form__input} name='password' type='password' required autoComplete='true' placeholder='Пароль' value={password} onChange={e => setPassword(e.target.value)}/>        
          </label>
        </div>
      </form>
    <button className={classes.form__button} onClick={signIn} type='submit'>Войти</button>
      
    </div>
    





    </>
   
    
  )
})

export default Home