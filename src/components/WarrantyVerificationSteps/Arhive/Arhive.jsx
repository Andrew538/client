import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { Context } from "../../../index";
import { fetchExamArhive } from "../../http/guaranteeAPI";

import classes from "./Arhive.module.css";

import WarrantyTableHeader from "../WarrantyTableHeader/WarrantyTableHeader";
import TabelList from "../../UI/TabelList/TabelList";

import ListSelectSort from "../../UI/ListSelectSort/ListSelectSort";
import SelectSort from "../../UI/Select/SelectSort/SelectSort";

const Arhive = observer(() => {
  const { examinationarhive, status } = useContext(Context);
  const [itemProps, setItemProps] = useState();
  const [items, setItems] = useState([]);
  const [sort, setSort] = useState("");
  const [sortCity, setSortCity] = useState("");
  const [manager, setManager] = useState([]);



  useEffect(() => {
    fetchExamArhive().then((data) => {
      setItemProps(data);

      examinationarhive.SetExaminationArhive(data);
      status.SetStatus(data.map((i) => i.statusExam));
    });
  }, [sort, sortCity, examinationarhive]);





const newI = items.filter(
  (item, index) => (items.indexOf(item) == index) & (item != "")
);

const optionsCity = useMemo(() => {
  const newun = examinationarhive.examinationarhive.map((item) => {
    return item.city;
  });
  setItems(newun);
  return newI.map((item) => (
    <option key={item} value={item.toLowerCase()}>
      {item}
    </option>
  ));
}, [sortCity, examinationarhive.examinationarhive]);




  let optionsManager = useMemo(() => {
    const listManager = manager.filter(
      (item, index) => (manager.indexOf(item) == index) & (item != "")
    );
    const newManager = examinationarhive.examinationarhive.map((item) => {
      return item.manager;
    });
    setManager(newManager);

    return listManager.map((item) => (
      <option key={item} value={item.toLowerCase()}>
        {item}
      </option>
    ));
  }, [sort, examinationarhive.examinationarhive, examinationarhive]);




   let sorted = useMemo(() => {
     if (sort) {

       return examinationarhive.examinationarhive.filter((list) =>
         list.manager.toLowerCase().includes(sort)
       );
     }

     if (sortCity) {
      
       return examinationarhive.examinationarhive.filter((list) =>
         list.city.toLowerCase().includes(sortCity)
       );
     } else {
       return examinationarhive.examinationarhive;
     }
   }, [sort, sortCity, examinationarhive.examinationarhive]);
 
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
    
      <WarrantyTableHeader>

     
      </WarrantyTableHeader>
        {/* <SelectSort
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
      />  */}
       <TabelList list={sorted} />
    </div>
  );
});

export default Arhive;
