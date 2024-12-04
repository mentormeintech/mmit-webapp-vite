import styled from "styled-components";
// import styled from 'styled-components';
import { Link } from "react-router-dom";
import {
	FormControlLabel,
	Button as MaterialButton,
	FormControl,
	FormHelperText,
} from "@mui/material";

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
	padding: 2rem 0em;
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
	max-width: max-content;
`;

export const CheckBoxView = styled(FormControlLabel)`
	// background: red;
	padding-right: 2em;
	margin: 0.1em 0em;
	text-transform: capitalize;
`;

export const ButtonView = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 2em;
	padding-right: 1em;
	width: 25rem;

  @media (max-width: 640px) {
	  width: 13rem;
  }
`;
export const Button = styled.button`
	font-size: 1em;
	text-align: center;
	color: var(--white);
	background-color: var(--theme_orange);
	font-family: var(--Montserrat);
	font-weight: 500;
	padding: 0.6em 4em;
	border-radius: 5px;

  @media (max-width: 640px) {
    padding: 0.6em 1em;
  }
`;

export const LinkButton = styled(Link)`
	font-size: 1em;
	text-align: center;
	color: var(--white);
	background-color: var(--theme_orange);
	font-family: var(--Montserrat);
	font-weight: 500;
	padding: 0.6em 4em;
	border-radius: 5px;

	@media (max-width: 640px) {
    padding: 0.6em 1em;
  }
`;

export const FormView = styled.form`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
export const ScheduleCard = styled.form`
	width: 98%;
	display: flex;
	justify-self: center;
	flex-direction: column;
`;

export const ColorView = styled.div`
	width: 100%;
	height: 5rem;
	display: flex;
	flex-direction: row;
	margin: 0.4rem 0em;
`;
export const InputView = styled.div`
	width: 100%;
	display: flex;
	// justify-content: space-between;
	margin: 0.4rem 0em;
`;

export const ColourInput = styled.input`
  margin-top: 3rem;
  width: 4rem;
  height: 4rem
  border: none;
  display: flex;
  cursor: pointer;
`;

export const Colour = styled.div`
  margin-top: 3rem;
  width: 4rem;
  height: 4rem
  border: none;
  border-radius: 50%;
  display: flex;
  cursor: pointer;
  background-color: ${(props) =>
		props.color ? props.color : "var(--theme_orange)"};
`;

export const InputFormControl = styled(FormControl)`
	width: 90%;
`;

export const FormHelperSPan = styled(FormHelperText)`
	color: red !important;
`;

export const SocialContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 0.7rem 0.5rem;
`;

export const SocialCircle = styled.div`
	background-color: #d9d9d9;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0.2rem 0.5rem;
	margin-right: 0rem;
	margin-right: ${(props) => (props.right ? props.right : "0rem")};
	width: ${(props) => (props.width ? props.width : "2.5rem")};
	height: ${(props) => (props.height ? props.height : "2.5rem")};
	border-radius: 50%;
	i {
		font-size: 0.9rem;
	}
`;

export const ButtonOutline = styled.button`
	// width: 60% !important;
	padding: .3rem 1.2rem !important;
	border: 0.07rem solid #123b64 !important;
	color: #F89878 !important;
	text-transform: capitalize !important;
	font-size: 1.2rem !important;
	font-family: var(--Montserrat);
	font-weight: 500;
	margin: auto;

	background: transparent;
`;
export const ScheduleView = styled.div`
	color: white;
	padding: 0.5rem;
	// height: 100%;
	display: flex;
	cursor: pointer;
	justify-content: flex-start;
	// align-items: center;
	background: ${(props) =>
		props.bg ? `${props.bg} !important` : "var(--theme_orange) !important"};
`;
