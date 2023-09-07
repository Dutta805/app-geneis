import React from 'react';
import LoginBox from '../components/LoginBox';
import Navbar from '../components/Navbar/Navbar';
import Logo from '../images/natwestgroup.png';
import { LoginBoxWrapper } from '../pagesStyles/login';

const LoginPage = () => {
  return (
    <>
      <Navbar imgSrc={Logo} />
      <LoginBoxWrapper>
        <LoginBox />
      </LoginBoxWrapper>
    </>
  );
};

LoginPage.isPublic = true;

export default LoginPage;
