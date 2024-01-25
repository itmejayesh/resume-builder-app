import {Avatar, Box, Container, TextField, Typography, useTheme, Stack} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import React, {useState} from "react";

const WorkInfo = () => {
	const theme = useTheme();

	const generateYears = (startYear, endYear) => {
		const years = [];
		for (let year = startYear; year <= endYear; year++) {
			years.push({label: `${year}`, value: year});
		}
		return years;
	};
	const [years] = useState(generateYears(1991, 2024));

	const [workExperiences, setWorkExperiences] = useState([{jobTitle: "", organization: "", startYear: "", endYear: ""}]);
	const addExperience = () => {
		setWorkExperiences([...workExperiences, {jobTitle: "", organization: "", startYear: "", endYear: ""}]);
	};
	const removeExperience = (index) => {
		const updatedExperiences = workExperiences.filter((_, i) => i !== index);
		setWorkExperiences(updatedExperiences);
	};
	const handleExperienceChange = (index, field, value) => {
		const updatedExperiences = [...workExperiences];
		updatedExperiences[index][field] = value;
		setWorkExperiences(updatedExperiences);
	};

	return (
		<Box>
			<Stack sx={{borderBottom: "1px solid lightgrey", marginBottom: 5}}>
				<Typography
					variant="h4"
					m={3}
					sx={{
						[theme.breakpoints.down("sm")]: {
							fontSize: "2rem", // Adjust the font size for small screens
						},
					}}
				>
					Work Experience
				</Typography>
			</Stack>
			<Container maxWidth="xl">
				{/* <Grid container spacing={3}>
					<Grid item xs={12}>
						<Typography variant="h6" borderBottom={1}>{`Experience`}</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography>Job Title</Typography>
						<TextField id="jobTitle" label="Enter Job Title" variant="outlined" fullWidth />
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography>Organization Name</Typography>
						<TextField id="organization" label="Enter Organization Name" variant="outlined" fullWidth />
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography>Start Year</Typography>
						<FormControl fullWidth>
							<InputLabel id="startYear">Start Year</InputLabel>
							<Select id="startYear" label="Start Year">
								{years.map((year) => (
									<MenuItem key={year.value} value={year.value}>
										{year.label}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography>End Year</Typography>
						<FormControl fullWidth>
							<InputLabel id="endYear">End Year</InputLabel>
							<Select id="endYear" label="End Year">
								{years.map((year) => (
									<MenuItem key={year.value} value={year.value}>
										{year.label}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
				</Grid> */}
				{workExperiences.map((experience, index) => (
					<Grid container spacing={3} key={index}>
						<Grid xs={12}>
							<Typography variant="h6" borderBottom={0}>
								{index === 0 ? `Experience` : `Experience ${index + 1}`}
							</Typography>
						</Grid>
						<Grid xs={12} md={6}>
							<Typography>Job Title</Typography>
							<TextField
								id={`jobTitle-${index}`}
								label="Enter Job Title"
								variant="outlined"
								fullWidth
								value={experience.jobTitle}
								onChange={(e) => handleExperienceChange(index, "jobTitle", e.target.value)}
							/>
						</Grid>
						<Grid xs={12} md={6}>
							<Typography>Organization Name</Typography>
							<TextField
								id={`organization-${index}`}
								label="Enter Organization Name"
								variant="outlined"
								fullWidth
								value={experience.organization}
								onChange={(e) => handleExperienceChange(index, "organization", e.target.value)}
							/>
						</Grid>
						<Grid xs={12} md={6}>
							<Typography>Start Year</Typography>
							<FormControl fullWidth>
								<InputLabel id={`start-year-label-${index}`}>Start Year</InputLabel>
								<Select
									labelId={`start-year-label-${index}`}
									id={`start-year-select-${index}`}
									label="Start Year"
									value={experience.startYear}
									onChange={(e) => handleExperienceChange(index, "startYear", e.target.value)}
								>
									{years.map((year) => (
										<MenuItem key={year.value} value={year.value}>
											{year.label}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>
						<Grid xs={12} md={6}>
							<Typography>End Year</Typography>
							<FormControl fullWidth>
								<InputLabel id={`end-year-label-${index}`}>End Year</InputLabel>
								<Select
									labelId={`end-year-label-${index}`}
									id={`end-year-select-${index}`}
									label="End Year"
									value={experience.endYear}
									onChange={(e) => handleExperienceChange(index, "endYear", e.target.value)}
								>
									{years.map((year) => (
										<MenuItem key={year.value} value={year.value}>
											{year.label}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				))}
				<Grid container spacing={3} padding={3} justifyContent={`center`}>
					<Grid>
						<Button variant="outlined" onClick={addExperience}>
							Add Exprerience
						</Button>
					</Grid>
					<Grid>
						{workExperiences.length > 1 && (
							<Button variant="outlined" onClick={() => removeExperience(workExperiences.length - 1)}>
								Remove Exprerience
							</Button>
						)}
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default WorkInfo;
