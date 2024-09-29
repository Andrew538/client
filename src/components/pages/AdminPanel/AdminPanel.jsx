import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../index';
import { check, registration } from '../../http/userAPI';

function AdminPanel() {
  const {user} = useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState([])

  const signIn = async () => {
    let data;
    try {
      const data  = await registration(email, password)
    } catch (err) {
      setRole(err.response.data.message)
    }
  }

  // useEffect(() => {
  //   if (localStorage.getItem('token') ) {
  //     check().then(data => {
  //       console.log(data)
  //       setRole(data) 
  //     }) 
  //   } 
    
  // },[])


  return (
   <div>
     <input placeholder='Логин' value={email} onChange={e => setEmail(e.target.value)}/>
     <input placeholder='пароль' value={password} onChange={e => setPassword(e.target.value)}/> 
     <button onClick={signIn}>Создать</button>
      <div>{role}</div>
    <h1>Админ</h1>
    </div>
  )
}

export default AdminPanel