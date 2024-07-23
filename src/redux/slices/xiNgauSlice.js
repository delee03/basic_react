import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // xiNgau: {
    //     xiNgau1: 3,
    //     xiNgau2: 4,
    //     xiNgau3: 5,
    // },
    xiNgau: [3, 4, 5],
    tongBanThang: 0,
    tongBanChoi: 0,
    //"Tài" = true, "Xỉu" = false
    yourChoice: true,
};

function getRandomNumber(range = 6) {
    return Math.floor(Math.random() * range) + 1;
}

const xiNgauSlice = createSlice({
    name: "xingau",
    initialState,
    reducers: {
        luaChonUser: (state, action) => {
            console.log(action);
            state.yourChoice = action.payload;
        },
        //tạo 1 action xử lí chức năng khi người dùng bấm play game
        //B1: thực hiện tạo ngẫu nhiên 3 con xí ngầu mới
        //b2: tăng tổng số bàn chơi thêm 1 đơn vị
        //b3; lấy 3 con xí ngầu mới cộng lại và kiểm tra là tài hay xỉu , sau đó so sánh với kết quả người dùng chọn, để xác định xem là ngừi dùng thắng hay thua => tăng tổng số bàn thắng thêm 1 giá trị;
        playGame: (state, action) => {
            //B1: thực hiện tạo ngẫu nhiên 3 con xí ngầu mới
            state.xiNgau = [getRandomNumber()];
            state.xiNgau.push(getRandomNumber());
            state.xiNgau.push(getRandomNumber());
            console.log(state.xiNgau);
            //cách 2: dùng object literal;

            //b2: tăng tổng số bàn chơi thêm 1 đơn vị
            state.tongBanChoi += 1;
            //b3; lấy 3 con xí ngầu mới cộng lại và kiểm tra là
            //tài hay xỉu , sau đó so sánh với kết quả người dùng chọn,
            //để xác định xem là ngừi dùng thắng hay thua => tăng tổng số
            //bàn thắng thêm 1 giá trị;
            let tongXiNgau = state.xiNgau.reduce((acumulator, item) => {
                return item + acumulator;
            }, 0);

            if (
                (tongXiNgau > 11 && state.yourChoice == true) ||
                (tongXiNgau <= 11 && state.yourChoice == false)
            ) {
                state.tongBanThang += 1;
            }
            // console.log(state.tongBanThang);
            // console.log(state.tongBanChoi);
        },
    },
});

export const { luaChonUser, playGame } = xiNgauSlice.actions;

export default xiNgauSlice.reducer;
