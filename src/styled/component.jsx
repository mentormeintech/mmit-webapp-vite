import styled from 'styled-components'
// import styled from 'styled-components';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
export const View = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-items: center;
  align-content: center;
  align-items: flex-start;
  padding:2rem 0em;
  padding-left: 2rem;
  width: 97%;
`;
export const Title = styled.h1`
  font-size: 1.25em;
  text-align: center;
  color: var(--textDark);
  font-family: var(--Montserrat);
  font-weight: 500;
  margin-bottom: 1em;
`;

export const CheckBoxView = styled(FormControlLabel)`
// background: red;
padding-right: 2em;
margin: .1em 0em;
text-transform: capitalize;
`

export const ButtonView = styled.div`
display: flex;
justify-content: space-between;
margin-top:2em;
padding-right: 1em;
width: 25rem;
`;
export const Button = styled.button`
  font-size: 1em;
  text-align: center;
  color: var(--white);
  background-color: var(--theme_orange);
  font-family: var(--Montserrat);
  font-weight: 500;
  padding: .6em 4em;
  border-radius: 5px;
`;

export const LinkButton = styled(Link)`
  font-size: 1em;
  text-align: center;
  color: var(--white);
  background-color: var(--theme_orange);
  font-family: var(--Montserrat);
  font-weight: 500;
  padding: .6em 4em;
  border-radius: 5px;
`;