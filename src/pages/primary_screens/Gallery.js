import React from 'react';
import BgImage from '../../components/BgImage';

const Gallery = () => {
  return (
    <div className='commonWrapper galleryWrapper'>
      <section>
        <BgImage
          bgImageClassName='galleryImage1'
          dishName='Crispy Fried Chicken'
        />
        <BgImage
          bgImageClassName='galleryImage2'
          dishName='Pizza With Sausage'
        />
      </section>
      <section>
        < BgImage
            bgImageClassName='galleryImage1 galleryImage3'
            dishName='Pasta In Tomato Sauce'
        />
        <BgImage
          bgImageClassName='galleryImage2 galleryImage4'
          dishName='Mexican Tacos'
        />
      </section>
    </div>
  )
}

export default Gallery;