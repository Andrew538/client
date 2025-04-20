import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { Context } from "../../../index";
import { fetchExamArhive } from "../../http/guaranteeAPI";
import ModalUpdate from "../../UI/ModalUpdate/ModalUpdate";
import ModalNotification from "../../UI/ModalNotification/ModalNotification";
import classes from "./Arhive.module.css";
import classNames from "classnames";
import WarrantyTableHeader from "../WarrantyTableHeader/WarrantyTableHeader";
import TabelList from "../../UI/TabelList/TabelList";
import SelectSort from "../../UI/Select/SelectSort/SelectSort";

const Arhive = observer(() => {
  const { examinationarhive, status } = useContext(Context);
  const [sort, setSort] = useState("");




  const [itemProps, setItemProps] = useState();


  useEffect(() => {
    fetchExamArhive().then((data) => {
      setItemProps(data);

      examinationarhive.SetExaminationArhive(data);
      status.SetStatus(data.map((i) => i.statusExam));
     
    });
  }, [examinationarhive]);

  const sortedtable = useMemo(() => {
    if (sort) {
      return examinationarhive.examinationarhive
        .slice()
        .filter((table) => table.manager.toLowerCase().includes(sort));
    }
    return examinationarhive.examinationarhive;
  }, [sort, examinationarhive.examinationarhive]);

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
      <TabelList list={sortedtable} />
      {/* <ol>     
              { examinationarhive.examinationarhive.map((item, index) =>    
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
                    <div className={classNames(classes.list__button__box, )}>              
                         
                    </div>                              
                  </div>                   
                  </li> 

                )}
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
         </ol> */}
    </div>
  );
});

export default Arhive;
