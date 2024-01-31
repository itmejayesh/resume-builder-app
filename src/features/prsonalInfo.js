import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	personalData: {
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
	},
};

const personalInfoSlice = createSlice({
	name: "personalInfo",
	initialState,
	reducers: {
		setField: (state, action) => {
			const {field, value} = action.payload;
			state.personalData[field] = value;
		},
	},
});

export const {setField} = personalInfoSlice.actions;
export default personalInfoSlice.reducer;
