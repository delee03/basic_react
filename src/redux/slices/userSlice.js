import { createSlice, current } from "@reduxjs/toolkit";

//file jsx chứa các thành phần của compent, js thì chứa các lệnh javacript

const initialState = {
    hoTen: "Đại Phát",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        capNhatHoTen: (state, action) => {
            console.log(current(state));
            console.log(action.payload);
            state.hoTen = action.payload;
        },
    },
});

export const { capNhatHoTen } = userSlice.actions;

export default userSlice.reducer;
