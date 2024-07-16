import React, { useState } from "react";
import carImage from "./../../assets/products/black-car.jpg";
const DemoState = () => {
    let diemToan = 9;
    //luôn khai báo hook states ở đầu component
    //hooks không đc khai báo ở các function hay bất kì điều kiện if else, chỉ đc khai báo ở function component
    //hook useState
    const [diem, setState] = useState(8);
    const [hoTen, setHoTen] = useState("Phat");

    return (
        <div className="py-20">
            <h2 className="text-2xl font-semibold ">Demo về State React</h2>
            {/* <p>{diemToan}</p> */}
            <p>Giá trị điểm dùng states: {diem}</p>
            <button
                onClick={() => {
                    setState(diem + 1);
                }}
                className="py-2 px-5 bg-red-500 "
            >
                Tăng điểm
            </button>
            <div>
                {/* thực hiện truyền data state hoTen vào thẻ p thông qua dataBinding 
                ở input sẽ chạy sự kiện onChange để update dữ liệu cho state hoTen thông qua phương thức setHoTen*/}
                <label htmlFor="">Nhập tên</label>
                <input
                    type="text"
                    id="name"
                    onChange={(e) => {
                        setHoTen(e.target.value);
                    }}
                    className="p-2 border"
                    placeholder="Nhập tên"
                />
                <p>{hoTen}</p>
            </div>

            <img src={carImage} alt="" />
        </div>
    );
};

export default DemoState;
