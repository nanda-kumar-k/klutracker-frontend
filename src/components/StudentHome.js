import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';

const StudentContainer  = styled.div`
    width: 100vw;
    height: 85.5vh;
    background-color: red;
    display: flex;
`;

const StudentProfile = styled.div`
    width: 43vw;
    height: 85.5vh;
    padding: 0 1vw;
    background-color: black;
`;


const StudentMainProfile = styled.div`
    width: 45vw;
    display: flex;
    height: 30vh;
    background-color: orangered;
`;

const StudentImgContainer = styled.div`
    width: 15vw;
    height: 30vh;
    background-color: green;
`;

const StuImg = styled.img`
    width: 100%;
    height: 100%;
`;

const StuMainInfo = styled.div`
    width: 28vw;
    height: 30vh;
    background-color: pink;
`;


const StudentCodeingProfile = styled.div`
    width: 55vw;
    height: 85.5vh;
    background-color: orange;
`;

function StudentHome() {
  return (
    <React.Fragment>
        <Navbar/>
        <StudentContainer>
            <StudentProfile>
                <StudentMainProfile>
                    <StudentImgContainer>
                    </StudentImgContainer>
                    <StuMainInfo>
                    </StuMainInfo>
                </StudentMainProfile>
            </StudentProfile>
            <StudentCodeingProfile>
            </StudentCodeingProfile>
        </StudentContainer>
    </React.Fragment>
  )
}


export default StudentHome;
