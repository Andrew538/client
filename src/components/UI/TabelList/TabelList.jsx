import { observer } from 'mobx-react-lite'
import React from 'react'

const TabelList = observer(({ list, date}) => {
   console.log(date)
  return (
    <ol>
        <li>
            <div className="">
                <div className="">
                    <div>{}</div>
                    <div>{}</div>
                    <div>{}</div>
                    <div>{}</div>
                    <div>{}</div>
                    <div>{}</div>
                    <div>{}</div>
                    <div>{}</div>
                    <div>{}</div>
                    <div>{}</div>
                    <div>{}</div>
                </div>
            </div>
        </li>
    </ol>
  )
})

export default TabelList