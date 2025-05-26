import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { Context } from "../../..";
import { fetchExamCharger } from "../../http/guaranteeAPI";

import classes from "../GeneralStyles/GeneralStyles.module.css";

import ModalUpdate from "../../UI/ModalUpdate/ModalUpdate";
import ModalNotification from "../../UI/ModalNotification/ModalNotification";
import WarrantyTableHeader from "../WarrantyTableHeader/WarrantyTableHeader";
import SelectSort from "../../UI/Select/SelectSort/SelectSort";
import TabelList from "../../UI/TabelList/TabelList";
import ListSelectSort from "../../UI/ListSelectSort/ListSelectSort";

const Charger = observer(() => {
  const { examinationcharger, status } = useContext(Context);


  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalNotification, setModalNotification] = useState(false);



  let [numId, setNumId] = useState("");
  let [notId, setNotId] = useState("");

const [items, setItems] = useState([]);

const newI = items.filter((item, index) => items.indexOf(item) == index & item != '')
 
const [manager, setManager] = useState([])

const listManager = manager.filter((item, index) => manager.indexOf(item) == index & item != '')

  const [itemProps, setItemProps] = useState();

  useEffect(() => {
    fetchExamCharger(null, null).then((data) => {
      setItemProps(data);
      examinationcharger.SetExaminationCharger(data);
      status.SetStatus(data.map((i) => i.statusExam));

       const newun = examinationcharger.examinationcharger.map((item) => {return item.city})
      setItems(newun)  
       const newManager = examinationcharger.examinationcharger.map((item) => {return item.manager})
      setManager(newManager)  
    });
  }, [examinationcharger]);



  
    const [sort, setSort] = useState('')
    const [sortCity, setSortCity] = useState('')
  
    let sorted = useMemo(() => {
     if(sort) {
      return examinationcharger.examinationcharger.filter(list => list.manager.toLowerCase().includes(sort))
     }  if (sortCity) {
       return examinationcharger.examinationcharger.filter(list => list.city.toLowerCase().includes(sortCity))
  
     }
     
     else {
      return examinationcharger.examinationcharger
  
     }
    }, [sort, sortCity, examinationcharger.examinationcharger])

       let optionsCity = useMemo(() => {
    
         return newI.map((item) =>                  
          (<option key={item} value={item.toLowerCase()}>
             {item}
           </option>)      
         );
       }, [examinationcharger.examinationcharger]);

         let optionsManager = useMemo(() => {
    
         return listManager.map((item) =>                  
          (<option key={item} value={item.toLowerCase()}>
             {item}
           </option>)      
         );
       }, [examinationcharger.examinationcharger]);
    


  return (
    <div className={classes.list}>
      <ListSelectSort
        sort={sort}
        setSort={setSort}
        optionsManager={optionsManager}
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
});

export default Charger;
