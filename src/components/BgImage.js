import {BsFillArrowUpRightCircleFill} from 'react-icons/bs';
import '../style/commonStyle.css';

const BgImage = (props) => {
  return (
    <>
    {props.bgImage ? ( 
      <div style={{
        ...props.bgImageStyle, 
        backgroundImage: `url(../images/${props.bgImage})`
        }} 
        className={`bgPictureWrapper ${props.bgImageClassName}`} onClick={props.onContainerClick}>
      {props.bgText === 'text' ? (<h2 className={props.className}>{props.text}</h2>) : 
        (<div className='dishNameBox'>
            <p>{props.dishName}</p>
            <span></span>
            <button className='arrowButton' onClick={props.onClick}>
              <BsFillArrowUpRightCircleFill className='arrowBtnIcon' color={'#fbfcfc'} size={28} />
            </button>
            {props.additionalText ?
            (<button style={props.additionalBtnStyle} className='additionalBtn' onClick={props.additionalBtnClick}>{props.btnText}</button>)
            :
            ('')
            }
        </div>)}
    </div>
    ) : (
      <div className={`bgPictureWrapper selectImageBox`} onClick={props.onContainerClick}>
      {props.bgText === 'text' ? (<h2 className={props.className}>{props.text}</h2>) : 
        (
          <img src={`../images/${props.imageSource}`} alt={props.imageSource} height='auto' width='100%' />
        )}
    </div>
    )}
    </>
  )
}

export default BgImage;