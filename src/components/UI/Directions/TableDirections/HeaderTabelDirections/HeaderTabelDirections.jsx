import React from 'react'
import classNames from 'classnames';
import classes from './HeaderTabelDirections.module.css'


const HeaderTabelDirections = () => {
  return (
    <div className={classes.box}>
        <div className={classes.box__item}>Способ оплаты</div>
        <div className={classes.box__item}>Клиент</div>
        <div className={classes.box__item}>Адрес доставки</div>
        <div className={classes.box__item}>Контакты</div>
        <div className={classes.box__item}>Комментарий</div>
    </div>
  )
}

export default HeaderTabelDirections