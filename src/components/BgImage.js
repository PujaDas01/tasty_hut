import {BsFillArrowUpRightCircleFill} from 'react-icons/bs';
import '../style/commonStyle.css';

const BgImage = (props) => {
  return (
    <div className={`bgPictureWrapper ${props.bgImageClassName}`}>
        <div className='dishNameBox'>
            <p>{props.dishName}</p>
            <span></span>
            <button>
                <BsFillArrowUpRightCircleFill className='arrowBtnIcon' color={'#fbfcfc'} size={28} />
            </button>
        </div>
    </div>
  )
}

export default BgImage;