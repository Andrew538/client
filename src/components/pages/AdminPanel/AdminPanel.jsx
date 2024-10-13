import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../index';
import { check, registration, } from '../../http/userAPI';
import Select from 'react-select';
import classes from './AdminPanel.module.css'
function AdminPanel() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
 

  const rgistr = async () => {
    let data;
    try {
      const data  = await registration(email, password, name, role)
    } catch (err) {

      setRole(err.response.data.message)
      setEmail('')
      setName('')
      setEmail('')
      setPassword('')
      
    }
  }

  useEffect(() => {  
 
    
    

      if (localStorage.getItem('token') ) {
        // usersList().then(data => {
        //   // console.log(data)
        // })
        // .catch((err) => {
        //   console.log(err)
        // })

      // check()
      // .then(data => {
      //     setName(data)
      //     console.log(data)
      //   })
      //   .catch((err) => {
      //    if (err) {
      //     //  navigate('/map', {replace: true})
      //    }
      //     // console.log(err)
      //   })
      //   .finally()
      } 
       
      
      

},[]
)


  const options = [
    { value: 'MANAGER', label: 'Менджер'},
    { value: 'ADMIN', label: 'Администратор'},
    { value: 'CLIENT', label: 'Клиент'},
    { value: 'USER', label: 'Пользователь'},
  ];

 
  return (
   <div>
      <div>{role}</div>
      <div className={classes.form}>
        <input className={classes.form__input} placeholder='Имя' value={name} onChange={e => setName(e.target.value)}/> 
        <input className={classes.form__input} placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
        <input className={classes.form__input} placeholder='пароль' value={password} onChange={e => setPassword(e.target.value)}/> 
        <Select
          className={classes.form__select}
          defaultValue={role}
          required
          onChange={(role) => setRole(role.value)}
          options={options}
        />
        <button className={classes.form__button} onClick={rgistr}>Создать</button>
      </div>
     
   
    </div>
  )
}

export default AdminPanel