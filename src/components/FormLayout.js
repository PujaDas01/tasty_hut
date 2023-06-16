import React from 'react';
import '../style/commonStyle.css';
import {FaHandshake} from 'react-icons/fa';

const FormLayout = (props) => {

  return (
    <div className='authWrapper'>
        <div className='leftFormContainer'>
            <div className='leftFormContent'>
                <h1>{props.formHeading}</h1>
                    {props.children}
            </div>
        </div>
        <div className='rightFormContainer'>
            <div className='glassBg'>
                <div className='circleContainer positionIcon1'>
                    <FaHandshake className='handShakeIcon' color={'rgb(243, 190, 46)'} />
                </div>
                <div className='circleContainer positionIcon2'>
                    <p className='pointsIcon'>💯</p>
                </div>
                <div className='glassContent'>
                    <h1 className='rightGlassBoxHeading'>{props.rightHeading}</h1>
                    <div className='rightGlassBoxImgContainer'>
                        <img className={props.translate && 'translateImg'} src={props.imageSrc} alt={props.imageAlt} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormLayout;