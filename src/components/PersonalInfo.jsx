import {Box, Grid, TextField, Typography, useTheme, Stack} from "@mui/material";
import React, {useEffect} from "react";
import {useFormik} from "formik";
import {personInfoSchema} from "../../schema";
import {useDispatch, useSelector} from "react-redux";
import {setField} from "../features/prsonalInfo";

const PersonalInfo = ({setChildError, handleFunction, triggerSubmit, setFormValues}) => {
	const theme = useTheme();
	const dispatch = useDispatch();
	const personalInfo = useSelector((state) => state.personalInfo);

	const {values, handleBlur, handleChange, errors, touched, handleSubmit, setValues} =
		useFormik({
			initialValues: personalInfo,
			validationSchema: personInfoSchema,
			onSubmit: (values) => {
				console.log("Submitting form with values:", values);
				dispatch(setField(values));
			},
		});

	useEffect(() => {
		setChildError(errors);
		setFormValues(values);
	}, [errors, touched, setChildError, values]);

	useEffect(() => {
		// Log the updated values in Redux to the console when personalInfo changes
		console.log("Redux values:", personalInfo);
		setValues(personalInfo);
	}, [personalInfo, setValues]);

	useEffect(() => {
		// Check if the parent component requested to trigger form submission
		if (triggerSubmit) {
			// Call the handleSubmit function from Formik
			handleSubmit();
		}
	}, [triggerSubmit, handleSubmit]);

	return (
		<Box component={`form`} onSubmit={handleSubmit} noValidate>
			<Stack
				sx={{
					borderBottom: "1px solid lightgrey",
					marginBottom: 5,
				}}
			>
				<Typography
					variant="h4"
					m={3}
					sx={{
						[theme.breakpoints.down("sm")]: {
							fontSize: "2rem", // Adjust the font size for small screens
						},
					}}
				>
					Personal Information
				</Typography>
			</Stack>

			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<TextField
						id="firstName"
						label="First Name"
						variant="outlined"
						fullWidth
						value={values.firstName}
						onBlur={handleBlur}
						onChange={handleChange}
						error={errors.firstName && touched.firstName}
					/>
					{errors.firstName && touched.firstName && (
						<Typography variant="body2" color="error" marginX={1} marginTop={1}>
							{errors.firstName}
						</Typography>
					)}
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						id="lastName"
						label="Last Name"
						variant="outlined"
						fullWidth
						value={values.lastName}
						onBlur={handleBlur}
						onChange={handleChange}
						error={errors.lastName && touched.lastName}
					/>
					{errors.lastName && touched.lastName && (
						<Typography variant="body2" color="error" marginX={1} marginTop={1}>
							{errors.lastName}
						</Typography>
					)}
				</Grid>

				<Grid item xs={12} md={6}>
					<TextField
						id="email"
						label="Email"
						variant="outlined"
						fullWidth
						value={values.email}
						onBlur={handleBlur}
						onChange={handleChange}
						error={errors.email && touched.email}
					/>
					{errors.email && touched.email && (
						<Typography variant="body2" color="error" marginX={1} marginTop={1}>
							{errors.email}
						</Typography>
					)}
				</Grid>

				<Grid item xs={12} md={6}>
					<TextField
						id="mobile"
						label="Mobile"
						variant="outlined"
						fullWidth
						value={values.mobile}
						onBlur={handleBlur}
						onChange={handleChange}
						error={errors.mobile && touched.mobile}
					/>
					{errors.mobile && touched.mobile && (
						<Typography variant="body2" color="error" marginX={1} marginTop={1}>
							{errors.mobile}
						</Typography>
					)}
				</Grid>
				<Grid item xs={12}>
					<TextField
						id="address"
						label="Address"
						variant="outlined"
						fullWidth
						multiline
						value={values.address}
						onBlur={handleBlur}
						onChange={handleChange}
						error={errors.address && touched.address}
					/>
					{errors.address && touched.address && (
						<Typography variant="body2" color="error" marginX={1} marginTop={1}>
							{errors.address}
						</Typography>
					)}
				</Grid>

				<Grid item xs={12} md={6}>
					<TextField
						id="city"
						label="City"
						variant="outlined"
						fullWidth
						multiline
						value={values.city}
						onBlur={handleBlur}
						onChange={handleChange}
						error={errors.city && touched.city}
					/>
					{errors.city && touched.city && (
						<Typography variant="body2" color="error" marginX={1} marginTop={1}>
							{errors.city}
						</Typography>
					)}
				</Grid>

				<Grid item xs={12} md={6}>
					<TextField
						id="state"
						label="State"
						variant="outlined"
						fullWidth
						multiline
						value={values.state}
						onBlur={handleBlur}
						onChange={handleChange}
						error={errors.state && touched.state}
					/>
					{errors.state && touched.state && (
						<Typography variant="body2" color="error" marginX={1} marginTop={1}>
							{errors.state}
						</Typography>
					)}
				</Grid>

				<Grid item xs={12} md={6}>
					<TextField
						id="postalCode"
						label="Postal code"
						variant="outlined"
						fullWidth
						multiline
						value={values.postalCode}
						onBlur={handleBlur}
						onChange={handleChange}
						error={errors.postalCode && touched.postalCode}
					/>
					{errors.postalCode && touched.postalCode && (
						<Typography variant="body2" color="error" marginX={1} marginTop={1}>
							{errors.postalCode}
						</Typography>
					)}
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						id="dateOfBirth"
						label="Date of birth"
						variant="outlined"
						fullWidth
						multiline
						value={values.dateOfBirth}
						onBlur={handleBlur}
						onChange={handleChange}
						error={errors.dateOfBirth && touched.dateOfBirth}
					/>
					{errors.dateOfBirth && touched.dateOfBirth && (
						<Typography variant="body2" color="error" marginX={1} marginTop={1}>
							{errors.dateOfBirth}
						</Typography>
					)}
				</Grid>

				<Grid item xs={12}>
					<TextField
						id="objective"
						label="Objective"
						variant="outlined"
						multiline
						rows={4}
						fullWidth
						value={values.objective}
						onBlur={handleBlur}
						onChange={handleChange}
						error={errors.objective && touched.objective}
					/>
					{errors.objective && touched.objective && (
						<Typography variant="body2" color="error" marginX={1} marginTop={1}>
							{errors.objective}
						</Typography>
					)}
				</Grid>
			</Grid>
		</Box>
	);
};

export default PersonalInfo;
