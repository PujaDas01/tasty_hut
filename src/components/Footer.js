import React from 'react';
import Navbar from './Navbar';
import {RiFacebookCircleFill} from 'react-icons/ri';
import {AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai';
import CustomButton from './CustomButton';

const Footer = () => {
  return (
    <div className='commonWrapper footerWrapper'>
        <section className='getInTouchContainer'>
            <div className='getInTouchHeaderContainer'>
                <h1>Get In Touch</h1>
                <p>For More Information About Our Company Or If There Any Other Questions, Please Contact Us.</p>
            </div>
            <div className='emailContainer'>
                <div className='emailBox'>
                    <input type='email' placeholder='Enter Your Email Address...' />
                    <CustomButton
                        customWrapperStyle={{paddingTop: '0px', paddingBottom: '0px'}}
                        buttonText='Submit'
                    />
                </div>
            </div>
        </section>
        <section className='footerBottomContainer'>
            <div className='navbarComponent'>
                <div className='navbarBox'>
                    <Navbar/>
                </div>
                <div className='socialMediaHandlesContainer'>
                    <div className='socialMediaCircle'>
                        <a href="https://www.facebook.com/profile.php?id=100021761470026&mibextid=ZbWKwL" rel="noreferrer" target='_blank'><AiFillInstagram size={20}/></a>
                    </div>
                    <div className='socialMediaCircle'>
                        <a href="https://www.facebook.com/profile.php?id=100021761470026&mibextid=ZbWKwL" rel="noreferrer" target='_blank'><RiFacebookCircleFill size={20}/></a>
                    </div>
                    <div className='socialMediaCircle'>
                        <a href="https://www.facebook.com/profile.php?id=100021761470026&mibextid=ZbWKwL" rel="noreferrer" target='_blank'><AiFillTwitterCircle size={20}/></a>
                    </div>
                </div>
            </div>
            <hr />
            <p>@copyright2023tastyhut</p>
        </section>
    </div>
  )
}

export default Footer;