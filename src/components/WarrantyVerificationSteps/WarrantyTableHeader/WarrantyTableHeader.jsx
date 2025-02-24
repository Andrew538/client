import React from 'react'
import classes from './WarrantyTableHeader.module.css'
import classNames from 'classnames';

const WarrantyTableHeader = () => {
  return (
    <div>
         <ul className={classNames(classes.list__column__names)}>     
            <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_one)}>Дата поступления </li>
            <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_two)}>Клиент</li>
            <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_three)}>Город</li>
            <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_four)}>Менеджер</li>        
            <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_five)}>Название АКБ</li>
            <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_six)}>Дата выпуска (Маркировка)</li>
            <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_seven)}>Номер документа возврата от клиента</li>
            <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_eight)}>№ Акта для завода</li>
            <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_nine)}>№ перемещения на склад БРАК</li>
            <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_ten)}>Дата отправки клиенту</li>
            <li className={classNames(classes.list__column__names__item, classes.list__column__names__item_eleven)}>Заключение</li>
        </ul>
    </div>
  )
}

export default WarrantyTableHeader