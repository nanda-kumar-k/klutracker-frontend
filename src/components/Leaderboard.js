import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';

const LeaderContainer = styled.div`
    height: 85.5vh;
    
`;

const UserProfileContainer = styled.div`
    width: 30vw;
    height: 200vh;
    /* background-color: yellow; */
`;

const CodingProfileContainer = styled.div`
    
    height: 200vh;
    overflow-x: scroll;
    
    /* background-color: green; */
`;

const LeaderboardHeader = styled.div`
    height: 74px;
    display: flex;
    /* background-color: red; */
    overflow-y: hidden;
`;

const LeaderboardData = styled.div`
    height: 74.5vh;
    display: flex;
    /* background-color: red; */
    overflow-y: scroll;
`;

const Table = styled.table`
    width: ${(props)=> props.wi};
    border: 1px solid black;
    border-collapse: collapse;
`;

const Tr = styled.tr`
    background: rgb(178, 235, 242)
`;

const Th = styled.th`
    text-align: center;
    border: 1px solid black;
    border-collapse: collapse;
    height: 40px;
    position: sticky;
    top: 0vh;
`;

const Td = styled.td`
    width: ${(props)=> props.wi};
    border: 1px solid black;
    border-collapse: collapse;
    height: 30px;
    text-align: center;
    align-items: center;
    text-overflow: ellipsis;
`;

const Name = styled.p`
    width: ${(props)=> props.wi};
    overflow: hidden;
    height: 30px;
    text-align: center;
    align-items: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: -5px;
`;



function leaderboard() {
    
  return (
    <React.Fragment>
        <Navbar/>
        <LeaderContainer>
            <LeaderboardHeader>
                <UserProfileContainer>
                    <Table wi='30vw'>
                        <Tr>
                            <Th colSpan={4} >STUDENTS DETAILS</Th>
                        </Tr>
                        <Tr>
                            <Td wi='30px'>SNO</Td>
                            <Td wi='100px'>BRANCH</Td>
                            <Td wi='150px'>NAME</Td>
                            <Td wi='100px'>ROLL NO</Td>
                        </Tr>
                    </Table>
                </UserProfileContainer>
                <CodingProfileContainer>
                    <Table wi='100vw'>
                        <Tr>
                            <Th colSpan={5}>CODECHEF</Th>
                            <Th colSpan={4}>CODEFORCES</Th>
                            <Th colSpan={3}>CODEFORCES</Th>
                        </Tr>
                        <Tr>
                            <Td wi='150px'>Solved Count</Td>
                            <Td wi='150px'>Contest Parti...</Td>
                            <Td wi='150px'>Recent Contest</Td>
                            <Td wi='150px'>Rating</Td>
                            <Td wi='150px'>Higest Rating</Td>

                            <Td wi='150px'>Solved Count</Td>
                            <Td wi='150px'>Contest Parti...</Td>
                            <Td wi='150px'>User Rating</Td>
                            <Td wi='150px'>Higest Rating</Td>

                            <Td wi='150px'>Solved Count</Td>
                            <Td wi='150px'>Contest Parti...</Td>
                            <Td wi='150px'>Rating</Td>
                        </Tr>
                        <Tr>
                        </Tr>
                    </Table>
                </CodingProfileContainer>
            </LeaderboardHeader>
            <LeaderboardData>
                    <UserProfileContainer>
                    <Table wi='30vw'>
                        <Tr>
                            <Td wi='33px'>1</Td>
                            <Td wi='100px'>CSE(H)</Td>
                            <Td wi='150px' ><Name wi='150px'>Nanda Kmar K</Name></Td>
                            <Td wi='100px'>ROLL NO</Td>
                        </Tr>
                    </Table>
                </UserProfileContainer>
                <CodingProfileContainer>
                    <Table wi='100vw'>
                        <Tr>
                            <Td wi='150px'>Solved Count</Td>
                            <Td wi='150px'>Contest Parti...</Td>
                            <Td wi='150px'>Recent Contest</Td>
                            <Td wi='150px'>Rating</Td>
                            <Td wi='150px'>Higest Rating</Td>

                            <Td wi='150px'>Solved Count</Td>
                            <Td wi='150px'>Contest Parti...</Td>
                            <Td wi='150px'>User Rating</Td>
                            <Td wi='150px'>Higest Rating</Td>

                            <Td wi='150px'>Solved Count</Td>
                            <Td wi='150px'>Contest Parti...</Td>
                            <Td wi='150px'>Rating</Td>
                        </Tr>
                        <Tr>
                            <Td wi='150px'>Solved Count</Td>
                            <Td wi='150px'>Contest Parti...</Td>
                            <Td wi='150px'>Recent Contest</Td>
                            <Td wi='150px'>Rating</Td>
                            <Td wi='150px'>Higest Rating</Td>

                            <Td wi='150px'>Solved Count</Td>
                            <Td wi='150px'>Contest Parti...</Td>
                            <Td wi='150px'>User Rating</Td>
                            <Td wi='150px'>Higest Rating</Td>

                            <Td wi='150px'>Solved Count</Td>
                            <Td wi='150px'>Contest Parti...</Td>
                            <Td wi='150px'>Rating</Td>
                        </Tr>
                        
                    </Table>
                </CodingProfileContainer>
            </LeaderboardData>
        </LeaderContainer>
    </React.Fragment>
  )
}

export default leaderboard;