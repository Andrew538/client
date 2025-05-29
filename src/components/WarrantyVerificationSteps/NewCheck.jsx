import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import classes from './GeneralStyles/GeneralStyles.module.css'
import { Context } from '../..';
import { fetchExam} from '../http/guaranteeAPI';
import AddEntry from '../UI/modals/AddEntry';
import WarrantyTableHeader from './WarrantyTableHeader/WarrantyTableHeader';
import TabelList from '../UI/TabelList/TabelList';
import ListSelectSort from '../UI/ListSelectSort/ListSelectSort';




const NewCheck = observer(() => {
  const { examination, status } = useContext(Context);
  const [modalShow, setModalShow] = useState(false);
  const [manager, setManager] = useState([]);

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchExam().then((data) => {
      examination.SetExamination(data);
      status.SetStatus(data);
    });
  }, [examination]);

  const [sort, setSort] = useState("");
  const [sortCity, setSortCity] = useState("");

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
    const newI = items.filter(
      (item, index) => (items.indexOf(item) == index) & (item != "")
    );
    const newun = examination.examination.map((item) => {
      return item.city;
    });
    setItems(newun);
    return newI.map((item) => (
      <option key={item} value={item.toLowerCase()}>
        {item}
      </option>
    ));
  }, [examination.examination]);

  let optionsManager = useMemo(() => {
    const listManager = manager.filter(
      (item, index) => (manager.indexOf(item) == index) & (item != "")
    );
    const newManager = examination.examination.map((item) => {
      return item.manager;
    });
    setManager(newManager);

    return listManager.map((item) => (
      <option key={item} value={item.toLowerCase()}>
        {item}
      </option>
    ));
  }, [sort, examination.examination]);

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

export default NewCheck;