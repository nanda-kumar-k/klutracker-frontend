import React, { useEffect } from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import {useState} from 'react';

const BodyConatiner = styled.div`
        width: 90vw;
        height: 79.5vh;
        padding: 3vh 5vw; 
        overflow-y: scroll;
    `
    
    const Title = styled.h3`
        text-align: center;
        padding: 1vh 0;
        color: white;
        font-size: 18px;
        background: linear-gradient(45deg, transparent 0%, transparent 57%, #423246 100%), linear-gradient(-45deg, #8f5046 0%, #A14436 0.3%, #4C2556 112%, transparent 11% ), linear-gradient(-90deg, #A14436 100%, #A14436 65%, transparent 20% );
    `;

    const StudentContainer = styled.div`
      width: 82vw;
      height: ${(props) => props.size};
      padding: 2vh 4vw;
      background-color: #fff;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
      margin-bottom: 50px;
    `;

    const EachRow = styled.div`
      display: flex;
      width: 100%;
      height: 10vh;
      justify-content: space-between;
      margin-bottom: 5px;
    `;

    const EachRowLabel = styled.div`
       align-items: left;
       text-align: left;
    `;

    const OptionTitle = styled.h3`
        font-size: 16px;
        margin-bottom: 3px;
        
    `;

    const StudentInput = styled.input`
      width: 40vw;
      height: 5vh;
      font-size: 18px;
      /* box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3); */
    `;

    const SlectInput = styled.select`
      width: 40.25vw;
      height: 5.40vh;
      option {
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
      }
    `
    const InputWithLabel = styled.div`
        display: flex;
        width: 40vw;
        background-color: #beb9b97b;
        border-width: 0.2px;
        /* border-style: solid; */
    `;

    const InputWithLabelLeft = styled.div`
        width: ${(props) => props.size};
        align-items: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        height: 5vh;
        color: #3498db;
        border-width: 0.2px;
        border-style: solid;
        border-right: none;
    `;

      const ButtonContainer = styled.div`
        display: flex;
        width: 100%;
        justify-content: center;
      `;

      const SubmitButton = styled.input`
        width: 10vw;
        height: 5vh;
        background-color: #3498db;
        color: white;
        border-radius: 5px;
        border-width: 0.2px;
        border-style: solid;
        border-color: #3498db;
        font-size: 18px;
        cursor: pointer;

      `;
      const CheckBoxContainer = styled.div`
        display: flex;
      `;

      const CheckBox = styled.input`
        width: 20px;
        height: 20px;
        margin-right: 5px;
      `;


