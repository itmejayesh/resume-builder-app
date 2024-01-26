"use client";
import Navbar from "@/components/Navbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, {useState} from "react";
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
	const {values, handleChange, error, setFieldValue} = useFormik({
		initialValues: {
			value: 0,
		},
	});

	const handleSubmit = () => {};

	const handleNext = () => {
		if (childError) {
			console.log("Cannot proceed due to errors from child component", childError);
			return;
		} else if (values.value < 3) {
			return setFieldValue("value", values.value + 1);
		}
	};

	const handleBack = () => {
		if (values.value > 0) {
			setFieldValue("value", values.value - 1);
		}
	};

	return (
		<>
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
						<form>
							{values.value == 0 && (
								<PersonalInfo setChildError={setChildError} handleSubmit={handleSubmit} />
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
									onClick={handleNext}
								>
									{values.value === 3 ? `Preview` : `Next`}
								</Button>
							</Stack>
						</form>
					</ResponsivePaper>
				</Grid2>
			</Grid2>
		</>
	);
}

export default page;
