import React, { useMemo } from 'react'

function SortedList({sort, list}) {

  return  useMemo(() => {
        if(sort) {
            return list.slice().filter(list => list.manager.toLowerCase().includes(sort))
        }
        return list
    }, [sort, list])
 
}

export default SortedList