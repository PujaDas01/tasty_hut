import React, { useState } from 'react';
import ShowModal from './ShowModal';
import BgImage from './BgImage';

const Modal = (props) => {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);

  return (
    <div className='commonWrapper'>
      {props.imageValue ? (
        <BgImage
          imageSource={props.imageValue}
          onContainerClick={() => setShowModal(true)}
        />) : (
        <BgImage 
          bgText='text'
          text='Click To Select an Image'
          onContainerClick={() => setShowModal(true)}>
        </BgImage>) 
      }
      {showModal && <ShowModal imageList={props.list} pickImage={props.selectHandler} closeModal={closeModal} />}
    </div>
  )
}

export default Modal;