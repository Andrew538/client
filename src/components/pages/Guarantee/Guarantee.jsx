import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import classes from './Guarantee.module.css'
import TabGuarantee from '../../UI/Tab/TabGuarantee';
import NewCheck from '../../WarrantyVerificationSteps/NewCheck';
import { Context } from '../../..';
import { fetchExam } from '../../http/guaranteeAPI';
import FactoryСheck from '../../WarrantyVerificationSteps/FactoryСheck/FactoryСheck';
import Arhive from '../../WarrantyVerificationSteps/Arhive/Arhive';
import Ready from '../../WarrantyVerificationSteps/Ready/Ready';
import Charger from '../../WarrantyVerificationSteps/Сharger/Charger';
import { NavLink, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../../AuthProvider';
import RequireAuth from '../../RequireAuth';


const  Guarantee = observer(() => {


  const items = [
    
    { title: 'Поступили на проверку', content: <NewCheck/>, index: 1 },
    { title: 'На зарядке', content: <Charger/>, index: 2 },
    { title: 'Отправили на завод', content: <FactoryСheck/>, index: 3},
    { title: 'Готовы к отправке клиенту', content: <Ready/>, index: 4 },
    { title: 'Архив', content: <Arhive/> , index: 5},
  ]



  return (
    <div className={classes.list}>



        <TabGuarantee           
          items={items}
        ></TabGuarantee>
    </div>
  )
})

export default Guarantee