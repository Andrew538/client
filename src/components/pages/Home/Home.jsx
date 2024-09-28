import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hook/useAuth'
import { observer } from 'mobx-react-lite'
import { Context } from '../../../index'
import {check, login } from '../../http/userAPI'


const  Home = observer(() => {
  const {users} = useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const  [errors, setErrors] = useState('')
  const navigate = useNavigate()
  const {singin} = useAuth()

  const [name, setName] = useState([])
  const signIn = async () => {
    let data;
    try {
      const data  = await login(email, password)

      users.setUser(users)
      users.setIsAuth(true)
      singin(users, () => navigate('/map', {replace: true}))

    } catch (err) {
      setErrors(err.response.data.message)       
    }
  }

  useEffect(() => {
 
    if (localStorage.getItem('token') ) {
      console.log(users)
      check().then(data => {
        setName(data)
        
      }) 
    } 
    
  },[])

  return (
    <>
    
      <input placeholder='Логин' required  autoComplete='true' value={email} onChange={e => setEmail(e.target.value)}/>
      <input type='password' required autoComplete='true' placeholder='пароль' value={password} onChange={e => setPassword(e.target.value)}/>
      <button onClick={signIn}>Войти</button>
      <div>{errors}</div>
      <h2>{name.email}</h2>
     
  
    </>
   
    
  )
})

export default Home