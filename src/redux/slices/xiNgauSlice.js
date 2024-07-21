import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    xiNgau: {
        xiNgau1: 3,
        xiNgau2: 4,
        xiNgau3: 5,
    },
    tongBanThang: 0,
    tongBanChoi: 0,
    yourChoice: "Tài",
};

const xiNgauSlice = createSlice({
    name: second,
    initialState,
    reducers: {},
});

export const {} = xiNgauSlice.actions;

export default xiNgauSlice.reducer;
