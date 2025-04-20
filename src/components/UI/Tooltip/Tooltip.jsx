import React, { useEffect, useState } from 'react'
import './Tooltip.css'
import { useMemo } from 'react';
const Tooltip = ({ children, newerror, close, validate, text, ...rest}) => {
    const [show, setShow] = useState(false);
    const [clos, setClos] = useState()
  


    useMemo(() => {
        if(newerror.length
        ) {
            setShow(true)
    
    }  else if(close) {
        console.log(close === false)
        setShow(false)
    }

    }, [newerror, close])

    useEffect(() => {
        
     
    }, [newerror])
    

    // useEffect(() => {
    //    if (!newerror) {
       

    //     setShow(false)
    // }
     
    // }, [newerror])
    


    return (
      <div className="tooltip-container">
        <div className={show ? "tooltip-box visible" : "tooltip-box"}>
          {text}
          <span className="tooltip-arrow" />
        </div>
        <div
            
        
          {...rest}
        >
          {children}
        </div>
      </div>
    );
  };

export default Tooltip