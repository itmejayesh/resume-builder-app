import {Avatar, Box, Container, TextField, Typography, useTheme, Stack} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, {useState} from "react";

const EducationInfo = () => {
	const theme = useTheme();
	//genrate year through function
	const generateYears = (startYear, endYear) => {
		const year = [];
		for (let i = startYear; i <= endYear; i++) {
			year.push({label: `${i}`, value: i});
		}
		return year;
	};
	const [year] = useState(generateYears(1991, 2024));

	//add more education on click logic
	const [addEducation, setAddEducation] = useState([{educationType: "", universityName: "", degreeName: "", startYear: "", endYear: ""}]);
	const addEducations = () => {
		setAddEducation([...addEducation, {educationType: "", universityName: "", degreeName: "", startYear: "", endYear: ""}]);
	};
	const removeEducations = (index) => {
		const updatedEducation = addEducation.filter((_, idx) => idx !== index);
		setAddEducation(updatedEducation);
	};
	const handleChange = (index, field, value) => {
		const updatedEducation = [...addEducation];
		updatedEducation[index][field] = value;
		setAddEducation(updatedEducation);
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
					Education Info
				</Typography>
			</Stack>
			<Container maxWidth="xl">
				<Typography marginBottom={5} variant="h6">
					Education
				</Typography>
				{/* default information template */}
				{/* <Grid container spacing={3}>
					<Grid xs={12} md={8}>
						<Typography paddingBottom={3}>Education Type</Typography>
						<FormControl fullWidth>
							<InputLabel id="selectEdu">Select Education</InputLabel>
							<Select id="selectEdu" label="Select Education">
								<MenuItem value="High School Diploma/GED">High School Diploma/GED</MenuItem>
								<MenuItem value="College">Graducation</MenuItem>
								<MenuItem value="Associate Degree">Associate Degree</MenuItem>
								<MenuItem value="Bachelor's Degree">Bachelor's Degree</MenuItem>
								<MenuItem value="Master's Degree">Master's Degree</MenuItem>
								<MenuItem value="Doctorate/Ph.D.">Doctorate/Ph.D.</MenuItem>
								<MenuItem value="Professional Degree (e.g., MD, JD)">Professional Degree (e.g., MD, JD)</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid xs={12} md={6}>
						<Typography paddingBottom={3}>University</Typography>
						<TextField id="University" label="Enter University Name" variant="outlined" fullWidth />
					</Grid>
					<Grid xs={12} md={6}>
						<Typography paddingBottom={3}>Degree</Typography>
						<TextField id="Degree" label="Enter Degree Name" variant="outlined" fullWidth />
					</Grid>
					<Grid xs={12} md={6}>
						<Typography paddingBottom={3}>Start Year</Typography>
						<FormControl fullWidth>
							<InputLabel id="startYear"> Start Year</InputLabel>
							<Select id="startYear" label="select year">
								{year.map((year) => (
									<MenuItem key={year.label} value={year.value}>
										{year.value}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid xs={12} md={6}>
						<Typography paddingBottom={3}>End Year</Typography>
						<FormControl fullWidth>
							<InputLabel id="startYear"> End Year</InputLabel>
							<Select id="startYear" label="select year">
								{year.map((year) => (
									<MenuItem key={year.label} value={year.value}>
										{year.value}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
				</Grid> */}
				{addEducation.map((education, index) => (
					<Grid container spacing={3} key={index}>
						<Grid xs={12} md={8}>
							<Typography paddingBottom={3}>Education Type</Typography>
							<FormControl fullWidth>
								<InputLabel id={`selectEdu-${index}`}>Select Education</InputLabel>
								<Select onChange={(e) => handleChange(index, "educationType", e.target.value)} value={education.educationType} id={`selectEdu-${index}`} label="Select Education">
									<MenuItem value="High School Diploma/GED">High School Diploma/GED</MenuItem>
									<MenuItem value="College">Graducation</MenuItem>
									<MenuItem value="Associate Degree">Associate Degree</MenuItem>
									<MenuItem value="Bachelor's Degree">Bachelor's Degree</MenuItem>
									<MenuItem value="Master's Degree">Master's Degree</MenuItem>
									<MenuItem value="Doctorate/Ph.D.">Doctorate/Ph.D.</MenuItem>
									<MenuItem value="Professional Degree (e.g., MD, JD)">Professional Degree (e.g., MD, JD)</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid xs={12} md={6}>
							<Typography paddingBottom={3}>University</Typography>
							<TextField
								onChange={(e) => handleChange(index, "universityName", e.target.value)}
								value={education.universityName}
								id={`University-${index}`}
								label="Enter University Name"
								variant="outlined"
								fullWidth
							/>
						</Grid>
						<Grid xs={12} md={6}>
							<Typography paddingBottom={3}>Degree</Typography>
							<TextField
								onChange={(e) => handleChange(index, "degreeName", e.target.value)}
								value={education.degreeName}
								id={`Degree-${index}`}
								label="Enter Degree Name"
								variant="outlined"
								fullWidth
							/>
						</Grid>
						<Grid xs={12} md={6}>
							<Typography paddingBottom={3}>Start Year</Typography>
							<FormControl fullWidth>
								<InputLabel id={`startYear-${index}`}> Start Year</InputLabel>
								<Select onChange={(e) => handleChange(index, "startYear", e.target.value)} value={education.startYear} id="startYear" label="select year">
									{year.map((year) => (
										<MenuItem key={year.label} value={year.value}>
											{year.value}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>
						<Grid xs={12} md={6}>
							<Typography paddingBottom={3}>End Year</Typography>
							<FormControl fullWidth>
								<InputLabel id={`endYear-${index}`}> End Year</InputLabel>
								<Select onChange={(e) => handleChange(index, "endYear", e.target.value)} value={education.endYear} id={`endYear-${index}`} label="select year">
									{year.map((year) => (
										<MenuItem key={year.label} value={year.value}>
											{year.value}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				))}
				{/* add and remove buttons */}
				<Grid container justifyContent={`center`} spacing={3} padding={3}>
					<Grid>
						<Button variant="outlined" onClick={addEducations}>
							Add Education
						</Button>
					</Grid>
					<Grid>
						{addEducation.length > 1 && (
							<Button variant="outlined" onClick={() => removeEducations(addEducation.length - 1)}>
								Remove Education
							</Button>
						)}
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default EducationInfo;
