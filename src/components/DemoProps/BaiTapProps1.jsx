import React, { useState } from "react";
import ItemPokemon from "./ItemPokemon";
import { DatePicker } from "antd";
import { useSelector } from "react-redux";
import BaiTapState1 from "../DemoState/BaiTapState1";
import useInput from "../../hooks/useInput";

const BaiTapProps1 = () => {
    const taiKhoan = useInput("abc");
    console.log(taiKhoan);
    // để truy cập tới store để lấy dữ liệu redux cần tạo biến sử dụng hook
    //useSelector hỗ trợ của React Redux
    //lấy dữ liệu dùng hook từ redux về
    const { pokemons } = useSelector((state) => state.pokemonSlice); //biến thể của arow function
    // console.log(valueState);
    // (state) đại diện cho 1 reducer trong STORE

    return (
        <div className="container">
            <h2 className="text-center text-4xl py-10 font-bold text-purple-600">
                Pokemon Props
            </h2>
            <DatePicker></DatePicker>
            <div className="grid grid-cols-5 gap-5 py-20">
                {pokemons.map((item, index) => {
                    let { name, image, type, damage, defense } = item;
                    return <ItemPokemon pokemon={item}></ItemPokemon>;
                })}
            </div>
            <input
                border
                type="text"
                placeholder="Vui lòng nhập tài khoản"
                // onChange={taiKhoan.onChange}
                // value={taiKhoan.value}
                {...taiKhoan}
            />
            <div className="py-10 ">
                <BaiTapState1></BaiTapState1>
            </div>
        </div>
    );
};

export default BaiTapProps1;
