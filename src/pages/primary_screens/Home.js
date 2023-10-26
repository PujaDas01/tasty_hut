import React from 'react';
import CustomButton from '../../components/CustomButton';
import {BsFillArrowUpRightCircleFill} from 'react-icons/bs';
import {AiFillAndroid, AiFillApple} from 'react-icons/ai';
import {FiSearch} from 'react-icons/fi';
import {IoMdStar} from 'react-icons/io';
import BgImage from '../../components/BgImage';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <>
      <div className='commonWrapper'>
        <section className='topBannerWrapper'>
          <div className='bannerBox1Container'>
            <div className='bannerBox1_left'>
              <div className='bestFoodContainer'>
                <p>BEST FOOD FOREVER</p>
              </div>
              <h1>FOOD <br/> LOVER'S <br/> PARADISE</h1>
              <CustomButton
                buttonText='ORDER NOW'
              />
            </div>
            <div className='bannerBox1_right'>
              <button className='arrowBtn'>
                <BsFillArrowUpRightCircleFill className='arrowIcon' color={'#fbfcfc'} size={50} />
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
            <p>And Get 10% Cashback</p>
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
        <section className='recipeWrapper'>
          <div className='recipeHeaderBox'>
            <div className='recipeTopicContainer'>
              <h1>Recipes</h1>
            </div>
            <div className='searchInputContainer'>
              <div className='iconSearchBox'>
                <FiSearch className='searchIcon'/>
                <input type='text' className='searchInput' placeholder='Search Recipe And More...' />
              </div>
            </div>
          </div>
          <div className='recipeBottomBox'>
            <div className='recipeButtonContainer'>
              <CustomButton
                buttonType='secondary'
                buttonText='Burger'
              />
              <CustomButton
                buttonType='secondary'
                buttonText='Pizza'
              />
              <CustomButton
                buttonType='secondary'
                buttonText='Salad'
              />
              <CustomButton
                buttonType='secondary'
                buttonText='Dessert'
              />
            </div>
            <BgImage
              bgImageClassName='recipeBgContainer'
              bgImage='pizza5.jpg'
              dishName='Sausage Pizza'
            />
            <div className='dishContainer'>
              <div className='dishBox1'>
              </div>
              <div className='dishBox2'>
                <p>30+</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  )
}

export default Home;