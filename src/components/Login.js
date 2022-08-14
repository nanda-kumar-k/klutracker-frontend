import React from 'react'
import styled from 'styled-components'
import klubg from '../static/images/klu.gif'
import '../static/Login.css'

function Login() {

  function onClickLogin(props){
    
    if( props == 'open' ) {
      document.getElementsByClassName('login-container')[0].style.display = 'flex';
  }
  else {
      document.getElementsByClassName('login-container')[0].style.display = 'none';
  }
  }

  return (
    <React.Fragment>
          <div class="body-conatiner">
              <div class="navbar">
                  <a href="#" onclick="login('open')">
                      <i>
                          
                      </i>
                      <h3>Login</h3>
                  </a>
              </div>
              <div class="img-container">
                  <img src={klubg} alt="klu" />
              </div>
              <div class="footer">
                  <p>© Copyright 2021 by KLU PP . All Rights Reserved.</p>
              </div>
              <div class="login-container">

                <div class="login-header">
                      <div class="logo-container">
                          <div class="logo-img-container">
                              <img src="{% static 'images/smalllogo.png' %}" alt="klu" />
                          </div>
                          <div class="login-close" onclick="login('close')">
                              &#10060;
                          </div>
                      </div>
                      <div class="login-body">
                          <form>
                              <p>Username</p>
                              <input type="text" name="username" id="username"/>
                              <br/>
                              <p>Password</p>
                              <input type="password" name="password" id="password"/>
                              <br/>
                              
                              <p id="forgot">Forgot your password?</p>
                              <br/>
                              <br/>
                              <button type="submit">Login</button>
                          </form>
                      </div>
                      <div class="footer">
                          <p>© Copyright 2019 by K L Deemed to be University.</p>
                      </div>
                </div>
              </div>
            </div>
    </React.Fragment>
  )
}

export default Login;
