import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import loginImg from '../images/login-img.svg';
import { GithubContext } from '../context/context';


const Login = () => {
  const { signIn, user } = React.useContext(GithubContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn();
  }

  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="github user" />
        <h1>Github User</h1>
        <div className="btn" onClick={handleSubmit}>
          Login
        </div>
      </div>
    </Wrapper>
  )
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
