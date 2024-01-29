"use client";
import Navbar from "@/components/Navbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, {useEffect, useState} from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {Button, Paper, Stack} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useFormik} from "formik";
import PersonalInfo from "@/components/PersonalInfo";
import WorkInfo from "@/components/WorkInfo";
import EducationInfo from "@/components/EducationInfo";
import ExperienceInfo from "@/components/ExperienceInfo";

const StyledPaper = styled(Paper)(({theme}) => ({
	borderRight: `1px solid ${theme.palette.grey[300]}`,
}));

const StyledTab = styled(Tab)(({theme}) => ({
	borderBottom: `1px solid ${theme.palette.grey[300]}`,
}));

const StyledTabs = styled(Tabs)(({theme}) => ({
	"& .MuiTabs-indicator": {
		left: 0,
	},
}));

const ResponsivePaper = styled(Paper)`
	padding: 1em;
	margin: 0 2em;
	height: 100%;

	@media (max-width: 600px) {
		padding: 1em;
		margin: 0;
	}
`;

function page() {
	const [childError, setChildError] = useState(null);
	const [triggerSubmit, setTriggerSubmit] = useState(false);
	const {values, handleChange, setFieldValue} = useFormik({
		initialValues: {
			value: 0,
		},
	});

	const handleFunction = (values) => {
		// Do something with the form values
		console.log("Form values:", values);
	};

	const handleFormSubmission = () => {
		// Set the state to trigger the form submission in the child component
		setTriggerSubmit(true);
	};

	useEffect(() => {
		// Check if the parent component requested to trigger form submission
		if (triggerSubmit) {
			// Reset triggerSubmit to false after handling it
			setTriggerSubmit(false);
		}
	}, [triggerSubmit, values]);

	const handleNext = () => {
		if (childError && Object.keys(childError).length > 0) {
			console.log("Cannot proceed due to errors from child component", childError);
			return;
		}
		if (values.value < 3) {
			setFieldValue("value", values.value + 1);
		}
	};

	const handleBack = () => {
		if (values.value > 0) {
			setFieldValue("value", values.value - 1);
		}
	};

	return (
		<main>
			<Navbar />
			<Grid2 container justifyContent="center" spacing={1} sx={{width: `100%`}}>
				<Grid2 xs={12} md={2} sx={{height: "100%"}}>
					<StyledPaper elevation={4}>
						<StyledTabs
							value={values.value}
							onChange={handleChange}
							variant="scrollable"
							orientation="vertical"
							textColor="primary"
							indicatorColor="primary"
						>
							<StyledTab
								style={{alignItems: "flex-start"}}
								label="Personal Info"
								disabled={values.value !== 0}
							/>
							<StyledTab
								label="Work Experience"
								style={{alignItems: "flex-start"}}
								disabled={values.value !== 1}
							/>
							<StyledTab
								label="Education"
								style={{alignItems: "flex-start"}}
								disabled={values.value !== 2}
							/>
							<StyledTab
								label="Key Skills"
								style={{alignItems: "flex-start"}}
								disabled={values.value !== 3}
							/>
						</StyledTabs>
					</StyledPaper>
				</Grid2>
				<Grid2 xs={12} md={8}>
					<ResponsivePaper elevation={3}>
						{values.value == 0 && (
							<PersonalInfo
								setChildError={setChildError}
								handleFunction={handleFunction}
								triggerSubmit={triggerSubmit}
							/>
						)}
						{values.value == 1 && <WorkInfo />}
						{values.value == 2 && <EducationInfo />}
						{values.value == 3 && <ExperienceInfo />}

						<Stack
							direction="row"
							mt={3}
							ml="auto"
							sx={{borderTop: "1px solid lightgrey", paddingTop: 4}}
							justifyContent="flex-end"
						>
							<Button sx={{marginRight: 5}} variant="outlined" onClick={handleBack}>
								Back
							</Button>

							<Button
								sx={{
									marginRight: 5,
								}}
								variant="outlined"
								onClick={() => {
									handleFormSubmission();
									// handleNext();
								}}
							>
								{values.value === 3 ? `Preview` : `Next`}
							</Button>
						</Stack>
					</ResponsivePaper>
				</Grid2>
			</Grid2>
		</main>
	);
}

export default page;
