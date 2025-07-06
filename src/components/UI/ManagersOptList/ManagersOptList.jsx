import { observer } from 'mobx-react-lite'
import React from 'react'
import { useContext } from 'react'
import { Context } from '../../..'
import ManagersTab from './ManagersTab/ManagersTab'
import { allUsers } from '../../http/userAPI'

const ManagersOptList = observer(() => {
  const {allUser} = useContext(Context)
        
   
  return (
    <div>
        <ManagersTab
            items={allUser.allUser}
        />
    </div>
  )
})

export default ManagersOptList