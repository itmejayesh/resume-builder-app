import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	mobile: "",
	address: "",
	city: "",
	state: "",
	postalCode: "",
	dateOfBirth: "",
	objective: "",
};

export const personalInfoSlice = createSlice({
	name: "personalInfo",
	initialState,
	reducers: {
		setField: (state, action) => {
			const {field, value} = action.payload;
			state[field] = value;
		},
	},
});

export const {setField} = personalInfoSlice.actions;
