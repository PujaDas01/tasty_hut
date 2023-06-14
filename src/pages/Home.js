import React from 'react';
import CustomButton from '../components/CustomButton';
import {BsFillArrowUpRightCircleFill} from 'react-icons/bs';
import {AiFillAndroid, AiFillApple} from 'react-icons/ai';
import {IoMdStar} from 'react-icons/io';

const Home = () => {
  return (
    <div className='homeWrapper'>
      <section className='topBannerWrapper'>
        <div className='bannerBox1Container'>
          <div className='bannerBox1_left'>
            <CustomButton
              buttonClassName='foodForeverBtn'
              buttonStyle={{fontWeight: '500'}}
              buttonText='BEST FOOD FOREVER'
            />
            <h1>FOOD <br/> LOVER'S <br/> PARADISE</h1>
            <CustomButton
              buttonClassName='orderNowBtn'
              buttonText='ORDER NOW'
            />
          </div>
          <div className='bannerBox1_right'>
            <button className='arrowBtn'>
              <BsFillArrowUpRightCircleFill className='arrowIcon' color={'white'} size={35} />
              </button>
          </div>
        </div>
        <div className='bannerBox2Container'>
        </div>
      </section>



      <section className='bottomBannerWrapper topBannerWrapper'>
        <div className='bannerBox1Container bannerBox3Container'>
          <div className='bannerBox1_left bannerBox3_left'>
            <img src='././../images/cheese-burger.png' alt='Cheeseburger' width='180px' height='120px' />
          </div>
          <div className='bannerBox1_right bannerBox3_right'>
            <h2>Cheddar <br/> Cheeseburger</h2>
            <div className='buyNowContainer'>
              <h3>$5.30</h3>
              <CustomButton
                buttonClassName='orderNowBtn'
                buttonText='Buy Now'
              />
            </div>
          </div>
        </div>
        <div className='bannerBox4Container'>
          <div className='iconContainer'>
            <div className='commonCircle'><AiFillAndroid className='icon'/></div>
            <div className='commonCircle appleIconContainer'><AiFillApple className='icon'/></div>
          </div>
          <h3>Download Tastyhut</h3>
          <p>And Get 10% Chashback</p>
          <div className='ratingContainer'>
            <h4>4.9</h4>
            <div className='ratingIconContainer'>
              <IoMdStar/>
              <IoMdStar/>
              <IoMdStar/>
              <IoMdStar/>
              <IoMdStar/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;