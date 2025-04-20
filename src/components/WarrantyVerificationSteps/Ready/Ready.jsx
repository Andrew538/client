import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { Context } from "../../../index";
import { fetchExamReady, fetchOneExam } from "../../http/guaranteeAPI";
import ModalUpdate from "../../UI/ModalUpdate/ModalUpdate";
import classes from "./Ready.module.css";

import WarrantyTableHeader from "../WarrantyTableHeader/WarrantyTableHeader";
import SelectSort from "../../UI/Select/SelectSort/SelectSort";

import TabelList from "../../UI/TabelList/TabelList";

const Ready = observer(() => {
  const { examinationready, status } = useContext(Context);
  const [modalUpdate, setModalUpdate] = useState(false);
  let [numId, setNumId] = useState("");
  const [sort, setSort] = useState("");
  const [itemProps, setItemProps] = useState();

  // useEffect(() => {

  //   const id = numId

  //     fetchOneExam(id).then(data => {
  //       setNumId(data)
  //       console.log(data)
  //     })

  //   try {

  //     }
  //    catch (error) {
  //     console.log(error)
  //    }
  // }, [])

  useEffect(() => {
    fetchExamReady(null, null).then((data) => {
      setItemProps(data);

      examinationready.SetExaminationReady(data);
      status.SetStatus(data.map((i) => i.statusExam));
    });
  }, [examinationready]);

  const sortedList = useMemo(() => {
    if (sort) {
      return examinationready.examinationready
        .slice()
        .filter((list) => list.manager.toLowerCase().includes(sort));
    }
    return examinationready.examinationready;
  }, [sort, examinationready.examinationready]);

  return (
    <div className={classes.list}>
      <SelectSort
        value={sort}
        onChange={setSort}
        defaultValue="Сортировка по менеджеру"
        options={[
          { value: "туркин", name: "Туркин" },
          { value: "задоркин", name: "Задоркин" },
          { value: "коновалова", name: "Коновалова" },
        ]}
      />
      <WarrantyTableHeader />
      <TabelList list={sortedList} />
      {/* <ol>     
              { sortedList.map((item) =>    
                  <li className={classes.list} key={item.id}>
                  <div className={classes.list__box}>
                    <div className={classes.list__content} >    
                      <div className={classNames(classes.list__item, classes.list__item_one)}>{item.date}</div> 
                      <div className={classNames(classes.list__item, classes.list__item_two)}>{item.client}</div> 
                      <div className={classNames(classes.list__item, classes.list__item_three)}>{item.city}</div> 
                      <div className={classNames(classes.list__item, classes.list__item_four)}>{item.manager}</div> 
                      <div className={classNames(classes.list__item, classes.list__item_five)}>{item.product}</div>
                      <div className={classNames(classes.list__item, classes.list__item_six)}>{item.productionDate}</div>  
                      <div className={classNames(classes.list__item, classes.list__item_seven)}>{item.numberReturnDocument}</div>
                      <div className={classNames(classes.list__item, classes.list__item_eight)}>{item.plantDocumentNumber}</div> 
                      <div className={classNames(classes.list__item, classes.list__item_nine)}>{item.movingToDefectWarehouse}</div>  
                      <div className={classNames(classes.list__item, classes.list__item_ten)}>{item.releaseDate}</div>
                      <div className={classNames(classes.list__item, classes.list__item_eleven)}>{item.result}</div>   
                    </div>                
                    <div className={classNames(classes.list__button__box )}>              
                     

                <ButtonUpdate numberId={item.id} />

                    </div>                              
                  </div>                   
                  </li>      
                
                )}
         </ol> */}
      {/* <ModalUpdate
        props={numId}
        show={modalUpdate}
        onHide={() => setModalUpdate(false)}
      /> */}
    </div>
  );
});

export default Ready;
