import React from 'react'
import styled from 'styled-components'
import klubg from '../static/images/klu.gif'
import klulogo from '../static/images/klulogo.png'

const Bodyconatiner = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const Navbar = styled.div`
    background-color: #A51C24;
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
`;

const LoginA = styled.a`
    text-decoration: none;
    color: white;
    display: flex;
`;

const ImgContainer = styled.div`
    width: 100%;
    height: 92vh;
`;

const BgImage = styled.img`
    width: 100%;
    height: 100%;
`;

const Footer = styled.div`
    width: 100%;
    height: 3vh;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: #A51C24;
    color: white;
`;

const LoginContainer = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    display: ${(props) => props.loginChoice};
    width: 100vw;
    height: 100vh;
    justify-content: center
`;

const LoginHeader = styled.div`
    width: 25vw;
    height: 70vh;
`;

const LogoContainer = styled.div`
    width: 100%;
    height: 6vh;
    background-color: #A51C24;
    margin-top: 5vh;
    display: flex;
    position: relative;
    justify-content: center;
`;


const LogoImgContainer = styled.div`
    width: 60px;
    height: 60px;
    background-color: #A51C24;
    border-radius: 50%;
    margin-top: -4vh;
    padding: 0.5%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoImg = styled.img`
    width: 55px;
    height: 55px;
`;

const LoginClose = styled.div`
    position: absolute;
    right: 5px;
    color: aliceblue;
    cursor: pointer;
`;


const LoginBody = styled.div`
    width: 20vw;
    height: 50vh;
    padding: 3vh 2.5vw;
    background-color: white;
`;

const LoginFooter = styled.div`
    width: 25vw;
    height: 5vh;
    text-align: center;
    background-color: #A51C24;
`;

function Login() {

    const [loginChoice, setLoginChoice] = React.useState('none');

  return (
    <React.Fragment>
          <Bodyconatiner>
                <Navbar>
                    <LoginA href="#"  onClick={()=> {setLoginChoice('flex')}}>
                        <h3>Login</h3>
                    </LoginA>
                </Navbar>
                <ImgContainer>
                    <BgImage src={klubg} alt="klu" />
                </ImgContainer>
                <Footer>
                    <p>© Copyright 2021 by KLU PP . All Rights Reserved.</p>
                </Footer>
                <LoginContainer loginChoice = {loginChoice}>
                    <LoginHeader>
                        <LogoContainer>
                            <LogoImgContainer>
                                <LogoImg src={klulogo} alt="klu" />
                            </LogoImgContainer>
                            <LoginClose  onClick={()=> {setLoginChoice('none')}}>
                                &#10060;
                            </LoginClose>
                        </LogoContainer>
                        <LoginBody>
                            
                        </LoginBody>
                        <LoginFooter>
                            <p>© Copyright 2019 by K L Deemed to be University.</p>
                        </LoginFooter>
                    </LoginHeader>
                </LoginContainer>
            </Bodyconatiner>
    </React.Fragment>
  )
}

export default Login;
