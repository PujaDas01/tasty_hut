import React, {useState} from 'react';
import {FaHandshake} from 'react-icons/fa';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate();

const onSignUpHandler = () => {
  let firstNameTrimmedValue = firstName.trim(); 
  let lastNameTrimmedValue = lastName.trim(); 
  let emailTrimmedValue = email.trim(); 

  emailValidator(email);
  if(!firstNameTrimmedValue) {
    alert('Please enter your Firstname');
  } else if(!isNaN(firstNameTrimmedValue[0])) {
    alert('First letter of Firstname cannot be a number.')
  } else if(!lastNameTrimmedValue) {
    alert('Please enter your Lastname');
  } else if(!isNaN(lastNameTrimmedValue)) {
    alert('First letter of Lastname cannot be a number.')
  } else if(!emailTrimmedValue) {
    alert('Please enter your email id.');
  } else if(!emailValidator(emailTrimmedValue)) {
    alert('Invalid email.');
  } else if(password.length < 6) {
    alert('Password must consist 6 characters.');
  } else {
    alert('Signed Up Successfully.');
  }
}

const emailValidator = (value) => {
  const regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if(regexEmail.test(value)) {
    return true;
  } else {
    return false;
  }
}

  return (
    <div className='signUpWrapper'>
      <div className='leftSignUpContainer'>
        <div className='leftSignUpContent'>
          <h1>SignUp</h1>
          <CustomInput
            type='text'
            inputId='firstName'
            placeholder='Enter your Firstname'
            labelText='Firstname'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <CustomInput
            type='text'
            inputId='lastName'
            placeholder='Enter your Lastname'
            labelText='Lastname'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <CustomInput
            type='email'
            inputId='email'
            placeholder='Enter your Email'
            labelText='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            type='password'
            inputId='password'
            placeholder='Enter your Password'
            labelText='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>Already have an account, 
            {/* <button onClick={() => navigate('/')}>Login</button> */}
            <Link to='/'> Login</Link>
          </p>
          <CustomButton
            buttonClassName='signUpBtn'
            buttonText='SignUp'
            onClick={onSignUpHandler}
          />
        </div>
      </div>
      <div className='rightSignUpContainer'>
        <div className='glassBg'>
          <div className='circleContainer positionIcon1'><FaHandshake className='handShakeIcon' color={'rgb(243, 190, 46)'} /></div>
          <div className='circleContainer positionIcon2'><p className='pointsIcon'>💯</p></div>
          <div className='glassContent'>
            <h1>Very good foods are <br/> waiting for you🤞<br/>SignUp Now</h1>
            <div className='signUpImageContainer'>
              <img src='../../images/chef.png' alt='Chef' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;