import styled from 'styled-components'
// import styled from 'styled-components';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';

export const PolicyTitle = styled.h1`
color: var(--theme-blue);
font-family: var(--Montserrat);
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`;
export const PolicyTime = styled.p`
color: var(--text-dark);
leading-trim: both;
text-edge: cap;
font-family: var(--Montserrat);
font-size: .95rem;
font-style: normal;
line-height: normal;
`;

export const PolicyText = styled.h5`
  font-size: 1em;
  color: var(--text-dark);
  font-family: var(--Montserrat);
  margin-bottom: 1em;
  line-height: 1.7rem;
`;

export const PolicyHead = styled.h2`
  font-size: 1.25em;
  color: var(--text-dark);
  font-family: var(--Montserrat);
  margin-bottom: 1em;
  font-weight: 600;
`;
export const PolicyHeadTitle = styled.h2`
  font-size: 1em;
  color: var(--text-dark);
  font-family: var(--Montserrat);
  margin-bottom: 1em;
  font-weight: 600;
`;