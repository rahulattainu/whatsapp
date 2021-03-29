import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { auth, provider } from "../firebase";

function login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>login</title>
      </Head>
      <LoginContainer>
        <Logo src="https://image.flaticon.com/icons/png/512/124/124034.png" />
        <button onClick={signIn} variant="outlined">
          Sign In
        </button>
      </LoginContainer>
    </Container>
  );
}

export default login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 1.7);
`;

const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 20px;
`;
