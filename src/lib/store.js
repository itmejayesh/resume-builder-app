import {configureStore} from "@reduxjs/toolkit";
import {personalInfoSlice} from "../features/prsonalInfo"; // Fix import statement

const store = configureStore({
	reducer: {
		personalInfo: personalInfoSlice.reducer,
	},
});

export default store;
