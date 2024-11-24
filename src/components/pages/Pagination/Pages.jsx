import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../../../index'
import Pagination from 'react-bootstrap/Pagination';
import classes from './Pages.module.css'
import classNames from 'classnames';


const Pages = observer(() => {
  const {examination}  = useContext(Context)
  console.log(examination.page)
    const pageCount = Math.ceil(examination.totalCount / examination.limit)
    const pages = []
    for(let i = 0; i < pageCount; i++) {
        pages.push(i + 1)

    }



  return (
    <Pagination className={classNames(classes.pagination)}>
        {
            pages.map(page => 
                <Pagination.Item 
                key={page} 
                active={examination.page === page}
                onClick={() => examination.setPage(page)}
                // className={classNames(classes.pagination__item)}
                >{page}</Pagination.Item>
            )
        }
    </Pagination>
  )
})

export default Pages