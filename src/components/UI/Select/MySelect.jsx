import React from 'react'
import Select from 'react-select';


function MySelect({props, options, defaultValue}) {
    console.log(options)
  return (
    <div >
        <Select {...props}
          defaultValue={defaultValue}
          options={options}
        />
    </div>
  )
}



export default MySelect
