import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hoTen: "Cẩm y vệ",
};

const userSlice = createSlice({
    name: second,
    initialState,
    reducers: {
        capNhatHoTen: (state, action) => {
            console.log(action);
        },
    },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
