import React from 'react'
import styled from 'styled-components'
import Klmainlogo from '../static/images/klmainlogo.png'
import {  Link } from "react-router-dom";       

const Navbars = styled.div`
    padding: 5px;
`;

const NavbarHr = styled.div`
    border-color: #A51C24;
    color: #A51C24;
    background-color: #A51C24;
`;

const NavbarHeader = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 6vh;
    text-align: center;
    align-items: center;
`;

const Username = styled.p`
    font-weight: bold;
    margin-right: 20px;
`;

const KlLogo = styled.img`
    margin-left: 10px;
    width: 100px;
`;

const NavbarTitle = styled.h2`
    text-align: center;
`;

const NavBottom = styled.div`
    background-color: #A51C24;
    display: flex;
    width: 100%;
    height: 6.5vh;
    margin-bottom: 5px;
    justify-content: space-between;
    align-items: center;
`;

const NavLogo = styled.div`
    color: white;
    width: 120px;
    height: 6.5vh;
    background-color: #337ab7;
    shape-outside: polygon(0 0, 50% 0%, 90% 50%, 50% 100%, 0 100%);
    clip-path: polygon(0 0, 60% 0%, 85% 60%, 60% 100%, 0 100%);
    shape-margin: 10px;
    font-size: 20px;
    font-family: 'Caveat', cursive;
`;

const NavLogoText = styled.p`
    margin-left: 10px;
    margin-top: 10px;
`;

const NavLogout = styled.div`
    display: flex;
    color: white;
`;

function Navbar() {
  return (
    <React.Fragment>
        <Navbars>
            <NavbarHr />
            <NavbarHeader>
                <KlLogo src={Klmainlogo} />
                <NavbarTitle>KLU Placement Tracker</NavbarTitle>
                <Username>Nanda Kumar</Username>
            </NavbarHeader>
            <NavBottom>
                <NavLogo>
                    <NavLogoText>KLU T</NavLogoText>
                </NavLogo>
                    <Link to="/nandu">Dogs</Link>
                    <Link to="/updateprofile">Update Profile</Link>
                    <Link to="/leaderboard">Leaderboard</Link>
                <NavLogout>
                    <p>Logout</p>
                </NavLogout>
            </NavBottom>
        </Navbars>

    </React.Fragment>
  )
}

export default Navbar