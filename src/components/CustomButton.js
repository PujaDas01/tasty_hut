import React from 'react';
import '../style/commonStyle.css';

const CustomButton = (props) => {
  return (
    <div className='customButtonWrapper'>
        <button className={`customButton ${props.buttonClassName}`} style={props.buttonStyle} onClick={props.onClick}>{props.buttonText}</button>
    </div>
  )
}

export default CustomButton;