import React, { useContext, useMemo } from 'react'
import classes from './ListSelectSort.module.css'
import SelectSort from '../Select/SelectSort/SelectSort';
import { Context } from '../../..';
import { observer } from 'mobx-react-lite';




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

    const managerMemo = useMemo(() => {
      return  optionsManager
    },[optionsManager])

     
  return (
    <div className={classes.box}>
      <SelectSort
        value={sort}
        onChange={setSort}
        options={managerMemo}  
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