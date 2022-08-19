import styled from 'styled-components'
import klubg from '../static/images/klu.gif'
import klulogo from '../static/images/klulogo.png'
import React, { useEffect, useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from "gapi-script";
import { Navigate } from "react-router-dom";
import Navbar from './Navbar';
// import App from './Apps';


const Bodyconatiner = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const Navbars = styled.div`
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
    height: 30vh;
    padding: 3vh 2.5vw;
    background-color: white;
`;

const LoginFooter = styled.div`
    width: 25vw;
    height: 5vh;
    text-align: center;
    background-color: #A51C24;
`;

export const UserContext = React.createContext();


function Login() {

    useEffect(() => {
        gapi.load("auth2", 
    () => {
        gapi.client.init({
          clientId:
            '887149817062-sd5m283jb38o0hi12ksiot85bar7qae1.apps.googleusercontent.com',
            plugin_name: "chat",
            scope: "profile email",
            cookiepolicy: 'single_host_origin',
            
        })
      }); 
    } , []);

    
    /* gapi.load("client:auth2", 
    () => {
        gapi.client.init({
          clientId:
            '887149817062-sd5m283jb38o0hi12ksiot85bar7qae1.apps.googleusercontent.com',
            plugin_name: "chat",
        })
      }); */

    const [email, setEmail] = useState('');
    const [imageurl , setImageurl] = useState('');
    

    const [loginChoice, setLoginChoice] = React.useState('none');
    const onLoginSuccess = (res) => {
        console.log(res);
        setEmail(res.profileObj.email);
        setImageurl(res.profileObj.imageUrl);
        console.log(res.profileObj.imageUrl);
        console.log(res.profileObj.email);
        console.log(res.profileObj.name);
        window.localStorage.setItem('email', res.profileObj.email);
        window.localStorage.setItem('imageurl', res.profileObj.imageUrl);
        window.localStorage.setItem('name', res.profileObj.name);
        window.location.href = '/updateprofile';
        /* window.location.href = `/updateprofile/${res.profileObj.email}/${res.profileObj.imageUrl}`; */
    };

    const onLoginFailure = (res) => {
        setLoginChoice('flex');
        /* console.log('Login Failed:', res); */
    };

    

    return (
    <UserContext.Provider value={'nanduuuu'}>
          <Bodyconatiner>
                <Navbars>
                    <LoginA href="#"  onClick={()=> {setLoginChoice('flex')}}>
                        <h3>Login</h3>
                    </LoginA>
                </Navbars>
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
                                <GoogleLogin
                                    clientId="887149817062-sd5m283jb38o0hi12ksiot85bar7qae1.apps.googleusercontent.com"
                                    buttonText="Sign In Google"
                                    onSuccess={onLoginSuccess}
                                    onFailure={onLoginFailure}
                                    cookiePolicy={'single_host_origin'}
                                    isSignedIn={true}
                                /> 
                            </LoginBody>
                        <LoginFooter>
                            <p>© Copyright 2019 by K L Deemed to be University.</p>
                        </LoginFooter>
                    </LoginHeader>
                </LoginContainer>
            </Bodyconatiner>
       
    </UserContext.Provider>
  )
}


export default Login;
