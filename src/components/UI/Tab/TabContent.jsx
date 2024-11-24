import React from 'react'

const TabContent = ({ title, content }) => {
   
  return (
    <div>
      <h3>{title}</h3>
      <div>{content}</div> 
    </div>
  )
}

export default TabContent