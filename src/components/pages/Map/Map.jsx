import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hook/useAuth';
import { observer } from 'mobx-react-lite';
import { Context } from '../../../index';

const  Map = observer(() => {
  const {users} = useContext(Context)
  const navigate = useNavigate()
  const {singout} = useAuth()
  const clearStorge = function() {
    // user.setUser({})
    users.setIsAuth(false)
    console.log(users)

    localStorage.clear();
    singout(() => navigate('/map', {replace: true}))
   
  }
 

  return (
    <div>Map
      <button onClick={clearStorge}>Выйти</button>
   
    </div>
  )
})

export default Map