import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useMemo, useState } from 'react'

import classes from './GeneralStyles/GeneralStyles.module.css'



import { Context } from '../..';
import { fetchExam} from '../http/guaranteeAPI';
import AddEntry from '../UI/modals/AddEntry';

import WarrantyTableHeader from './WarrantyTableHeader/WarrantyTableHeader';

import SelectSort from '../UI/Select/SelectSort/SelectSort';
import TabelList from '../UI/TabelList/TabelList';
import ListSelectSort from '../UI/ListSelectSort/ListSelectSort';
// import { allUsers } from '../http/userAPI';





const  NewCheck = observer(() => {
  const {examination, status, allUser}  = useContext(Context)
  const [modalShow, setModalShow] = useState(false);
  

  const [items, setItems] = useState([]);

const newI = items.filter((item, index) => items.indexOf(item) == index & item != '')

  useEffect(() => {   
    fetchExam().then(data => {
      examination.SetExamination(data)
      status.SetStatus(data)

           const newun = examination.examination.map((item) => {return item.city})
      setItems(newun)  
      
    })
    allUsers().then(data => {
      allUser.setAllUser(data)
      // console.log(data)
    })
   
  },[examination, allUser])






  const [sort, setSort] = useState('')
  const [sortCity, setSortCity] = useState('')

  let sorted = useMemo(() => {
    if (sort) {
      return examination.examination.filter((list) =>
        list.manager.toLowerCase().includes(sort)
      );
    }
    if (sortCity) {
      return examination.examination.filter((list) =>
        list.city.toLowerCase().includes(sortCity)
      );
    } else {
      return examination.examination;
    }
  }, [sort, sortCity, examination.examination]);

    let optionsCity = useMemo(() => {
       
            return newI.map((item) => (
              <option key={item} value={item.toLowerCase()}>
                {item}
              </option>
            ));
          
        }, [examination.examination]);




  return (
    <div className={classes.list}>
      <button
        className={classes.list__button}
        onClick={() => setModalShow(true)}
      >
        Добавить запись
      </button>
      <AddEntry show={modalShow} onHide={() => setModalShow(false)} />
     <ListSelectSort
        sort={sort}
        setSort={setSort}
        sortCity={sortCity}
        setSortCity={setSortCity}
        optionsCity={optionsCity}
     />
      <WarrantyTableHeader />

        <TabelList
          list={sorted}
        />
    </div>
  );
})

export default NewCheck