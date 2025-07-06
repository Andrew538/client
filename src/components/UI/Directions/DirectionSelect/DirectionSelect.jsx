import React, { useState } from 'react'
import Select from 'react-select';

const DirectionSelect = ({options}) => {

    const [day, setDay] = useState(day)



    

  return (
    <Select
      defaultValue={options[0]}
    //   onChange={(day) => setDay(day.value)}
      options={options}
    />
  );
}

export default DirectionSelect