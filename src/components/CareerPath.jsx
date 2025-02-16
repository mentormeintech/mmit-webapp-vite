import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import {
	Container,
	Title,
	View,
	ButtonView,
	Button,
	LinkButton,
	CheckBoxView,
} from "../styled/component";
import Loader from "./loader";

export default function CareerPath(props) {
	const { careers, setcareerPath, careerPath, createCareer, loading, userType } = props;
	return (
		<div className="my-[3rem] mx-0 sm:mx-5">
			<div className="p-6">
				<Title>
					{`Please Choose a career path you would like to ${userType === 'mentee' ? 'be mentored on' : 'mentor on'}`}
				</Title>
				<FormControl>
					<RadioGroup
						aria-labelledby="demo-radio-buttons-group-label"
						defaultValue={careerPath}
						name="radio-buttons-group"
					>
						{careers?.map((career, index) => (
							<CheckBoxView
								value={career._id}
								control={<Radio />}
								label={`${career?.name}`}
								key={index}
								onChange={(event) => {
									setcareerPath(event.target.value);
								}}
							/>
						))}
					</RadioGroup>
				</FormControl>
				<ButtonView>
					{loading === false && (
						<LinkButton disabled={true} href={"/auth/mentorsignup"}>
							{"Back"}
						</LinkButton>
					)}
					<Button
						className={`${loading === true
								? "cursor-not-allowed"
								: "cursor-pointer"
							}`}
						disabled={loading === true ? true : false}
						onClick={(event) => createCareer(event)}
					>
						{loading ? <Loader /> : "Continue"}
					</Button>
				</ButtonView>
			</div>
		</div>
	);
}
