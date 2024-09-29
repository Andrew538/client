import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import classes from './Layout.module.css'
import Header from './UI/Header/Header'
import { useState } from 'react'

function Layout() {
  const [year, setYear] = useState([])
  
  useEffect(() => {
    let newYear = new Date().getFullYear()
  setYear (newYear)
    
  },[])

  return (
    <>
      <Header/>
      <main className={classes.main}>
        <div className={classes.container}>
          <Outlet/>
        </div>
      </main>
        <footer className={classes.footer}> 
          <div className={classes.container}>
            <div className={classes.footer__box}>
                <div className={classes.date}>
                  <strong>
                    {year}
                  </strong>
                </div>
            </div>           
        </div>
      </footer>
    </>
   
  )
}

export default Layout