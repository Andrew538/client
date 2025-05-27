import { observer } from "mobx-react-lite";
import  { useContext, useEffect, useMemo, useState } from "react";
import { Context } from "../../../index";
import { fetchExamReady } from "../../http/guaranteeAPI";
import classes from "./Ready.module.css";
import WarrantyTableHeader from "../WarrantyTableHeader/WarrantyTableHeader";
import TabelList from "../../UI/TabelList/TabelList";
import ListSelectSort from "../../UI/ListSelectSort/ListSelectSort";

const Ready = observer(() => {
  const { examinationready, status } = useContext(Context);
  const [itemProps, setItemProps] = useState();
  const [items, setItems] = useState([]);
  const [manager, setManager] = useState([]);


  useEffect(() => {
    fetchExamReady(null, null).then((data) => {
      setItemProps(data);

      examinationready.SetExaminationReady(data);
      status.SetStatus(data.map((i) => i.statusExam));
    });
  }, [examinationready]);

  const [sort, setSort] = useState("");
  const [sortCity, setSortCity] = useState("");

  let sorted = useMemo(() => {
    if (sort) {
      return examinationready.examinationready.filter((list) =>
        list.manager.toLowerCase().includes(sort)
      );
    }
    if (sortCity) {
      return examinationready.examinationready.filter((list) =>
        list.city.toLowerCase().includes(sortCity)
      );
    } else {
      return examinationready.examinationready;
    }
  }, [sort, sortCity, examinationready.examinationready]);

  let optionsCity = useMemo(() => {
    const newI = items.filter(
      (item, index) => (items.indexOf(item) == index) & (item != "")
    );
    const newun = examinationready.examinationready.map((item) => {
      return item.city;
    });
    setItems(newun);
    return newI.map((item) => (
      <option key={item} value={item.toLowerCase()}>
        {item}
      </option>
    ));
  }, [examinationready.examinationready]);

  let optionsManager = useMemo(() => {
    const listManager = manager.filter(
      (item, index) => (manager.indexOf(item) == index) & (item != "")
    );
    const newManager = examinationready.examinationready.map((item) => {
      return item.manager;
    });
    setManager(newManager);

    return listManager.map((item) => (
      <option key={item} value={item.toLowerCase()}>
        {item}
      </option>
    ));
  }, [sort, examinationready.examinationready]);

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
      
    </div>
  );
});

export default Ready;
