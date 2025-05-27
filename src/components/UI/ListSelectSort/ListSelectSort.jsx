import React, { useContext, useMemo, useState } from 'react'
import classes from './ListSelectSort.module.css'
import classNames from 'classnames';
import SelectSort from '../Select/SelectSort/SelectSort';
import { Context } from '../../..';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { keys, values } from 'mobx';
// import { allUsers } from '../../http/userAPI';



const ListSelectSort = observer(({sort, setSortCity, setSort, sortCity, optionsCity, optionsManager}) => {
 

    
    const { allUser, examination } = useContext(Context);
    // console.log(examination.examination.map(item => console.log(item.city)))

    // useEffect(() => {
    //   allUsers().then((data) => {
    //     allUser.setAllUser(data);
    //   });

   
    // }, []);

    //  let options = useMemo(() => {
    //    if (allUser) {
    //      return allUser.allUser.map((item) => (
    //        <option key={item.id} value={item.surname.toLowerCase()}>
    //          {item.surname} {item.name}
    //        </option>
    //      ));
    //    }
    //  });

     
  return (
    <div className={classes.box}>
      <SelectSort
        value={sort}
        onChange={setSort}
        options={optionsManager}  
        defaultValue="Сортировка по менеджеру"
                
       />
      <SelectSort
        value={sortCity}
        onChange={setSortCity}
        defaultValue="Сортировка по городу"
        options={optionsCity}
      />
    </div>
  );
})

export default ListSelectSort