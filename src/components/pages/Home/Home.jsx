import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hook/useAuth'
import { observer } from 'mobx-react-lite'
import { Context } from '../../../index'
import {check, login } from '../../http/userAPI'

const  Home = observer(() => {
  const {user} = useContext(Context)
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
      // console.log(request.data)
      user.setUser(user)
      // user.setIsAuth(true)
      singin(user, () => navigate('/map', {replace: true}))
    } catch (err) {
      setErrors(err.response.data.message)       
    }
  
   
    console.log(errors)
   
  }

  // useEffect(() => {
  //    check().then(data => {
  //     setName(data)
      
  //     setName(data)
  //     console.log(data.email)
  //    })
     
  // },[])

  return (
    <>
    
    <input placeholder='Логин' required  autoComplete='true' value={email} onChange={e => setEmail(e.target.value)}/>
      <input type='password' required autoComplete='true' placeholder='пароль' value={password} onChange={e => setPassword(e.target.value)}/>
      <button onClick={signIn}>Создать</button>
      <div>{errors}</div>
      <h2>{name.email}</h2>
     
  
    </>
   
    
  )
})

export default Home