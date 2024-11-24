import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import classes from './Guarantee.module.css'
import TabGuarantee from '../../UI/Tab/TabGuarantee';
import NewCheck from '../../WarrantyVerificationSteps/NewCheck';
import { Context } from '../../..';
import { fetchExam } from '../../http/guaranteeAPI';
import FactoryСheck from '../../WarrantyVerificationSteps/FactoryСheck/FactoryСheck';


const  Guarantee = observer(() => {


  const items = [
    
    { title: 'Поступили на проверку', content: <NewCheck/>, index: 1 },

    { title: 'Отправили на завод', content: <FactoryСheck/>, index: 2},
    { title: 'Архив', content: 'Аккумуляторы отрпавленные клиентам после проверки или замены брака' , index: 3},
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