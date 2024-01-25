import {Box, Container, Grid, TextField, Typography, useTheme, Button, Stack} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, {useState} from "react";

const ExperienceInfo = () => {
	const theme = useTheme();

	const [skills, setSkills] = useState(["", "", "", ""]);

	const handleSkillChange = (index, value) => {
		const updatedSkills = [...skills];
		updatedSkills[index] = value;
		setSkills(updatedSkills);
	};

	const deleteSkill = (index) => {
		const updatedSkills = skills.filter((_, idx) => idx !== index);
		setSkills(updatedSkills);
	};

	const addSkills = () => {
		const newSkills = [...skills, ""];
		setSkills(newSkills);
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
					Key Skills
				</Typography>
			</Stack>
			<Container maxWidth="xl">
				<Grid container spacing={3}>
					{skills.map((skill, index) => (
						<Grid item xs={12} md={6} key={index}>
							<Typography paddingBottom={3}>Skill Name</Typography>
							<Box display={`flex`} alignItems={`center`} marginRight={2} paddingRight={1} gap={2}>
								<TextField onChange={(e) => handleSkillChange(index, e.target.value)} value={skill} id={`skillName-${index}`} label="Enter your skill" variant="outlined" fullWidth />
								<Button onClick={() => deleteSkill(index)}>
									<DeleteIcon />
								</Button>
							</Box>
						</Grid>
					))}
				</Grid>
				<Typography paddingTop={3}>
					<Button onClick={addSkills} variant="outlined">
						Add Skills
					</Button>
				</Typography>
			</Container>
		</Box>
	);
};

export default ExperienceInfo;
