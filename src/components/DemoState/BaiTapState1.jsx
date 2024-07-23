import React, { useState } from "react";

const BaiTapState1 = (props) => {
    const [selectCar, setSelectCar] = useState("black-car.jpg");

    console.log(props);
    //dữ liệu props là dữ liệu readonly;
    // Tạo mảng khi gặp 1 component có nhiều phần tử giống nhau ở đây lfa các nút chọn màu
    const arrButton = [
        {
            icon: "./public/CarBasic/icons/icon-black.jpg",
            title: "Crystal Black",
            subTitle: "Pearl",
            selectCar: "black-car.jpg",
        },
        {
            icon: "./public/CarBasic/icons/icon-steel.jpg",
            title: "Modern Steel",
            subTitle: "Pearl",
            selectCar: "steel-car.jpg",
        },
        {
            icon: "./public/CarBasic/icons/icon-silver.jpg",
            title: "Lunar Silver",
            subTitle: "Pearl",
            selectCar: "silver-car.jpg",
        },
        {
            icon: "./public/CarBasic/icons/icon-red.jpg",
            title: "Rallye Red",
            subTitle: "Pearl",
            selectCar: "red-car.jpg",
        },
    ];

    return (
        <div className="py-5">
            <div className="py-10">
                <h2 className="text-3xl font-bold">
                    Bài tập dùng State hiển thị xe = {props.count}
                </h2>
                <button
                    onClick={props.updateStateCount}
                    className="py-2 px-5 bg-red-500 text-white rounded-lg"
                >
                    Tăng count
                </button>
            </div>

            <div className="flex gap-6 ">
                <div className="w-2/3">
                    <img src={`/CarBasic/products/${selectCar}`} alt="" />{" "}
                    {/**trong string template nhớ có dấu $ dù là data binding */}
                </div>
                <div className="w-1/3 space-y-5">
                    {arrButton.map((item, index) => {
                        return (
                            <button
                                onClick={() => {
                                    setSelectCar(item.selectCar);
                                }}
                                className="flex w-full items-center py-10 px-5 rounded-lg border-2 space-x-3 border-black"
                            >
                                <img width={40} src={item.icon} alt="" />
                                <div className="text-left">
                                    <b>{item.title}</b>
                                    <p>{item.subTitle}</p>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BaiTapState1;