function UpdateProfile() {
// background: #3498db;
// /*background:linear-gradient(rgb(99, 144, 160),white);*/
// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

const [IdNo, setIdNo] = useState('');
const [Name, setName] = useState('');
const [Dept, setDept] = useState('');
const [CrtChoice, setCrtChoice] = useState('');
const [Cgpa, setCgpa] = useState('');
const [Backlogs, setBacklogs] = useState('');
const [Linkdin, setLinkdin] = useState('');
const [Github, setGithub] = useState('');
const [Codechef, setCodechef] = useState('');
const [Codeforces, setCodeforces] = useState('');
const [LeetCode, setLeetCode] = useState('');
const [Vjudge, setVjudge] = useState('');
const [AWSCp, setAWSCp] = useState('');
const [AWSDa, setAWSDa] = useState('');

    const [users, setUser] = useState(
        {
            IdNo: '',
            Name: '',
            Dept: '',
            CrtChoice: '',
            Cgpa: '',
            Backlogs: '',
            Linkdin: '',
            Github: '',
            Codechef: '',
            Codeforces: '',
            LeetCode: '',
            Vjudge: '',
            AWSCp: '',
            AWSDa: ''
        }
    )
  
    const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...users,
          [name]: value
      })
  }

    const Submit = (e) => {
        e.preventDefault(); 
        console.log(users);
    }

  return (
    <React.Fragment>
        <BodyConatiner>
          <Title>Student Profile</Title>
          <StudentContainer size='50vh'>
              <EachRow>
                  <EachRowLabel>
                      <OptionTitle>College Regestration Number</OptionTitle>
                      <InputWithLabel >
                            <StudentInput type='text' name="IdNo" onChange={handleChange} />
                      </InputWithLabel>

                  </EachRowLabel>
                  <EachRowLabel>
                      <OptionTitle>Full Name</OptionTitle>
                      <InputWithLabel>
                          <InputWithLabelLeft size='20vw'>Enter Full Name as for ERP</InputWithLabelLeft>
                          <StudentInput name="Name" onChange={handleChange} />
                      </InputWithLabel>
                  </EachRowLabel>
              </EachRow>
              <EachRow>
                  <EachRowLabel>
                      <OptionTitle>Department</OptionTitle>
                      <InputWithLabel>
                          <InputWithLabelLeft size='20vw'>Select Your Department</InputWithLabelLeft>
                          <SlectInput name='Dept' onChange={handleChange}>
                              <option value="" hidden>Select</option>
                              <option value="1">CSE(Honors)</option>
                              <option value="2">CSE(Regular)</option>
                              <option value="3">ECE</option>
                              <option value="4">EEE</option>
                              <option value="5">MECHANICAL</option>
                              <option value="6">IT</option>
                              <option value="7">CIVIL</option>
                          </SlectInput>
                      </InputWithLabel>
                  </EachRowLabel>
                  <EachRowLabel>
                      <OptionTitle>CRT OR NON-CRT</OptionTitle>
                      <InputWithLabel>
                          <InputWithLabelLeft size='15vw'>Select Your Choice</InputWithLabelLeft>
                          <SlectInput name='CrtChoice' onChange={handleChange}>
                              <option value="" hidden>Select</option>
                              <option value="1">YES</option>
                              <option value="2">NO</option>
                          </SlectInput>
                      </InputWithLabel>
                  </EachRowLabel>
              </EachRow>
              <EachRow>
                  <EachRowLabel>
                      <OptionTitle>Curreent CGPA</OptionTitle>
                      <InputWithLabel>
                          <InputWithLabelLeft size='20vw'>Curreent CGPA(As in ERP)</InputWithLabelLeft>
                          <StudentInput name='Cgpa' onChange={handleChange} />
                      </InputWithLabel>
                  </EachRowLabel>
                  <EachRowLabel>
                      <OptionTitle>No Of Active Backlogs</OptionTitle>
                      <InputWithLabel>
                          <InputWithLabelLeft size='20vw'>Enter No Of Active Backlogs</InputWithLabelLeft>
                          <StudentInput name='Backlogs' onChange={handleChange}/>
                      </InputWithLabel>
                  </EachRowLabel>
              </EachRow>
              <EachRow>
                  <EachRowLabel>
                      <OptionTitle>Linkdin</OptionTitle>
                      <InputWithLabel>
                          <InputWithLabelLeft size='21vw'>https://www.linkedin.com/in/</InputWithLabelLeft>
                          <StudentInput name='Linkdin' onChange={handleChange}/>
                      </InputWithLabel>
                  </EachRowLabel>
                  <EachRowLabel>
                      <OptionTitle>Github</OptionTitle>
                      <InputWithLabel>
                          <InputWithLabelLeft size='13vw'>https://github.com/</InputWithLabelLeft>
                          <StudentInput name='Github' onChange={handleChange} />
                      </InputWithLabel>
                  </EachRowLabel>
              </EachRow>
          </StudentContainer>
          <br/>
          <Title>Coding Profile</Title>
          <StudentContainer size='30vh'>
              <EachRow>
                  <EachRowLabel>
                      <OptionTitle>Codechef Handle</OptionTitle>
                      <InputWithLabel>
                          <InputWithLabelLeft size='28vw'>https://www.codechef.com/users/</InputWithLabelLeft>
                          <StudentInput name='Codechef' onChange={handleChange} />
                      </InputWithLabel>
                  </EachRowLabel>
                  <EachRowLabel>
                      <OptionTitle>Codeforces Handle</OptionTitle>
                      <InputWithLabel>
                          <InputWithLabelLeft size='25vw'>https://codeforces.com/profile/</InputWithLabelLeft>
                          <StudentInput name='Codeforces' onChange={handleChange} />
                      </InputWithLabel>
                  </EachRowLabel>
              </EachRow>
              <EachRow>
                  <EachRowLabel>
                      <OptionTitle>LeetCode Handle</OptionTitle>
                      <InputWithLabel>
                          <InputWithLabelLeft size='14vw'>https://leetcode.com/</InputWithLabelLeft>
                          <StudentInput name='LeetCode' onChange={handleChange} />
                      </InputWithLabel>
                  </EachRowLabel>
                  <EachRowLabel>
                      <OptionTitle>Vjudge Handle</OptionTitle>
                      <InputWithLabel>
                          <InputWithLabelLeft size='16vw'>https://vjudge.net/user/</InputWithLabelLeft>
                          <StudentInput name='Vjudge' onChange={handleChange} />
                      </InputWithLabel>
                  </EachRowLabel>
              </EachRow>
            </StudentContainer>
            <br/>
          <Title>Certification Completion</Title>
          <StudentContainer size='30vh'>
              <EachRow>
                  <EachRowLabel>
                      <CheckBoxContainer>
                          <CheckBox type='checkbox' name='AWSCp' onChange={handleChange} ></CheckBox>
                          <OptionTitle>AWS Certified Cloud Practitioner</OptionTitle>
                      </CheckBoxContainer>
                      <InputWithLabel>
                          <InputWithLabelLeft size='16vw'>Validation Number</InputWithLabelLeft>
                          <StudentInput  />
                      </InputWithLabel>
                  </EachRowLabel>
                  <EachRowLabel>
                      <CheckBoxContainer>
                          <CheckBox type='checkbox' name='AWSDa' onChange={handleChange} ></CheckBox>
                          <OptionTitle>AWS Certified Developer - Associate</OptionTitle>
                      </CheckBoxContainer>
                      <InputWithLabel>
                          <InputWithLabelLeft size='16vw'>Validation Number</InputWithLabelLeft>
                          <StudentInput />
                      </InputWithLabel>
                  </EachRowLabel>
                  
              </EachRow>
            </StudentContainer>
            <ButtonContainer>
                <SubmitButton type='submit' onClick={Submit} />
            </ButtonContainer>
        </BodyConatiner>
    </React.Fragment>
  )
}

export default UpdateProfile;
