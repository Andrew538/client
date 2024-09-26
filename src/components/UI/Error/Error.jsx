import React from 'react'

function Error({errRequest}) {
    console.log({errRequest})
  return (
    <div>{errRequest}</div>
  )
}

export default Error