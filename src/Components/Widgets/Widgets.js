import './widgets.scss'
import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Widgets({type,amount,change,changeNumber,icon,bgcolor}) {
    const iconStyle={
         backgroundColor:bgcolor
    }
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{type}</span>
        <span className="counter">{amount}</span>
        <div className={`percentage ${change}`}>
        {change==="positive"?<ArrowUpwardIcon/>:<ArrowDownwardIcon/>}
        {changeNumber}
        <span className="seen">Since last week</span>
        </div>
       
      </div>
      <div className="right">
      {React.cloneElement(icon, { className: "icon",style: iconStyle, })}
      </div>
    </div>
  )
}

export default Widgets
