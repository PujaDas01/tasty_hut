import React, {useState} from 'react';
import FormLayout from '../../components/FormLayout';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { emailValidator } from '../../service/EmailValidator';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginHandler = () => {
        let emailTrimmedValue = email.trim(); 
      
        emailValidator(email);
        if(!emailTrimmedValue) {
          alert('Please enter your email id.');
        } else if(!emailValidator(emailTrimmedValue)) {
          alert('Invalid email.');
        } else if(password.length < 6) {
          alert('Password must consist 6 characters.');
        } else {
          alert('Logged In Successfully.');
        }
      }

  return (
    <FormLayout
        formHeading='Login'
        rightHeading='Very good foods are waiting for you🤞 Login Now'
        imageSrc='../../images/chef-taste.png'
        imageAlt='Chef'
    >
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
        <CustomButton
            buttonClassName='authBtn'
            buttonText='Login'
            onClick={onLoginHandler}
        />
    </FormLayout>
  )
}

export default Login;