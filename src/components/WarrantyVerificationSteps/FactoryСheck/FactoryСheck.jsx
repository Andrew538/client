import { observer } from "mobx-react-lite";
import { useContext, useEffect, useMemo, useState } from "react";
import { Context } from "../../..";
import { fetchExamWorks } from "../../http/guaranteeAPI";
import ModalUpdate from "../../UI/ModalUpdate/ModalUpdate";
import ModalNotification from "../../UI/ModalNotification/ModalNotification";
import classes from "../GeneralStyles/GeneralStyles.module.css";
import WarrantyTableHeader from "../WarrantyTableHeader/WarrantyTableHeader";
import TabelList from "../../UI/TabelList/TabelList";
import ListSelectSort from "../../UI/ListSelectSort/ListSelectSort";

const FactoryСheck = observer(() => {
  const { examinationworks, status } = useContext(Context);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalNotification, setModalNotification] = useState(false);
  let [numId, setNumId] = useState("");
  let [notId, setNotId] = useState("");
  const [manager, setManager] = useState([])
  const [items, setItems] = useState([]);
  const [sort, setSort] = useState("");
  const [sortCity, setSortCity, ] = useState("")

  const [itemProps, setItemProps] = useState();
  

  useEffect(() => {
    fetchExamWorks(null, null).then((data) => {
      setItemProps(data);
      examinationworks.SetExaminationWorks(data);
      status.SetStatus(data.map((i) => i.statusExam));
    });
  }, [examinationworks, status,]);
;

  let sorted = useMemo(() => {
    if (sort) {
      return examinationworks.examinationworks.filter((list) =>
        list.manager.toLowerCase().includes(sort)
      );
    } else if (sortCity) {
      return examinationworks.examinationworks.filter((list) =>
        list.city.toLowerCase().includes(sortCity)
      );
    } else if(sort != sortCity) {
       examinationworks.examinationworks.filter((list) =>
        list.manager.toLowerCase().includes(sort)) && examinationworks.examinationworks.filter((list) =>
        list.city.toLowerCase().includes(sortCity)
      );
    }
    else {
      return examinationworks.examinationworks;
    }
  }, [sort, sortCity, examinationworks.examinationworks]);

  

  let optionsCity = useMemo(() => {
  const newI = items.filter((item, index) => items.indexOf(item) == index & item != '')

         const newun = examinationworks.examinationworks.map((item) => {return item.city})
        setItems(newun)  

       return newI.map((item) =>                  
        (<option key={item} value={item.toLowerCase()}>
           {item}
         </option>)      
       );
     }, [ sort,examinationworks.examinationworks]);

      
      let optionsManager = useMemo(() => {
  const listManager = manager.filter((item, index) => manager.indexOf(item) == index & item != '')

         const newManager = examinationworks.examinationworks.map((item) => {return item.manager})
      setManager(newManager)  
      return listManager.map((item) =>                  
        (<option key={item} value={item.toLowerCase()}>
          {item}
        </option>)      
      );
    }, [ setManager ,examinationworks.examinationworks]);


    // console.log(optionsManager)

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
      <TabelList list={sorted} />
      <ModalUpdate
        props={numId}
        show={modalUpdate}
        onHide={() => setModalUpdate(false)}
      />
      <ModalNotification
        props={notId}
        show={modalNotification}
        onHide={() => setModalNotification(false)}
      />
    </div>
  );
});

export default FactoryСheck;
