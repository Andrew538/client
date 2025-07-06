import React, { useCallback, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import CallDaysTab from '../../CallDays/CallDaysTab/CallDaysTab'
import Monday from '../../CallDays/CallDaysPages/Monday '
import Tuesday from '../../CallDays/CallDaysPages/Tuesday '
import Wednesday from '../../CallDays/CallDaysPages/Wednesday'
import Thursday from '../../CallDays/CallDaysPages/Thursday'
import Friday from '../../CallDays/CallDaysPages/Friday'
import Ready from '../../CallDays/CallDaysPages/Ready'
import SuppliesArchive from '../../CallDays/CallDaysPages/SuppliesArchive'

import classNames from 'classnames';
import classes from './ManagersTab.module.css'

const ManagersTabContent = observer(({ id, name, direction }) => {
  localStorage.setItem("c", id);

  const items = [
    { title: "Понедельник", content: <Monday id={id} />, indexd: 0 },
    { title: "Вторник", content: <Tuesday id={id} />, indexd: 1 },
    { title: "Среда", content: <Wednesday id={id} />, indexd: 2 },
    { title: "Четверг", content: <Thursday id={id} />, indexd: 3 },
    { title: "Пятница", content: <Friday id={id} />, indexd: 4 },
    { title: "Готовы к отгрузке", content: <Ready />, indexd: 5 },
    { title: "Архив поставок", content: <SuppliesArchive />, indexd: 6 },
  ];

  return (
    <div className={classes.content__box}>
      {/* <h2>{name}</h2> */}
      <CallDaysTab items={items} id={id} />
    </div>
  );
});

export default ManagersTabContent