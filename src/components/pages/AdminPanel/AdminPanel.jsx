import React, { useContext, useState } from 'react'
// import { registration } from '../../../http/userAPI';
import { Context } from '../../../index';
import { registration } from '../../http/userAPI';

function AdminPanel() {
  const {user} = useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signIn = async () => {
    let data;
    try {
      const data  = await registration(email, password)
      // console.log(response)
      user.setUser(user)
      user.setIsAuth(true)
    } catch (err) {
      if (err.response.status === 404) {
          // alert(err.response.error);
      }
  }
    
 
   
   
  }


  return (
   <div>
     <input placeholder='Логин' value={email} onChange={e => setEmail(e.target.value)}/>
     <input placeholder='пароль' value={password} onChange={e => setPassword(e.target.value)}/> 
     <button onClick={signIn}>Создать</button>

    <h1>Админ</h1>
    </div>
  )
}

export default AdminPanel