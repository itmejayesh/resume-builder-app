import * as yup from "yup";

export const personInfoSchema = yup.object().shape({
	firstName: yup
		.string()
		.matches(/^[A-Za-z\s]+$/, "Invalid characters in first name")
		.min(2, "First name is too short")
		.max(50, "First name is too long")
		.required("Required"),
	lastName: yup
		.string()
		.matches(/^[A-Za-z\s]+$/, "Invalid characters in last name")
		.min(2, "Last name is too short")
		.max(50, "Last name is too long")
		.required("Required"),

	email: yup.string().email("Invalid email").required("Required"),
	mobile: yup
		.string()
		.matches(/^[0-9]{10}$/, "Invalid mobile number")
		.required("Required"),
	address: yup.string().required("Required"),
	city: yup.string().required("Required"),
	state: yup.string().required("Required"),
	postalCode: yup
		.string()
		.matches(/^[0-9]{5}$/, "Invalid postal code")
		.required("Required"),

	dateOfBirth: yup
		.string()
		.matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format")
		.required("Required"),

	objective: yup.string().max(500, "Objective is too long").required("Required"),
});
