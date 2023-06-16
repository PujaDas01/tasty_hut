import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { Link } from 'react-router-dom';
import { emailValidator } from '../../service/EmailValidator';
import FormLayout from '../../components/FormLayout';
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

  return (
    <FormLayout
      translate
      formHeading='SignUp'
      rightHeading='Very good foods are waiting for you🤞 SignUp Now'
      imageSrc='../../images/chef.png' 
      imageAlt='Chef'
    >
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
      <p className='haveAnAccount'>Already have an account? 
        {/* <button onClick={() => navigate('/')}>Login</button> */}
        <Link to='/'> Login</Link>
      </p>
      <CustomButton
        buttonClassName='authBtn'
        buttonText='SignUp'
        onClick={onSignUpHandler}
      />
    </FormLayout>
  )
}

export default SignUp;