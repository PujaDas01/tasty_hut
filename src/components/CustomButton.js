import React from 'react';
import '../style/commonStyle.css';

const CustomButton = (props) => {
  return (
    <>
      {props.buttonType === 'secondary' ? 
        (<div className={`secondaryButtonContainer ${props.secondaryContainerClassName}`}>
          <button className={`secondaryButton ${props.secondaryClassName}`} style={props.secondaryStyle} onClick={props.onClick}>{props.buttonText}</button>
        </div>) :
        (<div style={props.customWrapperStyle} className='customButtonContainer'>
          <button className={`customButton ${props.buttonClassName}`} style={props.buttonStyle} onClick={props.onClick}>{props.buttonText}</button>
      </div>)}
    </>
  )
}

export default CustomButton;