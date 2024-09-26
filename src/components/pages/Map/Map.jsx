import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hook/useAuth';

function Map() {
  const navigate = useNavigate()
  const {singout} = useAuth()
  const clearStorge = function() {
    localStorage.clear();
    singout(() => navigate('/map', {replace: true}))
  }
 

  return (
    <div>Map
      <button onClick={clearStorge}>Выйти</button>
   
    </div>
  )
}

export default Map