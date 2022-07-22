import "./styles.css"
import React from 'react'


const Name = (props) => {
   return <div className="outer-div">
       Hello My Name is <span className="font-weight-bold text-success">{props.name}</span>
   </div>
}

export default Name; 