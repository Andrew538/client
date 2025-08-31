import { observer } from 'mobx-react-lite'
import React from 'react'
import classes from './TabelList.module.css'
import classNames from 'classnames';
import ButtonUpdate from '../ButtonUpdate/ButtonUpdate';
import ButtonDeleteWarranty from '../ButtonDelete/ButtonDeleteWarranty';

const TabelList = observer(({list}) => {
   
  return (
    <ol>
      {
        list.map((item) => (
            <li className={classes.item} key={item.id}>
                 <div className={classes.item__box}>
                    <div className={classes.table}>
                      <div
                        className={classNames(
                          classes.table__item,
                          classes.table__item_one
                        )}
                      >
                        {item.date}
                      </div>
                      <div
                        className={classNames(
                          classes.table__item,
                          classes.table__item_two
                        )}
                      >
                        {item.client}
                      </div>
                      <div
                        className={classNames(
                          classes.table__item,
                          classes.table__item_three
                        )}
                      >
                        {item.city}
                      </div>
                      <div
                        className={classNames(
                          classes.table__item,
                          classes.table__item_four
                        )}
                      >
                        {item.manager}
                      </div>
                      <div
                        className={classNames(
                          classes.table__item,
                          classes.table__item_five
                        )}
                      >
                        {item.product}
                      </div>
                      <div
                        className={classNames(
                          classes.table__item,
                          classes.table__item_six
                        )}
                      >
                        {item.productionDate}
                      </div>
                      <div
                        className={classNames(
                          classes.table__item,
                          classes.table__item_seven
                        )}
                      >
                        {item.numberReturnDocument}
                      </div>
                      <div
                        className={classNames(
                          classes.table__item,
                          classes.table__item_eight
                        )}
                      >
                        {item.plantDocumentNumber}
                      </div>
                      <div
                        className={classNames(
                          classes.table__item,
                          classes.table__item_nine
                        )}
                      >
                        {item.movingToDefectWarehouse}
                      </div>
                      <div
                        className={classNames(
                          classes.table__item,
                          classes.table__item_ten
                        )}
                      >
                        {item.releaseDate}
                      </div>
                      <div
                        className={classNames(
                          classes.table__item,
                          classes.table__item_eleven
                        )}
                      >
                        {item.result}
                      </div>
                    </div>                  
                  <div className={classNames(classes.list__button__box)}>
                    <ButtonUpdate numberId={item.id} />
                    <ButtonDeleteWarranty setid={item.id} />
                  </div>
              </div>
            </li>
        ))
      }
        
    </ol>
  )
})

export default TabelList