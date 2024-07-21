import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./slices/pokemonSlice";
import dienThoaiSlice from "./slices/dienThoaiSlice";
import userSlice from "./slices/userSlice";
import xiNgauSlice from "./slices/xiNgauSlice";

export const store = configureStore({
    reducer: {
        hoTen: () => {
            return "Nguyen Van A";
        },
        pokemonSlice,
        dienThoaiSlice,
        userSlice,
        xiNgauSlice,
    },
});
