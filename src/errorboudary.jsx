import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
  color: #454545; /* Dark gray */
  font-family: 'Montserrat', sans-serif;
`;

const Title = styled.h1`
  font-size: 5rem;
  line-height: 5rem;
  margin-bottom: 20px;
  font-weight: 500;
`;

const Message = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

const HomeButton = styled.a`
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #eb9572; /* Orange */
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #d17e5a; /* Darker orange on hover */
  }
`;

function ErrorPage(props) {

  return (
    <Container>
      <Title>404</Title>
      <Message>Oops! Page not found.</Message>
      <HomeButton href='/'>Go Back</HomeButton>
    </Container>
  );
}

export default ErrorPage;
